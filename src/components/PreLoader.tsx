
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface PreLoaderProps {
  onComplete: () => void;
}

const PreLoader = ({ onComplete }: PreLoaderProps) => {
  const [step, setStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    { text: "Préparation de la pâte", icon: "🌾", duration: 1000 },
    { text: "Fermentation du levain", icon: "⏰", duration: 1200 },
    { text: "Façonnage artisanal", icon: "👐", duration: 800 },
    { text: "Cuisson au four", icon: "🔥", duration: 1000 },
    { text: "Levain.ma", icon: "🥐", duration: 800 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < steps.length - 1) {
        setStep(step + 1);
      } else {
        setIsComplete(true);
        setTimeout(onComplete, 800);
      }
    }, steps[step].duration);

    return () => clearTimeout(timer);
  }, [step, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-br from-levain-cream to-levain-flour flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Flour particles background */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  opacity: [0.1, 0.6, 0.1]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          <div className="text-center relative z-10">
            {/* Main icon */}
            <motion.div
              key={step}
              className="text-8xl mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15 
              }}
            >
              {steps[step].icon}
            </motion.div>

            {/* Text */}
            <motion.h2
              key={`text-${step}`}
              className="font-display text-3xl md:text-4xl font-bold text-levain-charcoal mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {step === 4 ? (
                <span className="text-gradient-botanical">
                  {steps[step].text}
                </span>
              ) : (
                steps[step].text
              )}
            </motion.h2>

            {/* Progress bar */}
            <div className="w-64 h-1 bg-levain-cream rounded-full mx-auto overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-levain-botanical to-levain-clay rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Progress dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {steps.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index <= step ? 'bg-levain-botanical' : 'bg-levain-cream'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
