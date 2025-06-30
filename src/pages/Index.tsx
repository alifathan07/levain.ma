
import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import PreLoader from '../components/PreLoader';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';


const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-levain-flour">
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-16 h-16 border-4 border-levain-botanical/20 border-t-levain-botanical rounded-full animate-spin mb-4" />
      <p className="font-body text-levain-charcoal/70">Préparation en cours...</p>
    </motion.div>
  </div>
);

const Index = () => {
  const [showPreLoader, setShowPreLoader] = useState(true);

  const handlePreLoaderComplete = () => {
    setShowPreLoader(false);
  };

  return (
    <div className="relative">
      {/* Pre-loader */}
      {showPreLoader && <PreLoader onComplete={handlePreLoaderComplete} />}
      
      {/* Custom cursor */}
     
      
      {/* Page content */}
      <Suspense fallback={<LoadingSpinner />}>
        <motion.main 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: showPreLoader ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Hero Section with 3D bread sculpture */}
          <HeroSection />
          
          {/* About Section with animated content */}
          <AboutSection />
          
          {/* Interactive Gallery */}
          <GallerySection />
          
          {/* Contact & Reservation Section */}
          <ContactSection />
          
          {/* Enhanced Footer */}
          <footer className="bg-levain-charcoal text-white py-20 px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-levain-gold/5 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-levain-clay/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid md:grid-cols-3 gap-12 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-display text-4xl font-bold mb-6 text-levain-gold">
                    Levain.ma
                  </h3>
                  <p className="font-body text-white/80 leading-relaxed text-lg">
                    Votre destination artisanale pour une expérience culinaire authentique 
                    alliant tradition marocaine et excellence française.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-body font-semibold text-xl mb-6 text-levain-gold">Nos Services</h4>
                  <ul className="space-y-3 font-body text-white/80">
                    <li className="flex items-center gap-2">
                      <span className="text-levain-gold">🥐</span>
                      Boulangerie artisanale
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-levain-gold">🧁</span>
                      Pâtisserie française
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-levain-gold">☕</span>
                      Café & restaurant
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-levain-gold">🎂</span>
                      Commandes personnalisées
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-levain-gold">🎉</span>
                      Événements privés
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-body font-semibold text-xl mb-6 text-levain-gold">Suivez-nous</h4>
                  <div className="flex space-x-4 mb-6">
                    {[
                      { name: 'Instagram', icon: <FaInstagram /> },

                      { name: 'WhatsApp', icon: <FaWhatsapp /> }
                    ].map((social) => (
                      <motion.button
                        key={social.name}
                        onClick={() => {
                          if (social.name === 'Instagram') {
                            window.open('https://www.instagram.com/levain.ma/', '_blank');
                          } else if (social.name === 'WhatsApp') {
                            window.open('https://wa.me/212623722198', '_blank');
                          }
                        }}
                        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-levain-gold/20 transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="text-lg">{social.icon}</span>
                      </motion.button>
                    ))}
                  </div>
                  <p className="font-body text-white/60 text-sm leading-relaxed">
                    Newsletter: Inscrivez-vous pour découvrir nos dernières créations et nos événements exclusifs
                  </p>
                </motion.div>
              </div>
              
              <motion.div 
                className="border-t border-white/20 pt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="font-body text-white/60">
                  © 2025 Levain.ma - Tous droits réservés • Conçu avec passion à Casablanca
                </p>
              </motion.div>
            </div>
          </footer>
        </motion.main>
      </Suspense>
    </div>
  );
};

export default Index;
