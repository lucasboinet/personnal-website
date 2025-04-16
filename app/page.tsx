"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Code, Globe, Laptop, Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const ref = useRef(null)

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-xl">Lucas Boinet</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                À Propos
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex md:hidden">
              <Button onClick={() => setMobileMenuOpen(true)} variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-4 flex flex-col">
          <div className="flex justify-end">
            <Button onClick={() => setMobileMenuOpen(false)} variant="ghost" size="icon">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
            <Link href="#services" className="text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="#portfolio" className="text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>
              Portfolio
            </Link>
            <Link href="#about" className="text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>
              À Propos
            </Link>
            <Link href="#contact" className="text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-xl font-medium text-primary mb-6">Développeur web & créateur d'Applications freelance</h1>
              <motion.span
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Bonjour, je suis{" "}
                <span className="text-primary relative">
                  Lucas
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.5C47.6667 1.5 154.4 -1.9 199 5.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-primary/30"
                    />
                  </svg>
                </span>
              </motion.span>
              <motion.h2
                className="text-xl md:text-2xl text-gray-600 mb-10 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Création d'applications web et de sites internet <span className="font-semibold">sur mesure, modernes et performants</span>

              </motion.h2>
              <motion.div
                className="flex flex-col sm:flex-row items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ234fMyOY_JaOSjYoFVPK8gGHv5esLaX_6TrvRf8B1bq_uDhBoy4Su1eBXMDhZcZMXenB2-_E_9" target="_blank">Discutons de Votre Projet</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <Link href="#portfolio">Voir Mon Travail</Link>
                </Button>
              </motion.div>

              <motion.div
                className="mt-12 flex items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <span className="text-sm text-gray-600">
                  +3 ans d'expérience en développement web
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 relative mt-16 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Main image with clip path */}
                <div className="relative z-10 w-full max-w-md mx-auto overflow-hidden">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-2">
                    <div className="w-full h-full rounded-xl overflow-hidden relative">
                      <Image
                        src="/profile-image.jpeg"
                        alt="Portrait du développeur"
                        width={600}
                        height={600}
                        priority
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md aspect-square border-2 border-dashed border-primary/30 rounded-2xl -rotate-6"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md aspect-square border-2 border-primary/20 rounded-2xl rotate-6"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-tr-full -z-10"></div>

        {/* Animated dots pattern */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute left-1/4 top-1/4 w-2 h-2 rounded-full bg-primary"></div>
          <div className="absolute left-1/3 top-1/2 w-2 h-2 rounded-full bg-primary"></div>
          <div className="absolute left-2/3 top-1/3 w-2 h-2 rounded-full bg-primary"></div>
          <div className="absolute left-3/4 top-3/4 w-2 h-2 rounded-full bg-primary"></div>
          <div className="absolute left-1/5 top-2/3 w-2 h-2 rounded-full bg-primary"></div>
          <div className="absolute left-4/5 top-1/5 w-2 h-2 rounded-full bg-primary"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mes services de développement web sur mesure</h2>
            <p className="text-lg text-gray-600 my-8">
              Des solutions numériques complètes pour répondre à tous vos besoins en ligne.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="py-0 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-6 p-3 bg-primary/10 rounded-full w-fit">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Création de Sites Web
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Que ce soit pour un site vitrine, un portfolio ou un site d'entreprise, je m'adapte à vos besoins pour créer une interface intuitive, rapide et entièrement personnalisée. <br /><br /> Chaque site est pensé pour offrir la meilleure expérience utilisateur et valoriser votre image en ligne.
                  </p>
                  <div className="flex flex-row flex-wrap items-center gap-2 text-xs mt-4">
                    <span className="bg-primary text-secondary rounded-full px-2 py-1">Site vitrine</span>
                    <span className="bg-primary text-secondary rounded-full px-2 py-1">E-commerce</span>
                    <span className="bg-primary text-secondary rounded-full px-2 py-1">SEO</span>
                    <span className="bg-primary text-secondary rounded-full px-2 py-1">Clé en main</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="py-0 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-6 p-3 bg-primary/10 rounded-full w-fit">
                    <Laptop className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Applications Web
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Que vous ayez besoin d'un outil métier, d'un espace client personnalisé ou d'une plateforme interactive, je conçois des solutions techniques fiables, sécurisées et performantes. <br /><br /> Mon objectif : vous fournir une application web parfaitement intégrée à votre workflow et facile à faire évoluer.
                  </p>
                  <div className="flex flex-row flex-wrap items-center gap-2 text-xs mt-4">
                    <span className="bg-primary text-secondary rounded-full px-2 py-1">Vue</span>
                    <span className="bg-primary text-secondary rounded-full px-2 py-1">React</span>
                    <span className="bg-primary text-secondary rounded-full px-2 py-1">Next.js</span>
                    <span className="bg-primary text-secondary rounded-full px-2 py-1">Nuxt</span>
                    <span className="bg-primary text-secondary rounded-full px-2 py-1">Strapi</span>
                    <span className="bg-primary text-secondary rounded-full px-2 py-1">Node.js</span>
                    <span className="bg-primary text-secondary rounded-full px-2 py-1">Laravel</span>
                    <span className="bg-primary text-secondary rounded-full px-2 py-1">Stripe</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ils m'ont fait confiance</h2>
            <p className="text-lg text-gray-600">
              Découvrez une sélection de mes travaux récents.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((item) => (
              <motion.div key={item.id} variants={fadeInUp} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={item.image}
                    alt={`${item.name}`}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-gray-200 mb-4 text-sm">{item.description}</p>
                    <div className="flex flex-row flex-wrap items-center gap-2 text-xs">
                      {item.tags.map((tag: string) => (
                        <span key={tag} className="bg-primary text-secondary rounded-full px-2 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/profile-image-big.jpeg"
                alt="Portrait du développeur"
                width={600}
                height={800}
                className="h-[80vh] w-full object-cover relative z-10 rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">À propos de moi</h2>
              <p className="text-lg text-gray-600">
                Bonjour, je suis un <span className="font-semibold">développeur web freelance</span> passionné par la création d'applications web. Avec plus de 3 ans d&apos;expérience dans le développement web, je m&apos;efforce de combiner mon savoir-faire pour donner vie à vos projets.
              </p>
              <p className="text-lg text-gray-600 mt-4">
                Mon objectif est clair : <span className="font-semibold">transformer vos idées en outils digitaux puissants</span>, pensés pour améliorer votre visibilité, automatiser vos processus ou offrir une expérience utilisateur fluide.
              </p>
              <p className="text-lg text-gray-600 mt-4">
                Grâce à une collaboration étroite, je conçois des applications web et des sites internet qui répondent parfaitement à vos besoins, tout en respectant les meilleures pratiques du développement et du référencement naturel (SEO).
              </p>

              <div className="grid grid-cols-2 gap-6 my-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Technologies Front-end</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>React / Next.js</li>
                    <li>Vue.js / Nuxt.js</li>
                    <li>HTML5 / CSS3 / SASS</li>
                    <li>Tailwind CSS / Bootstrap</li>
                    <li>Typescript</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Technologies Back-end</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Node.js / Express</li>
                    <li>PHP / Laravel</li>
                    <li>MongoDB / MySQL / Redis / PostgreSQL</li>
                    <li>Typescript</li>
                  </ul>
                </div>
              </div>

              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="#contact">Contactez-moi</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section >

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32" >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discutons de votre projet</h2>
            <p className="text-lg text-gray-600">
              Prêt à donner vie à votre projet ? Contactez-moi pour discuter de vos besoins et découvrir comment je peux
              vous aider.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section >

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t border-gray-200" >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-xl">Lucas Boinet</span>
              </Link>
              <p className="mt-2 text-sm text-gray-600">Développeur web freelance</p>

              <div className="space-x-2 text-xs mt-4">
                <span>Collaboration:</span>
                <a href="https://www.hugoboinet.com" className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                  Hugo Boinet - Graphiste freelance
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <Link href="#services" className="text-sm hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="text-sm hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="#about" className="text-sm hover:text-primary transition-colors">
                À Propos
              </Link>
              <Link href="#contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Lucas Boinet. Tous droits réservés.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              {/* <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                Twitter
              </Link> */}
              <Link href="https://www.linkedin.com/in/lucas-boinet/" className="text-gray-600 hover:text-primary transition-colors">
                LinkedIn
              </Link>
              <Link href="https://github.com/lucasboinet" className="text-gray-600 hover:text-primary transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer >
    </div >
  )
}

