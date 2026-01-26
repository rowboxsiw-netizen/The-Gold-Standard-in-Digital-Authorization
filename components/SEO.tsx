
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  slug?: string;
  schema?: any;
}

const SEO: React.FC<SEOProps> = ({ title, description, slug = '', schema }) => {
  useEffect(() => {
    document.title = `${title} | Authorize`;
    
    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Open Graph
    const updateOG = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOG('og:title', title);
    updateOG('og:description', description);
    updateOG('og:url', `https://authorize-example.com/#/${slug}`);
    updateOG('og:type', 'website');

    // Schema Markup
    if (schema) {
      // Fix: cast to HTMLScriptElement so that 'type' property can be accessed
      const existingScript = document.getElementById('schema-markup') as HTMLScriptElement | null;
      if (existingScript) {
        existingScript.textContent = JSON.stringify(schema);
      } else {
        const newScript = document.createElement('script');
        newScript.id = 'schema-markup';
        newScript.type = 'application/ld+json';
        newScript.textContent = JSON.stringify(schema);
        document.head.appendChild(newScript);
      }
    }

    return () => {
      // Cleanup if needed
    };
  }, [title, description, slug, schema]);

  return null;
};

export default SEO;
