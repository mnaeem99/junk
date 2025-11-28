import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Junk Removal Gallery - Before & After Photos in Dubai",
  description: "View our junk removal gallery showcasing before and after photos of professional junk removal projects in Dubai. See the quality of our work and transformation results.",
  keywords: [
    "junk removal gallery dubai",
    "junk removal before after dubai",
    "junk removal photos dubai",
    "junk removal projects dubai",
    "junk removal results dubai",
  ],
  openGraph: {
    title: "Junk Removal Gallery - Before & After Photos Dubai",
    description: "View our professional junk removal projects and transformation results in Dubai.",
    url: "https://ahlamjunkremovaluae.com/gallery",
    type: "website",
  },
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

