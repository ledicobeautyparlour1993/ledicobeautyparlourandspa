import { SITE, FAQ_ITEMS, SERVICES_LIST } from "./site";

const baseUrl = SITE.url;

export function getBeautyParlourSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: SITE.name,
    description: SITE.description,
    url: baseUrl,
    foundingDate: String(SITE.established),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.pin,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.9022,
      longitude: 84.1822,
    },
    telephone: `+91-${SITE.phone}`,
    email: SITE.email,
    openingHours: "Mo-Su 09:00-20:00",
    sameAs: [],
    image: `${baseUrl}/images/og-beauty.jpg`,
    priceRange: "₹₹",
    paymentAccepted: ["Cash", "UPI", "Card"],
    currenciesAccepted: "INR",
    areaServed: [
      {
        "@type": "City",
        name: "Dehri on Sone",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Bihar"
        }
      },
      {
        "@type": "AdministrativeArea", 
        name: "Rohtas District"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Beauty and Spa Services",
      itemListElement: SERVICES_LIST.flatMap(category => 
        category.services.map(service => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service,
            category: category.category
          }
        }))
      )
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1"
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    alternateName: "Ledico Beauty Parlour Dehri",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.full,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.pin,
      addressCountry: "IN",
    },
    telephone: `+91-${SITE.phone}`,
    openingHours: ["Mo-Su 09:00-20:00"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.9022,
      longitude: 84.1822,
    },
    image: `${baseUrl}/images/beauty-parlour.jpg`,
    priceRange: "₹₹",
    servesCuisine: undefined,
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 24.9022,
        longitude: 84.1822,
      },
      geoRadius: "50000"
    }
  };
}

export function getSpaSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: `${SITE.name} - Spa Services`,
    description: "Premium spa and wellness treatments in Dehri on Sone",
    url: `${baseUrl}/spa`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.pin,
      addressCountry: "IN",
    },
    telephone: `+91-${SITE.phone}`,
    openingHours: "Mo-Su 09:00-20:00",
    priceRange: "₹₹₹",
  };
}
