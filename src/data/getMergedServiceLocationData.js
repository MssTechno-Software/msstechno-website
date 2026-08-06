// src/utils/getMergedServiceLocationData.js
import { servicesData } from "./servicesData";
import { locationsData } from "./locationsData";
import { serviceLocationData } from "./serviceLocationData";

/**
 * Resolves a URL slug into a fully merged, enterprise-ready data payload.
 * Performs constant-time O(1) lookups and synthesizes schemas and link clusters.
 */
export const getMergedServiceLocationData = (slug) => {
  if (!slug) return null;
  const normalizedSlug = slug.toLowerCase().trim();

  // 1. Fetch Delta Override entry
  const delta = serviceLocationData[normalizedSlug];
  if (!delta) return null;

  // 2. Fetch Parent Service & Location entities
  const parentService = servicesData[delta.service];
  const parentLocation = locationsData[delta.location];

  if (!parentService || !parentLocation) return null;

  const canonicalUrl = `https://www.msstechno.com/${delta.canonicalSlug}`;

  // 3. Dynamically build Internal Linking Clusters from existing registry keys
  const allSlugs = Object.keys(serviceLocationData);

  // Related Services in the SAME city (e.g., Cloud Hyderabad, AI Hyderabad)
  const relatedServices = allSlugs
    .filter((key) => {
      const entry = serviceLocationData[key];
      return entry.location === delta.location && key !== normalizedSlug;
    })
    .map((key) => {
      const entry = serviceLocationData[key];
      const sObj = servicesData[entry.service];
      return {
        title: sObj ? `${sObj.title} ${parentLocation.city}` : key,
        slug: `/${key}`
      };
    })
    .slice(0, 4);

  // Related Locations for the SAME service (e.g., Web Dev Visakhapatnam, Web Dev Bangalore)
  const relatedLocations = allSlugs
    .filter((key) => {
      const entry = serviceLocationData[key];
      return entry.service === delta.service && key !== normalizedSlug;
    })
    .map((key) => {
      const entry = serviceLocationData[key];
      const lObj = locationsData[entry.location];
      return {
        city: lObj ? lObj.city : key,
        slug: `/${key}`
      };
    })
    .slice(0, 4);

  // 4. Merge Delta Overrides over Parent Defaults
  const mergedPayload = {
    slug: normalizedSlug,
    canonicalUrl,
    canonicalSlug: delta.canonicalSlug,

    // Entities
    service: parentService,
    location: parentLocation,

    // Overrides (Unique per slug)
    seo: delta.seo,
    hero: delta.hero,
    aeoOverview: delta.aeoOverview,
    caseStudies: delta.caseStudies || [],
    testimonials: delta.testimonials || [],
    faqs: delta.faqs || [],
    cta: delta.cta || {
      title: `Ready to Scale Your ${parentService.title} in ${parentLocation.city}?`,
      subtitle: "Schedule a one-on-one technical consultation with our engineering leads today.",
      buttonText: "Request Technical Consultation"
    },

    // Inherited Structural Data (Parent defaults used if no override provided)
    benefits: delta.benefits || parentService.defaultBenefits,
    technology: delta.technology || parentService.defaultTechStack,
    process: delta.process || parentService.defaultProcess,
    nearbyAreas: delta.nearbyAreas || parentLocation.defaultNearbyAreas,

    // Dynamically Synthesized Link Clusters
    relatedServices,
    relatedLocations
  };

  // 5. Build JSON-LD Schema Cluster
  mergedPayload.schemas = buildPageSchemas(mergedPayload);

  return mergedPayload;
};

/**
 * Builds standard structured data graphs for search and AI answer engines.
 */
function buildPageSchemas(merged) {
  const { canonicalUrl, seo, hero, aeoOverview, faqs, location, service, nearbyAreas } = merged;
  const companyName = "MSS Techno Software Pvt Ltd";
  const logoUrl = "https://www.msstechno.com/logo.png";

  // 1. ProfessionalService / LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${canonicalUrl}#localbusiness`,
    name: `${companyName} - ${location.city}`,
    url: canonicalUrl,
    email: "info@msstechno.com",
    logo: logoUrl,
    image: logoUrl,
    description: seo.description,
    telephone: "+91-8000-000-000",
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: location.country
    },
    sameAs: [
      "https://www.linkedin.com/company/msstechno",
      "https://clutch.co/profile/mss-techno",
      "https://www.goodfirms.co/company/mss-techno"
    ],

    openingHours: "Mo-Fr 09:00-18:00",

    knowsAbout: [
      "Custom Software Development",
      "Website Development",
      "Mobile App Development",
      "AI Development",
      "Cloud Services",
      "DevOps",
      "UI/UX Design",
      "QA Testing"
    ],

    areaServed: (nearbyAreas || []).map((area) => ({
      "@type": "Place",
      name: area
    })),
    priceRange: "$$$"
  };

  // 2. Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    name: hero.title,
    provider: {
      "@id": `${canonicalUrl}#localbusiness`
    },
    serviceType: service.title,
    description: seo.description,
    category: "Software Development",

    audience: {
      "@type": "BusinessAudience",
      audienceType: "Businesses"
    },

    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock"
    },
    areaServed: {
      "@type": "City",
      name: location.city
    }
  };

  // 3. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: (faqs || []).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  // 4. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.msstechno.com/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://www.msstechno.com/locations"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.city,
        item: `https://www.msstechno.com/locations/${location.slug}`
      },
      {
        "@type": "ListItem",
        position: 4,
        name: service.title,
        item: canonicalUrl
      },
    ]
  };

  // 5. SpeakableSpecification Schema (AEO / Voice Citation)
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    name: seo.title,
    url: canonicalUrl,
    description: seo.description,
    speakable: {
      "@type": "SpeakableSpecification",
      xpath: [
        "//section[@id='hero']//h1",
        "//section[@id='aeo-overview']//p[1]",
        "//section[@id='faq']//h2"
      ]
    }
  };

  return [localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema, speakableSchema];
}