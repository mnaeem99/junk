import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ahlam Junk Removal - Premium Junk Removal & Waste Disposal Services in Dubai, UAE",
    template: "%s | Ahlam Junk Removal Dubai",
  },
  description: "Professional same-day junk removal services in Dubai and across UAE. Eco-friendly furniture removal, appliance disposal, office junk removal, construction debris removal, and garden waste disposal. Free quotes, same-day service available. Call +971582103486.",
  keywords: [
    "junk removal dubai",
    "junk removal services dubai",
    "junk removal uae",
    "junk removal services uae",
    "furniture removal dubai",
    "furniture removal uae",
    "waste disposal dubai",
    "waste disposal uae",
    "same-day junk removal dubai",
    "same-day junk removal uae",
    "eco-friendly disposal dubai",
    "office junk removal dubai",
    "appliance removal dubai",
    "appliance removal uae",
    "construction debris removal dubai",
    "garden waste removal dubai",
    "garden waste disposal uae",
    "junk removal company dubai",
    "professional junk removal dubai",
    "junk removal near me dubai",
    "cheap junk removal dubai",
    "junk removal service dubai",
    "rubbish removal dubai",
    "trash removal dubai",
    "bulk waste removal dubai",
    "e-waste disposal dubai",
    "mattress removal dubai",
    "sofa disposal dubai",
    "fridge removal dubai",
    "washing machine disposal dubai",
    "tv removal dubai",
    "junk removal al barsha",
    "junk removal jumeirah",
    "junk removal business bay",
    "junk removal dubai marina",
    "junk removal downtown dubai",
    "junk removal palm jumeirah",
  ],
  authors: [{ name: "Ahlam Junk Removal", url: "https://ahlamjunkremovaluae.com" }],
  creator: "Ahlam Junk Removal",
  publisher: "Ahlam Junk Removal",
  category: "Junk Removal Services",
  classification: "Business",
  applicationName: "Ahlam Junk Removal",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a2540" },
    { media: "(prefers-color-scheme: dark)", color: "#0a2540" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: "/images/ahlam_logo.png", type: "image/png" },
      { url: "/images/ahlam_junk_logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/images/ahlam_logo.png", type: "image/png" },
    ],
    shortcut: "/images/ahlam_logo.png",
  },
  manifest: "/manifest.json",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://ahlamjunkremovaluae.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "https://ahlamjunkremovaluae.com",
      "ar-AE": "https://ahlamjunkremovaluae.com/ar",
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  openGraph: {
    title: "Ahlam Junk Removal - Premium Junk Removal Services in Dubai, UAE",
    description: "Professional same-day junk removal services in Dubai and across UAE. Eco-friendly furniture removal, appliance disposal, office junk removal, and more. Free quotes available.",
    url: "https://ahlamjunkremovaluae.com",
    siteName: "Ahlam Junk Removal",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/ahlam_junk_logo.svg",
        width: 1200,
        height: 630,
        alt: "Ahlam Junk Removal - Professional Junk Removal Services in Dubai, UAE",
      },
      {
        url: "/images/ahlam_banner.png",
        width: 1200,
        height: 630,
        alt: "Ahlam Junk Removal Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahlam Junk Removal - Premium Junk Removal Services in Dubai, UAE",
    description: "Professional same-day junk removal services in Dubai. Eco-friendly disposal, free quotes, same-day service available.",
    images: ["/images/ahlam_junk_logo.svg"],
    creator: "@ahlamjunkremoval", // Replace with actual Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": "25.2048;55.2708",
    "ICBM": "25.2048, 55.2708",
    "contact": "+971582103486",
    "email": "Junkremoval1.uae@gmail.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ahlam Junk Removal",
    "image": "https://ahlamjunkremovaluae.com/images/ahlam_junk_logo.svg",
    "@id": "https://ahlamjunkremovaluae.com",
    "url": "https://ahlamjunkremovaluae.com",
    "telephone": "+971582103486",
    "email": "Junkremoval1.uae@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2048,
      "longitude": 55.2708
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "priceRange": "$$",
    "serviceArea": {
      "@type": "City",
      "name": "Dubai"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Furniture Removal",
            "description": "Professional furniture removal services in Dubai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Appliance Removal",
            "description": "Eco-friendly appliance disposal and removal in Dubai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Junk Removal",
            "description": "Commercial office junk removal services in Dubai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction Debris Removal",
            "description": "Construction waste and debris removal in Dubai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garden Waste Removal",
            "description": "Garden waste disposal and removal services in Dubai"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ahlam Junk Removal",
    "url": "https://ahlamjunkremovaluae.com",
    "logo": "https://ahlamjunkremovaluae.com/images/ahlam_junk_logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971582103486",
      "contactType": "Customer Service",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
      "https://wa.me/+971582103486"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

