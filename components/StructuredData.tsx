export default function StructuredData() {
  const videoObjectSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "SceneYard After Effects Templates Demo",
    "description": "Preview of professional After Effects templates and motion graphics project files available on SceneYard.",
    "thumbnailUrl": "https://sceneyard.com/og-image.jpg",
    "uploadDate": "2025-01-01T00:00:00Z",
    "contentUrl": "https://sceneyard.com/#demo",
    "embedUrl": "https://sceneyard.com/#demo"
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "After Effects Templates Collection",
    "description": "Professional After Effects templates and motion graphics project files",
    "numberOfItems": "400",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Cinematic Title Templates",
        "url": "https://sceneyard.com/#demo"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Logo Animation Templates",
        "url": "https://sceneyard.com/#demo"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Lower Thirds Templates",
        "url": "https://sceneyard.com/#demo"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Social Media Templates",
        "url": "https://sceneyard.com/#demo"
      }
    ]
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Motion Graphics with SceneYard Templates",
    "description": "Learn how to use professional After Effects templates to create stunning motion graphics and boost your video editing career.",
    "provider": {
      "@type": "Organization",
      "name": "SceneYard",
      "sameAs": "https://sceneyard.com"
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use After Effects Templates from SceneYard",
    "description": "Step-by-step guide to downloading and using professional After Effects templates.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Browse Templates",
        "text": "Browse our library of 400+ professional After Effects templates",
        "url": "https://sceneyard.com/#demo"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Download Template",
        "text": "Download your chosen template instantly with credits",
        "url": "https://sceneyard.com/#demo"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Customize & Export",
        "text": "Open in After Effects, customize, and export your video",
        "url": "https://sceneyard.com/#how-it-works"
      }
    ]
  };

  const offerCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "SceneYard Template Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Credit Pack - Starter"
        },
        "price": "9",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Monthly Subscription"
        },
        "price": "29",
        "priceCurrency": "USD"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SceneYard",
    "url": "https://sceneyard.com",
    "logo": "https://sceneyard.com/logo.png",
    "description": "Premium After Effects templates and motion graphics project files for video editors and motion designers.",
    "sameAs": [
      "https://twitter.com/sceneyard",
      "https://instagram.com/sceneyard",
      "https://youtube.com/@sceneyard"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@sceneyard.com",
      "contactType": "Customer Support"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SceneYard",
    "url": "https://sceneyard.com",
    "description": "Download professional After Effects templates and motion graphics project files. Studio-quality AE templates for video editing and modern motion design.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://sceneyard.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SceneYard Premium After Effects Templates",
    "description": "Access to 400+ professional After Effects templates and motion graphics project files. Studio-quality templates for video editing, motion design, and professional projects.",
    "brand": {
      "@type": "Brand",
      "name": "SceneYard"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "9",
      "highPrice": "29",
      "offerCount": "400",
      "availability": "https://schema.org/PreOrder"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SceneYard",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "128"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sceneyard.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Templates",
        "item": "https://sceneyard.com/#demo"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Waitlist",
        "item": "https://sceneyard.com/#waitlist"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the credit system work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Credits are used to download templates. Each template costs between 1-5 credits depending on complexity. You can purchase credit packs or subscribe for monthly credits. Golden Members get +15% bonus credits on every purchase."
        }
      },
      {
        "@type": "Question",
        "name": "What are the pricing plans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible pricing: pay-as-you-go credit packs starting at $9 for 10 credits, or monthly subscriptions from $29/month with 20 credits included. Golden Members get lifetime +15% bonus credits."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use templates for commercial projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All templates include a commercial license. You can use them in client work, YouTube videos, social media content, and any commercial projects. The license is per-project, meaning you can use the template in unlimited projects once downloaded."
        }
      },
      {
        "@type": "Question",
        "name": "Do templates require plugins?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most templates are plugin-free and work with vanilla After Effects. When plugins are required, we clearly mark them in the template description. We prioritize templates that work out-of-the-box with standard AE installations."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
