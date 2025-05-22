"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectsSection from "@/components/projects-section";

export default function LandingPage() {

  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}

      <HeroSection />

      <div className="max-w-[1440px] px-[20px] md:px-[40px] mx-auto w-full space-y-20">
        <ServicesSection />

        <ProjectsSection />

        <ContactSection />

        <Footer />
      </div>
    </div >
  )
}

