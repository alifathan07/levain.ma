import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import BreadSculpture from './BreadSculpture';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black"
      style={{ y, opacity }}
    >
      {/* Enhanced animated background flour dust with more particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, -15, -40, 0],
              x: [0, 15, -8, 12, 0],
              rotate: [0, 180, 270, 360],
              opacity: [0.2, 0.8, 0.3, 0.9, 0.2],
              scale: [0.5, 1.2, 0.8, 1.5, 0.5]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Ambient light rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-levain-botanical/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-levain-botanical/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '2s' }} />
      </div>

      {/* Enhanced 3D Canvas with mouse interaction */}
      <div className="absolute inset-0 z-10">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            mouseButtons={{}}
          />
          <Environment preset="sunset" />
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <pointLight position={[-10, -10, 5]} intensity={0.8} color="#D2691E" />
          <BreadSculpture />
        </Canvas>
      </div>

      {/* Hero Content with enhanced animations */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          style={{
            x: mousePosition.x * 5,
            y: mousePosition.y * 5
          }}
        >
          {/* Animated subtitle that appears first */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-4"
          >
            <span className="font-body text-white text-lg tracking-widest uppercase">
            boulangerie - pâtisserie - café - restaurant
            </span>
          </motion.div>

          {/* Main title with letter-by-letter animation */}
          <motion.h1 
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <motion.span
              className="inline-block text-white"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            >
              Levain
            </motion.span>
            <motion.span
              className="inline-block text-white ml-2"
              initial={{ y: 100, opacity: 0, rotate: -5 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            >
              .ma
            </motion.span>
          </motion.h1>
          
          {/* Enhanced subtitle with typewriter effect */}
          <motion.div
            className="font-body text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          >
            <motion.p
              className="leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              Since 1957
            </motion.p>
            <motion.p
              className="leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.3 }}
            >
              rencontre l'excellence marocaine 
            </motion.p>
          </motion.div>
          
          {/* Enhanced CTA buttons with more sophisticated animations */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.8 }}
          >
            <motion.button 
              onClick={() => {
                const gallery = document.getElementById('gallery');
                if (gallery) {
                  gallery.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative px-10 py-5 bg-levain-botanical text-white font-body font-semibold rounded-full overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span 
                className="relative z-10 flex items-center gap-3 cursor-pointer"
              >
                Découvrir nos créations
                <motion.span 
                  className="inline-block"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) {
                  contact.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative px-10 py-5 border-2 border-levain-clay bg-white text-levain-clay font-body font-semibold rounded-full overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Réserver une table
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator with breathing animation */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
         
        </motion.div>
      </div>

      {/* Subtle grain overlay for texture */}
      <div className="absolute inset-0 bg-flour-texture opacity-20 pointer-events-none" />
    </motion.section>
  );
};

export default HeroSection;
