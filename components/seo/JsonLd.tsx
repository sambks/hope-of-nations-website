import { site } from "@/lib/content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: site.name,
    alternateName: "Hope of Nations",
    description: site.description,
    url: site.url,
    image: `${site.url}/brand/logo.png`,
    slogan: site.mission,
    telephone: site.phones.map((phone) => phone.tel.replace("tel:", "")),
    sameAs: [site.socials.facebook, site.socials.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.suburb,
      addressRegion: "Western Cape",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.005,
      longitude: 18.466,
    },
    areaServed: ["Wynberg", "Cape Town", "South Africa"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "18:00",
        closes: "19:00",
      },
    ],
    knowsAbout: [
      "multicultural church Cape Town",
      "church in Wynberg",
      "Sunday church Cape Town",
      "prayer Cape Town",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
