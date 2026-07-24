import { Helmet } from "react-helmet-async";

const baseUrl = "https://www.msstechno.com";
const logoUrl = `${baseUrl}/logo.png`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,

  name: "MSS Techno Software Pvt Ltd",
  url: baseUrl,
  logo: logoUrl,

  description:
    "MSS Techno Software Pvt Ltd specializes in AI Solutions, Custom Software Development, Web Development, Mobile App Development, Cloud Solutions, DevOps, UI/UX Design, Data Analytics and QA Testing.",

  email: "info@msstechno.com",
  telephone: "+14372997316",

  sameAs: [
    "https://www.linkedin.com/company/mss-techno-pvt-ltd/"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,

  url: baseUrl,
  name: "MSS Techno Software Pvt Ltd",

  description:
    "MSS Techno Software Pvt Ltd provides AI Solutions, Custom Software Development, Web Development, Mobile App Development, Cloud Solutions, DevOps, UI/UX Design, Data Analytics and QA Testing services.",

  publisher: {
    "@id": `${baseUrl}/#organization`
  },

  inLanguage: "en-IN"
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareCompany",
  "@id": `${baseUrl}/#softwarecompany`,

  name: "MSS Techno Software Pvt Ltd",
  url: baseUrl,

  logo: logoUrl,
  image: logoUrl,

  description:
    "MSS Techno Software Pvt Ltd is an AI-driven software development company providing AI Solutions, Custom Software Development, Web Development, Mobile App Development, Cloud Solutions, DevOps, UI/UX Design, Data Analytics and QA Testing services.",

  email: "info@msstechno.com",
  telephone: "+14372997316",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Malikipuram, Kesanapalli",
    addressLocality: "Amalapuram",
    addressRegion: "Andhra Pradesh",
    postalCode: "533201",
    addressCountry: "IN"
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "09:00",
      closes: "18:00"
    }
  ],

  priceRange: "$$",

  sameAs: [
    "https://www.linkedin.com/company/mss-techno-pvt-ltd/"
  ],

  serviceArea: [
    {
      "@type": "AdministrativeArea",
      "name": "Andhra Pradesh"
    },
    {
      "@type": "City",
      "name": "Rajahmundry"
    },
    {
      "@type": "City",
      "name": "Visakhapatnam"
    },
    {
      "@type": "City",
      "name": "Vijayawada"
    },
    {
      "@type": "City",
      "name": "Hyderabad"
    },
    {
      "@type": "Country",
      "name": "India"
    },
    {
      "@type": "City",
      "name": "Toronto"
    },
    {
      "@type": "Country",
      "name": "Canada"
    },
    {
      "@type": "City",
      "name": "Scarborough"
    }
  ],

  areaServed: [
    "Rajahmundry",
    "Visakhapatnam",
    "Vijayawada",
    "Hyderabad",
    "Andhra Pradesh",
    "India",
    "Toronto",
    "Canada"
  ],

  knowsAbout: [
    "Artificial Intelligence",
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "DevOps",
    "UI/UX Design",
    "Data Analytics",
    "QA Testing",
    "Digital Transformation"
  ],

  parentOrganization: {
    "@id": `${baseUrl}/#organization`
  }
};

const SEO = ({
  title,
  description,
  url,
  image = `${baseUrl}/og-image.jpeg`,
  showSchemas = false,
}) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MSS Techno" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="MSS Techno - Building Intelligent Software for Modern Businesses"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content="MSS Techno - Building Intelligent Software for Modern Businesses"
      />

      {showSchemas && (
        <>
          <script type="application/ld+json">
            {JSON.stringify(organizationSchema)}
          </script>

          <script type="application/ld+json">
            {JSON.stringify(websiteSchema)}
          </script>

          <script type="application/ld+json">
            {JSON.stringify(localBusinessSchema)}
          </script>
        </>
      )}
    </Helmet>
  );
};

export default SEO;