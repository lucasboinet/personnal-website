import type { Metadata } from "next";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import "./globals.css";
import { AppProviders } from "@/components/app-providers";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import { ReactLenis, useLenis } from 'lenis/react'

const metadataTitle = "Lucas Boinet | Développeur web full-stack applications & sites web";
const metadataDescription =
  "Développeur full-stack freelance à Lyon en création de sites web, développement d'applications, SEO et solutions sur mesure adaptées a vos besoins.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lucasboinet.fr"),
  title: metadataTitle,
  description: metadataDescription,
  creator: 'Lucas Boinet',
  publisher: 'Lucas Boinet',
  formatDetection: {
    address: false,
    telephone: false,
  },
  authors: [{ name: 'Lucas Boinet' }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  keywords: ["Développeur", "freelance", "full-stack", "Lyon", "site web", "application", "solution sur mesure", "sur mesure", "développement", "Lucas Boinet", "logiciel"],
  twitter: {
    card: 'summary_large_image',
    title: metadataTitle,
    description: metadataDescription,
    images: '/open-graph-caption.png',
  },
  alternates: {
    canonical: 'https://lucasboinet.fr',
    languages: {
      'fr-FR': 'https://lucasboinet.fr',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://lucasboinet.fr',
    siteName: 'Lucas Boinet',
    locale: 'fr-FR',
    title: metadataTitle,
    description: metadataDescription,
    emails: 'lucasboinet.pro@gmail.com',
    images: '/open-graph-caption.png'
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
    <head>
      <title>Lucas Boinet | Développeur web full-stack applications & sites web</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href='https://fonts.googleapis.com/css?family=DM Serif Text' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=DM Sans' rel='stylesheet'/>
    </head>
    <body>
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            wheelMultiplier: 1.6,
            gestureOrientation: "vertical",
            autoRaf: true,
          }}
        />
        <AppProviders>
          {children}
        </AppProviders>
        <Toaster richColors />
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Lucas Boinet',
              url: 'https://www.lucasboinet.fr',
              sameAs: [
                'https://github.com/lucasboinet',
                'https://linkedin.com/in/lucas-boinet'
              ],
              jobTitle: 'Développeur full-stack freelance',
              worksFor: {
                '@type': 'Organization',
                name: 'Lucas Boinet'
              }
            })
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5XEYYHY583"></script>
        <script src="/google-tag.js"></script>
      </body>
    </html>
  );
}