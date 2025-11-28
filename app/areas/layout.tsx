import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Junk Removal Service Areas in Dubai - All Areas Covered",
  description: "Professional junk removal services across all areas of Dubai including Al Barsha, Jumeirah, Business Bay, Dubai Marina, Downtown Dubai, Palm Jumeirah, and more. Same-day service available in all Dubai areas.",
  keywords: [
    "junk removal al barsha",
    "junk removal jumeirah",
    "junk removal business bay",
    "junk removal dubai marina",
    "junk removal downtown dubai",
    "junk removal palm jumeirah",
    "junk removal dubai silicon oasis",
    "junk removal mirdif",
    "junk removal areas dubai",
    "junk removal service areas dubai",
    "furniture removal dubai areas",
    "appliance removal dubai areas",
  ],
  openGraph: {
    title: "Junk Removal Service Areas in Dubai - Ahlam Junk Removal",
    description: "We provide professional junk removal services across all areas of Dubai. Same-day service available.",
    url: "https://ahlamjunkremovaluae.com/areas",
    type: "website",
  },
  alternates: {
    canonical: "/areas",
  },
};

export default function AreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

