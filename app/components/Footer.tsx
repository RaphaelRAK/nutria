import Link from 'next/link';
import { FaPhone, FaEnvelope, FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-forest-dark to-forest-dark/95 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-tech-blue/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-golden-yellow/5 rounded-full -ml-32 -mb-32"></div>
      
      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="md:col-span-5">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-white">Nutr</span>
                <span className="text-golden-yellow">IA</span>
              </h3>
              <p className="mb-6 text-white/80 max-w-md">
                NutrIA combine l'intelligence artificielle et l'agronomie pour vous aider à optimiser vos cultures, réduire votre empreinte écologique et augmenter vos rendements.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all">
                  <FaTwitter />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all">
                  <FaFacebook />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all">
                  <FaLinkedin />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Navigation</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-white/70 hover:text-golden-yellow transition-colors inline-block">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/70 hover:text-golden-yellow transition-colors inline-block">
                    Qui sommes-nous ?
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-white/70 hover:text-golden-yellow transition-colors inline-block">
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-golden-yellow transition-colors inline-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-golden-yellow mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-white/80">123 Avenue de l'Innovation</p>
                    <p className="text-white/80">75008 Paris, France</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-golden-yellow mr-4">
                    <FaPhone />
                  </div>
                  <span className="text-white/80">0262 012 645</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-golden-yellow mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-white/80">contact@nutria.fr</p>
                    <p className="text-white/80">info@nutria.fr</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 border-t border-white/10">
        <div className="container text-center">
          <p className="text-white/60">© NutrIA 2025 - Une technologie certifiée RGPD</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 