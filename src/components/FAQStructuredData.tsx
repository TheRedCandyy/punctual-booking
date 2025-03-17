import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQItem[];
}

/**
 * FAQStructuredData component that adds JSON-LD structured data for FAQs
 * This helps search engines display FAQ rich snippets in search results
 */
export function FAQStructuredData({ faqs }: FAQStructuredDataProps) {
  useEffect(() => {
    // Create the structured data object for FAQs
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    // Create or update the script element
    let scriptElement = document.querySelector('script[data-type="FAQPage"]') as HTMLScriptElement;
    
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      scriptElement.setAttribute('data-type', 'FAQPage');
      document.head.appendChild(scriptElement);
    }
    
    scriptElement.textContent = JSON.stringify(structuredData);
    
    // Cleanup function to remove the script when component unmounts
    return () => {
      const scriptToRemove = document.querySelector('script[data-type="FAQPage"]');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [faqs]);
  
  // This component doesn't render anything visible
  return null;
} 