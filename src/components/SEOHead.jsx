import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { organizationSchema, faqSchema } from '../utils/seoConfig';

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/og-image.jpg',
  schemaData = null
}) => {
  const location = useLocation();
  const baseUrl = 'https://handvantage.co';
  // Normalize path by removing trailing slash for canonical URL
  const cleanPath = location.pathname.endsWith('/') && location.pathname.length > 1
    ? location.pathname.slice(0, -1)
    : location.pathname;
  const fullUrl = `${baseUrl}${cleanPath}`;

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical || fullUrl;

    // Update Open Graph tags
    const updateOGTag = (property, content) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    updateOGTag('og:url', fullUrl);
    updateOGTag('og:image', `${baseUrl}${ogImage}`);

    // Update Twitter tags
    const updateTwitterTag = (name, content) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', `${baseUrl}${ogImage}`);
    updateTwitterTag('twitter:card', 'summary_large_image');

    // Add Organization Schema (Global - AEO)
    let orgSchemaScript = document.querySelector('#organization-schema');
    if (!orgSchemaScript) {
      orgSchemaScript = document.createElement('script');
      orgSchemaScript.id = 'organization-schema';
      orgSchemaScript.type = 'application/ld+json';
      document.head.appendChild(orgSchemaScript);
    }
    orgSchemaScript.textContent = JSON.stringify(organizationSchema);

    // Add FAQ Schema (Global - AEO for AI platforms)
    let faqSchemaScript = document.querySelector('#faq-schema');
    if (!faqSchemaScript) {
      faqSchemaScript = document.createElement('script');
      faqSchemaScript.id = 'faq-schema';
      faqSchemaScript.type = 'application/ld+json';
      document.head.appendChild(faqSchemaScript);
    }
    faqSchemaScript.textContent = JSON.stringify(faqSchema);

    // Add page-specific structured data if provided
    if (schemaData) {
      let schemaScript = document.querySelector('#page-schema');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'page-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaData);
    }

  }, [title, description, keywords, canonical, fullUrl, ogImage, schemaData]);

  return null;
};

export default SEOHead;