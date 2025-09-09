// Service Worker for Handvantage Website Performance Optimization
const CACHE_NAME = 'handvantage-v1';
const STATIC_CACHE = 'handvantage-static-v1';
const DYNAMIC_CACHE = 'handvantage-dynamic-v1';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/robots.txt',
  '/sitemap.xml',
  '/site.webmanifest'
];

// API endpoints and dynamic content
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

// Install event - cache static files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle static files
  if (STATIC_FILES.some(file => url.pathname === file || url.pathname.endsWith(file))) {
    event.respondWith(
      caches.match(request)
        .then(response => {
          return response || fetch(request);
        })
    );
    return;
  }

  // Handle dynamic content with cache-first strategy for images and fonts
  if (request.destination === 'image' || request.destination === 'font') {
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            return response;
          }
          
          return fetch(request)
            .then(fetchResponse => {
              // Only cache successful responses
              if (fetchResponse && fetchResponse.status === 200) {
                const responseClone = fetchResponse.clone();
                caches.open(DYNAMIC_CACHE)
                  .then(cache => {
                    cache.put(request, responseClone);
                  })
                  .catch(() => {
                    // Silently handle cache errors
                  });
              }
              return fetchResponse;
            })
            .catch(error => {
              // Fallback for images
              if (request.destination === 'image') {
                return new Response('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="#f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999">Image</text></svg>', {
                  headers: { 'Content-Type': 'image/svg+xml' }
                });
              }
              // For other resources, throw the error to be handled by the browser
              throw error;
            });
        })
    );
    return;
  }

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .catch(() => {
          return caches.match('/index.html');
        })
    );
    return;
  }

  // Default: network first, then cache
  event.respondWith(
    fetch(request)
      .then(response => {
        // Only cache successful responses for GET requests
        if (response && response.status === 200 && request.method === 'GET') {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE)
            .then(cache => {
              cache.put(request, responseClone);
            })
            .catch(() => {
              // Silently handle cache errors
            });
        }
        
        return response;
      })
      .catch(error => {
        // Try to serve from cache if network fails
        return caches.match(request)
          .then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // If no cache available, let the browser handle the error
            throw error;
          });
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