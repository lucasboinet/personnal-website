import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/app-providers";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import BreakpointIndicator from "@/components/breakpoints-debug";

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
      <link href='https://fonts.googleapis.com/css?family=DM Serif Text' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=DM Sans' rel='stylesheet'/>
      <title>Lucas Boinet | Développeur web full-stack applications & sites web</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
        <AppProviders>
          {children}
        </AppProviders>
        {process.env.NODE_ENV === 'development' && <BreakpointIndicator/>}
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
      </body>
    </html>
  );
}