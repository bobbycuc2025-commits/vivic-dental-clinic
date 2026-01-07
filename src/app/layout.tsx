import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Option 1: Modern & Clean (Recommended for dental clinic)
import { Inter, Montserrat } from 'next/font/google';

// Option 2: Professional & Trustworthy
// import { Poppins, Lora } from 'next/font/google';

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

// Option 2 Configuration (Professional & Trustworthy)
// const poppins = Poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-poppins',
//   weight: ['300', '400', '500', '600', '700']
// });
// 
// const lora = Lora({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-lora',
//   weight: ['400', '500', '600', '700']
// });

export const metadata: Metadata = {
  title: "Dentist in Asaba | Orthodontist & Smile Makeover – Vivic Dental Clinic",
  description: "Vivic Dental Clinic offers expert orthodontics, braces, teeth whitening and smile makeovers in Asaba, Delta State. Modern dental care with warm hearts.",
  keywords: "dentist Asaba, orthodontist Asaba, braces Asaba, teeth whitening Asaba, smile makeover Asaba, aesthetic dentist Delta State",
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
  twitter: {
    card: "summary_large_image",
    title: "Vivic Dental Clinic - Dentist in Asaba",
    description: "Expert orthodontics, braces & smile makeovers in Asaba, Delta State",
    images: ["https://vivicdentalclinic.com/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      {/* For Option 2, use: className={`${poppins.variable} ${lora.variable}`} */}
      <head>
        <link rel="canonical" href="https://vivicdentalclinic.com" />
        
        {/* Add preconnect for Google Fonts for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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