import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Ahlam Junk Removal - Best Junk Removal Company in Dubai",
  description: "Why choose Ahlam Junk Removal? Professional, eco-friendly, same-day service, free quotes, fully licensed and insured. The best junk removal company in Dubai and UAE.",
  keywords: [
    "best junk removal company dubai",
    "why choose junk removal dubai",
    "professional junk removal dubai",
    "eco-friendly junk removal dubai",
    "licensed junk removal dubai",
    "insured junk removal dubai",
  ],
  openGraph: {
    title: "Why Choose Ahlam Junk Removal - Best in Dubai",
    description: "Discover why Ahlam Junk Removal is the best choice for professional junk removal services in Dubai.",
    url: "https://ahlamjunkremovaluae.com/why-us",
    type: "website",
  },
  alternates: {
    canonical: "/why-us",
  },
};

export default function WhyUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

