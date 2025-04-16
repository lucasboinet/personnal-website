import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/app-providers";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataTitle = "Lucas Boinet - Développeur full-stack freelance";
const metadataDescription =
  "Développeur full-stack freelance à Lyon, création de sites web, développement d'applications, et solutions sur mesure.";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
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
      </body>
    </html>
  );
}