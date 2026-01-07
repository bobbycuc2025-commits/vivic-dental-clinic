import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Option 1: Modern & Clean (Recommended for dental clinic)
import { Inter, Montserrat } from 'next/font/google';

// Option 1 Configuration (Modern & Clean)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "Dentist in Asaba | Orthodontist & Smile Makeover – Vivic Dental Clinic",
  description: "Vivic Dental Clinic offers expert orthodontics, braces, teeth whitening and smile makeovers in Asaba, Delta State. Modern dental care with warm hearts.",
  keywords: "dentist Asaba, orthodontist Asaba, braces Asaba, teeth whitening Asaba, smile makeover Asaba, aesthetic dentist Delta State",
  applicationName: "Vivic Dental Clinic",
  authors: [{ name: "Vivic Dental Clinic" }],
  creator: "Vivic Dental Clinic",
  publisher: "Vivic Dental Clinic",
  
  // PWA Metadata
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Vivic Dental",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
  },
  
  // Open Graph
  openGraph: {
    title: "Dentist in Asaba | Orthodontist & Smile Makeover – Vivic Dental Clinic",
    description: "Expert dental care in Asaba: Orthodontics, braces, teeth whitening, veneers & smile makeovers. Book your appointment today!",
    url: "https://vivicdentalclinic.com",
    siteName: "Vivic Dental Clinic",
    images: [
      {
        url: "https://vivicdentalclinic.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vivic Dental Clinic - Your Smile, Our Priority",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Vivic Dental Clinic - Dentist in Asaba",
    description: "Expert orthodontics, braces & smile makeovers in Asaba, Delta State",
    images: ["https://vivicdentalclinic.com/og-image.jpg"],
    creator: "@vivicdental",
  },
  
  // Robots
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
  
  // Verification
  verification: {
    google: "your-google-verification-code",
  },
  
  // Other Meta
  category: "medical",
  classification: "Dental Clinic",
};

export const viewport: Viewport = {
  themeColor: "#FF6200",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Vivic Dental" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vivic Dental" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#FF6200" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon and Apple Touch Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* PWA Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-167x167.png" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#FF6200" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FF6200" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vivicdentalclinic.com" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Vivic Dental Clinic",
              "description": "Expert orthodontics, braces, teeth whitening and smile makeovers in Asaba, Delta State",
              "url": "https://vivicdentalclinic.com",
              "telephone": "+2348100670347",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No. 1 Obi Link Drive, off Okpanam Road, opposite 5 Star Restaurant",
                "addressLocality": "Asaba",
                "addressRegion": "Delta State",
                "addressCountry": "NG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "6.2054",
                "longitude": "6.7009"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "16:00"
                }
              ],
              "priceRange": "₦₦",
              "image": "https://vivicdentalclinic.com/icon-512.png",
              "sameAs": [
                "https://www.facebook.com/vivicdentalclinic",
                "https://www.instagram.com/vivicdentalclinic"
              ]
            })
          }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Vivic Dental Clinic" />
        <meta name="geo.region" content="NG-DL" />
        <meta name="geo.placename" content="Asaba, Delta State" />
        <meta name="geo.position" content="6.2054;6.7009" />
        <meta name="ICBM" content="6.2054, 6.7009" />
        
        {/* Viewport for iOS */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}