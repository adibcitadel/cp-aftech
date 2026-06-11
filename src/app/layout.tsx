import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { ThemeProvider } from "@/components/ThemeProvider";
import { I18nProvider } from "@/i18n/I18nProvider";
import AIAssistant from "@/components/AIAssistant";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://aftech.co.id";

export const metadata: Metadata = {
  title: {
    default: "AFTECH | Enterprise Technology & Digital Ecosystem",
    template: "%s | AFTECH",
  },
  description:
    "Strategic technology partner for IT infrastructure, software engineering, IoT, and cybersecurity in Indonesia. End-to-end digital transformation solutions.",
  keywords: [
    "AFTECH",
    "enterprise technology",
    "digital transformation",
    "IoT",
    "cybersecurity",
    "Indonesia",
    "software development",
    "ERP",
    "system integrator",
  ],
  authors: [{ name: "PT AFTECH DAYA SOLUSINDO" }],
  creator: "PT AFTECH DAYA SOLUSINDO",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_ID",
    siteName: "AFTECH",
    title: "AFTECH | Enterprise Technology & Digital Ecosystem",
    description:
      "Strategic technology partner for IT infrastructure, software engineering, IoT, and cybersecurity in Indonesia.",
    url: siteUrl,
    images: [
      {
        url: "/images/logo-aftech.png",
        width: 1200,
        height: 630,
        alt: "AFTECH - Enterprise Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFTECH | Enterprise Technology & Digital Ecosystem",
    description:
      "Strategic technology partner for IT infrastructure, software engineering, IoT, and cybersecurity in Indonesia.",
    images: ["/images/logo-aftech.png"],
  },
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT AFTECH DAYA SOLUSINDO",
  alternateName: "AFTECH",
  url: siteUrl,
  logo: `${siteUrl}/images/logo-aftech.png`,
  description:
    "Strategic technology partner for IT infrastructure, software engineering, IoT, and cybersecurity in Indonesia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Lingkar Timur 23, Karangkandri, Kesugihan",
    addressLocality: "Cilacap",
    addressRegion: "Jawa Tengah",
    postalCode: "53274",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-822-3183-4977",
    contactType: "sales",
    email: "sales@aftech.co.id",
  },
  sameAs: [
    "https://rpms-portal.vercel.app/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300" suppressHydrationWarning>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="sw-register"
          strategy="afterInteractive"
        >{`
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}`}</Script>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <I18nProvider>
            <Navbar />
            {children}
            <Footer />
          </I18nProvider>
          <AIAssistant />
        </ThemeProvider>
      </body>
    </html>
  );
}
