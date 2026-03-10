import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import { SITE } from "@/lib/site";
import { getBeautyParlourSchema, getOrganizationSchema, getFAQSchema, getSpaSchema } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import "../styles/ledico.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#E91E63",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} – ${SITE.tagline} | Dehri, Bihar`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Ledico Beauty Parlour",
    "best beauty parlour in Dehri",
    "beauty parlour Dehri Bihar",
    "spa services Dehri",
    "bridal makeup Dehri",
    "hair salon Rohtas Bihar",
    "facial treatment Dehri",
    "beauty parlour near me",
    "spa near me Dehri",
    "makeup artist Dehri",
    "nail salon Dehri",
    "hair removal Dehri",
    "beautician Dehri on Sone",
    "wedding makeup Bihar",
    "beauty treatments Rohtas",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { email: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} – ${SITE.tagline}`,
    description: SITE.description,
    images: [{ url: "/images/og-beauty.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} – ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE.url },
  verification: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const beautyParlourSchema = getBeautyParlourSchema();
  const orgSchema = getOrganizationSchema();
  const faqSchema = getFAQSchema();
  const spaSchema = getSpaSchema();

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(beautyParlourSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(spaSchema) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-gray-800 antialiased">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
