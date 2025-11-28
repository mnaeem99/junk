import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Free Quote for Junk Removal Services in Dubai",
  description: "Contact Ahlam Junk Removal for a free quote on junk removal services in Dubai and UAE. Call +971582103486, WhatsApp, or email Junkremoval1.uae@gmail.com. Same-day service available.",
  keywords: [
    "junk removal dubai contact",
    "junk removal dubai phone number",
    "junk removal dubai whatsapp",
    "junk removal dubai email",
    "free quote junk removal dubai",
    "junk removal dubai booking",
  ],
  openGraph: {
    title: "Contact Ahlam Junk Removal - Free Quote Dubai",
    description: "Get a free quote for junk removal services in Dubai. Call, WhatsApp, or email us today.",
    url: "https://ahlamjunkremovaluae.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

