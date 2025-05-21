"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import GlowingOrb from "@/components/glowing-orb";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

const projects: any[] = [
  {
    id: 1,
    image: '/projects/skyloud.png',
    name: 'Skyloud App',
    description: "Une application de monitoring d'infrastructure cloud et de gestion de tickets clients",
    tags: ["Application web", "Microservices", "Cloud", "Front-end", "Back-end", "Stripe"]
  },
  {
    id: 2,
    image: '/projects/tokatab.png',
    name: 'Tokatab',
    description: "Une plateforme d'apprentissage du piano en ligne visant à devenir un véritable professeur virtuel",
    tags: ["Application web", "Piano", "Front-end", "Back-end", "Stripe"]
  },
  {
    id: 3,
    image: '/projects/bizbuddy.png',
    name: 'BizBuddy',
    description: "Une plateforme pour les freelances pour gérer leur projets, factures, devis et clients le tout dans un seul endroit",
    tags: ["Application web", "Freelance", "Front-end", "Back-end", "Stripe"]
  },
]

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}

      <HeroSection />

      <div
          className="max-w-[1440px] mx-auto w-full space-y-10"
          style={{animation: "translateIn 1s ease 800ms forwards"}}
      >
        <ServicesSection />

        <ContactSection />

        <Footer />
      </div>
    </div >
  )
}

