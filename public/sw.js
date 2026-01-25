// Service Worker for Handvantage Website Performance Optimization
// IMPORTANT: Update this version string whenever you deploy new content
// This ensures users get fresh content instead of cached versions
const SW_VERSION = '2025-01-25-v1';
const CACHE_NAME = `handvantage-${SW_VERSION}`;
const STATIC_CACHE = `handvantage-static-${SW_VERSION}`;
const DYNAMIC_CACHE = `handvantage-dynamic-${SW_VERSION}`;

// Files to precache (non-HTML static assets only)
// HTML files should NOT be cached aggressively to ensure fresh content
const STATIC_FILES = [
  '/favicon.svg',
  '/robots.txt',
  '/sitemap.xml',
  '/site.webmanifest'
];

// Files that should NEVER be cached (always fetch fresh)
const NEVER_CACHE = [
  '/index.html',
  '/sw.js'
];

// API endpoints and dynamic content patterns
const DYNAMIC_PATTERNS = [
  /^https:\/\/api\./,
  /^https:\/\/fonts\.googleapis\.com/,
  /^https:\/\/fonts\.gstatic\.com/,
  /^https:\/\/quest-media-storage-bucket\.s3\.us-east-2\.amazonaws\.com/,
  /^https:\/\/www\.googletagmanager\.com/,
  /^https:\/\/www\.google-analytics\.com/,
  /^https:\/\/js\.clickrank\.ai/,
  /^https:\/\/app\.noem\.ai/
];

// Install event - cache static files and skip waiting to activate immediately
self.addEventListener('install', event => {
  console.log(`[SW] Installing version ${SW_VERSION}`);
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        // Skip waiting to activate the new service worker immediately
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up ALL old caches and take control immediately
self.addEventListener('activate', event => {
  console.log(`[SW] Activating version ${SW_VERSION}`);
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            // Delete any cache that doesn't match current version
            if (!cacheName.includes(SW_VERSION)) {
              console.log(`[SW] Deleting old cache: ${cacheName}`);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Take control of all pages immediately (no reload required)
        return self.clients.claim();
      })
      .then(() => {
        // Notify all clients to refresh for new content
        return self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({
              type: 'SW_UPDATED',
              version: SW_VERSION
            });
          });
        });
      })
  );
});

// Fetch event - use appropriate caching strategy based on request type
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // NEVER cache HTML files or navigation requests - always fetch fresh
  // This is the key fix for the stale content issue
  if (request.mode === 'navigate' ||
    request.destination === 'document' ||
    url.pathname.endsWith('.html') ||
    url.pathname === '/' ||
    NEVER_CACHE.some(file => url.pathname === file)) {
    event.respondWith(
      fetch(request)
        .then(response => {
          return response;
        })
        .catch(() => {
          // Only use cache as offline fallback
          return caches.match('/index.html');
        })
    );
    return;
  }

  // For JS/CSS assets with hash in filename - cache forever (immutable)
  // These files have content-based hashes, so they're safe to cache
  if (url.pathname.startsWith('/assets/') &&
    (url.pathname.endsWith('.js') || url.pathname.endsWith('.css'))) {
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(request).then(fetchResponse => {
            if (fetchResponse && fetchResponse.status === 200) {
              const responseClone = fetchResponse.clone();
              caches.open(STATIC_CACHE).then(cache => {
                cache.put(request, responseClone);
              });
            }
            return fetchResponse;
          });
        })
    );
    return;
  }

  // Handle images and fonts with stale-while-revalidate strategy
  if (request.destination === 'image' || request.destination === 'font') {
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          // Fetch fresh copy in background regardless of cache hit
          const fetchPromise = fetch(request)
            .then(fetchResponse => {
              if (fetchResponse && fetchResponse.status === 200) {
                const responseClone = fetchResponse.clone();
                caches.open(DYNAMIC_CACHE)
                  .then(cache => {
                    cache.put(request, responseClone);
                  })
                  .catch(() => { });
              }
              return fetchResponse;
            })
            .catch(error => {
              // If we have cache, don't throw
              if (cachedResponse) {
                return cachedResponse;
              }
              // Fallback for images
              if (request.destination === 'image') {
                return new Response('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="#f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999">Image</text></svg>', {
                  headers: { 'Content-Type': 'image/svg+xml' }
                });
              }
              throw error;
            });

          // Return cached version immediately, but update cache in background
          return cachedResponse || fetchPromise;
        })
    );
    return;
  }

  // Default: network first, then cache (for everything else)
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE)
            .then(cache => {
              cache.put(request, responseClone);
            })
            .catch(() => { });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});

// Background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks here
      console.log('Background sync triggered')
    );
  }
});

// Push notifications support
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});