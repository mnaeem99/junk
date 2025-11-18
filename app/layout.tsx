import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UAE Junk Pros - Premium Junk Removal & Waste Disposal Services in Dubai",
  description: "Same-day, eco-friendly junk removal services in Dubai. Professional furniture removal, appliance disposal, office junk removal, and more.",
  keywords: "junk removal dubai, furniture removal dubai, waste disposal dubai, same-day junk removal, eco-friendly disposal, office junk removal, appliance removal, construction debris removal, garden waste removal",
  authors: [{ name: "UAE Junk Pros" }],
  creator: "UAE Junk Pros",
  publisher: "UAE Junk Pros",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://uaejunkpros.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UAE Junk Pros - Premium Junk Removal Services",
    description: "Professional, same-day junk removal in Dubai",
    type: "website",
    locale: "en_US",
    siteName: "UAE Junk Pros",
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE Junk Pros - Premium Junk Removal Services",
    description: "Professional, same-day junk removal in Dubai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

