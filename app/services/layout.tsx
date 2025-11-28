import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Junk Removal Services in Dubai, UAE - Professional Waste Disposal",
  description: "Comprehensive junk removal services in Dubai and UAE. Professional furniture removal, appliance disposal, office junk removal, construction debris removal, garden waste disposal, and e-waste recycling. Same-day service available.",
  keywords: [
    "junk removal services dubai",
    "junk removal services uae",
    "furniture removal dubai",
    "appliance removal dubai",
    "office junk removal dubai",
    "construction debris removal dubai",
    "garden waste removal dubai",
    "e-waste disposal dubai",
    "professional junk removal dubai",
    "same-day junk removal dubai",
  ],
  openGraph: {
    title: "Junk Removal Services in Dubai, UAE - Ahlam Junk Removal",
    description: "Professional junk removal services including furniture removal, appliance disposal, office junk removal, and more in Dubai and UAE.",
    url: "https://ahlamjunkremovaluae.com/services",
    type: "website",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

