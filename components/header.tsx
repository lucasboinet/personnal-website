'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerVariants = {
    floating: {
      paddingTop: "2rem",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    scrolled: {
      paddingTop: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const headerVariants = {
    floating: {
      width: "92%",
      maxWidth: "72rem", // max-w-6xl equivalent
      borderRadius: "100px",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(0, 0, 0, 0.05)",
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      padding: "0.75rem 1.5rem",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    scrolled: {
      width: "100%",
      maxWidth: "100%",
      borderRadius: 0,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      padding: "1rem 2rem",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        variants={containerVariants}
        initial="scrolled"
        animate={isScrolled ? "floating" : "scrolled"}
      >
        <motion.header
          variants={headerVariants}
          initial="scrolled"
          animate={isScrolled ? "floating" : "scrolled"}
        >
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
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
        </motion.header>
      </motion.div>
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
    </>
  );
}