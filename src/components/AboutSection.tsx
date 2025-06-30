import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-levain-flour to-levain-cream relative overflow-hidden"
    >
      {/* Moroccan pattern overlay */}
      <div className="absolute inset-0 moroccan-pattern opacity-5" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-16 items-center"
          style={{ y, opacity }}
        >
          <div className="space-y-8">
            <motion.h2 
              className="font-display text-5xl md:text-6xl font-bold text-levain-charcoal leading-tight"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              L'Art de la 
              <span className="text-levain-clay block">Boulangerie</span>
            </motion.h2>
            
            <motion.p 
              className="font-body text-lg text-levain-charcoal/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
             Chez Levain.ma, nous célébrons l’art de la boulangerie artisanale avec passion.
Chaque jour, nous préparons pains, cookies et douceurs avec des ingrédients de qualité.
Inspirés par les traditions et les saveurs d’ici et d’ailleurs, nos créations sont uniques.
Levain.ma, c’est le goût du fait maison, avec une touche moderne et généreuse.
Rejoignez notre univers gourmand, fait de partage, d’authenticité et de plaisir.
            </motion.p>
            
            <motion.p 
              className="font-body text-lg text-levain-charcoal/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Chaque croissant, chaque pain, chaque pâtisserie raconte une histoire de 
              savoir-faire transmis de génération en génération, enrichi par l'innovation 
              et l'amour du métier.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { number: "150+", label: "Pains artisanaux" },
                { number: "50+", label: "Pâtisseries" },
                { number: "15", label: "Années d'expertise" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-3xl font-bold text-levain-botanical">
                    {stat.number}
                  </div>
                  <div className="font-body text-sm text-levain-charcoal/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gradient-to-br from-levain-clay/20 to-levain-botanical/20 rounded-3xl p-4 floating-animation shadow-2xl">
              <div className="w-full h-full rounded-2xl flex items-center justify-center overflow-hidden relative">
                {/* Real artisan video instead of image */}
                <video
                  src="/about.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white/60"
                />
                {/* Glass overlay for text */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-md rounded-b-2xl p-6 flex flex-col items-center">
                  <h3 className="font-display text-2xl font-bold text-levain-charcoal mb-1 drop-shadow">Votre Nouvelle Maison Pâtisserie</h3>
                  <p className="font-body text-levain-charcoal/80 text-center text-base">Artisan passionné depuis 1957</p>
                </div>
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-levain-gold/30 rounded-full animate-pulse" />
                <div className="absolute bottom-6 left-6 w-6 h-6 bg-levain-botanical/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-4 w-4 h-4 bg-levain-clay/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
