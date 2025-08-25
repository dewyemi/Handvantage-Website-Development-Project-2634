import React, { useState, useRef, useCallback } from 'react';

/**
 * Optimized Image component with lazy loading, WebP support, and performance optimizations
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  quality = 80,
  sizes = '100vw',
  onLoad,
  onError,
  placeholder = 'blur',
  ...props
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef(null);

  // Generate WebP and fallback URLs for external images
  const generateImageUrls = useCallback((originalSrc) => {
    // For S3 images, we can add format conversion if supported
    if (originalSrc.includes('amazonaws.com')) {
      const baseUrl = originalSrc.split('.')[0];
      const extension = originalSrc.split('.').pop();
      
      return {
        webp: originalSrc.includes('.webp') ? originalSrc : `${baseUrl}.webp`,
        fallback: originalSrc,
        avif: `${baseUrl}.avif` // Future support
      };
    }
    
    return {
      webp: originalSrc,
      fallback: originalSrc
    };
  }, []);

  const imageUrls = generateImageUrls(src);

  const handleLoad = useCallback((event) => {
    setImageLoaded(true);
    if (onLoad) onLoad(event);
  }, [onLoad]);

  const handleError = useCallback((event) => {
    setImageError(true);
    if (onError) onError(event);
  }, [onError]);

  // Generate srcSet for responsive images
  const generateSrcSet = useCallback((url) => {
    if (!url || url.includes('amazonaws.com')) {
      // For S3 images, we can't dynamically resize without a service
      return undefined;
    }
    
    // For other images, generate different sizes if supported
    return undefined;
  }, []);

  // Placeholder styles
  const placeholderStyle = {
    backgroundColor: '#f1f5f9',
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='%23f1f5f9'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23cbd5e1' font-size='14'%3eLoading...%3c/text%3e%3c/svg%3e")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Modern browsers with WebP support */}
      <picture>
        {imageUrls.avif && (
          <source srcSet={imageUrls.avif} type="image/avif" />
        )}
        {imageUrls.webp && (
          <source srcSet={imageUrls.webp} type="image/webp" />
        )}
        <img
          ref={imgRef}
          src={imageUrls.fallback}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          decoding="async"
          sizes={sizes}
          srcSet={generateSrcSet(imageUrls.fallback)}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            ...(!imageLoaded && placeholder === 'blur' ? placeholderStyle : {}),
            opacity: imageLoaded ? 1 : 0.7,
            transition: 'opacity 0.3s ease',
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
          {...props}
        />
      </picture>

      {/* Error fallback */}
      {imageError && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100"
          style={{ width, height }}
        >
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Loading overlay */}
      {!imageLoaded && !imageError && placeholder === 'blur' && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}
    </div>
  );
};

/**
 * Hook for lazy loading images with Intersection Observer
 */
export const useLazyLoading = () => {
  const [imageRef, setImageRef] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    if (!imageRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    observer.observe(imageRef);

    return () => {
      if (imageRef) observer.unobserve(imageRef);
    };
  }, [imageRef]);

  return [setImageRef, isLoaded];
};

/**
 * Utility function to preload critical images
 */
export const preloadImage = (src, options = {}) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    if (options.sizes) img.sizes = options.sizes;
    if (options.srcset) img.srcset = options.srcset;
    
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Utility to preload multiple images
 */
export const preloadImages = async (images) => {
  const promises = images.map(img => {
    if (typeof img === 'string') {
      return preloadImage(img);
    }
    return preloadImage(img.src, img);
  });
  
  try {
    await Promise.all(promises);
    console.log('All critical images preloaded');
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

export default OptimizedImage;