import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

/**
 * SEO component that dynamically updates document metadata
 * This component should be used on each page to optimize SEO
 */
export function SEO({
  title = 'Punctual Booking - Efficient Appointment Scheduling',
  description = 'Streamline your appointment scheduling with our powerful booking platform',
  keywords = 'booking software, appointment scheduling, calendar management, SaaS, scheduling platform',
  ogTitle = 'Punctual Booking - Efficient Appointment Scheduling',
  ogDescription = 'Streamline your appointment scheduling with our powerful booking platform',
  ogImage = '/og-image.jpg',
  twitterTitle = 'Punctual Booking - Efficient Appointment Scheduling',
  twitterDescription = 'Streamline your appointment scheduling with our powerful booking platform',
  twitterImage = '/og-image.jpg',
  canonicalUrl = 'https://punctual-booking.com',
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', ogTitle, 'property');
    updateMetaTag('og:description', ogDescription, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    
    // Update Twitter tags
    updateMetaTag('twitter:title', twitterTitle);
    updateMetaTag('twitter:description', twitterDescription);
    updateMetaTag('twitter:image', twitterImage);
    
    // Update canonical URL
    const canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalElement) {
      canonicalElement.href = canonicalUrl;
    }
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonicalUrl,
  ]);
  
  // Helper function to update meta tags
  const updateMetaTag = (name: string, content: string, attributeName: string = 'name') => {
    const metaTag = document.querySelector(`meta[${attributeName}="${name}"]`) as HTMLMetaElement;
    if (metaTag) {
      metaTag.content = content;
    }
  };
  
  // This component doesn't render anything visible
  return null;
} 