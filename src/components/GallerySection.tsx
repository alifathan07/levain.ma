import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

// ... existing code ...
const galleryItems = [
  {
    title: "Croissants Artisanaux",
    description: "Feuilletage parfait, beurre de Normandie",
    image: "/project1.jpg",
    color: "levain-clay",
    story: "72 heures de fermentation lente"
  },
  {
    title: "Pains Traditionnels",
    description: "Levain naturel, farines biologiques",
    image: "/project2.jpg",
    color: "levain-botanical",
    story: "Recette transmise depuis 4 générations"
  },
  {
    title: "Pâtisseries Françaises",
    description: "Éclairs, tartes, mille-feuilles",
    image: "/project3.jpg",
    color: "levain-gold",
    story: "Techniques classiques de pâtisserie"
  },
  {
    title: "Spécialités Marocaines",
    description: "Chebakia, makroudh, cornes de gazelle",
    image: "/project4.jpg",
    color: "levain-clay",
    story: "Saveurs authentiques du Maghreb"
  },
  
  
];
// ... existing code ...


  return (
    <section 
      ref={sectionRef}
      id="gallery"
      className="py-28 px-4 bg-gradient-to-br from-levain-botanical/10 to-levain-clay/10 relative overflow-hidden min-h-screen"
    >
      {/* Subtle animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-levain-gold/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-levain-botanical/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-display text-6xl md:text-7xl font-extrabold text-levain-charcoal mb-6 tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nos <span className="text-levain-clay">Créations</span>
          </motion.h2>
          <motion.p 
            className="font-body text-2xl text-levain-charcoal/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Découvrez notre univers gourmand où chaque création raconte une histoire de passion, 
            de tradition et de savoir-faire artisanal transmis avec amour
          </motion.p>
        </motion.div>

        {/* Modern Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-xl bg-white/0 backdrop-blur-md border border-white/20 hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15, type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              {/* Glass overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 shadow-lg">
                  <h3 className="font-display text-2xl font-bold text-white mb-2 drop-shadow-lg">{item.title}</h3>
                  <p className="font-body text-lg text-white/80 mb-2">{item.description}</p>
                  <p className="font-body text-sm text-white/60 italic">{item.story}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modern call to action */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="relative px-16 py-5 bg-gradient-to-r from-levain-botanical to-levain-clay text-white font-body font-bold rounded-full overflow-hidden group shadow-xl text-2xl tracking-wide"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-levain-clay to-levain-botanical opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center gap-3">
              Voir toute notre carte
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
