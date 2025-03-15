import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'SoftwareApplication' | 'FAQPage' | 'Product';
  data: Record<string, unknown>;
}

/**
 * StructuredData component that adds JSON-LD structured data to the page
 * This helps search engines understand the content and display rich snippets
 */
export function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    // Create the structured data object
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    // Create or update the script element
    let scriptElement = document.querySelector(`script[data-type="${type}"]`) as HTMLScriptElement;
    
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      scriptElement.setAttribute('data-type', type);
      document.head.appendChild(scriptElement);
    }
    
    scriptElement.textContent = JSON.stringify(structuredData);
    
    // Cleanup function to remove the script when component unmounts
    return () => {
      const scriptToRemove = document.querySelector(`script[data-type="${type}"]`);
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [type, data]);
  
  // This component doesn't render anything visible
  return null;
} 