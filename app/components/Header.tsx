'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Qui sommes-nous ?', href: '/about' },
    { name: 'Tarifs', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <Image 
              src="/images/logo1.png" 
              alt="NutrIA Logo" 
              width={200}
              height={100}
              className="h-10 w-auto"
            />
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-forest-green to-tech-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <Link
                href={link.href}
                className={`${
                  scrolled ? 'text-dark-gray' : 'text-white'
                } hover:text-tech-blue transition-colors relative group font-medium`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-tech-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            custom={navLinks.length}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <Link 
              href="/contact" 
              className={`${
                scrolled 
                  ? 'bg-tech-blue text-white hover:bg-tech-blue/90' 
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30'
              } px-5 py-2 rounded-lg transition-all`}
            >
              Demander une démo
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`md:hidden ${scrolled ? 'text-forest-green' : 'text-white'} hover:text-tech-blue p-2`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg"
          >
            <div className="container py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-dark-gray hover:text-tech-blue transition-colors py-2 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-tech-blue text-white px-4 py-3 rounded-lg font-medium text-center hover:bg-tech-blue/90 transition mt-6"
              >
                Demander une démo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 