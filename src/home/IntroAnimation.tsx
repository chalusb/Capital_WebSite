import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type IntroAnimationProps = {
  onComplete?: () => void;
};

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      if (onComplete) onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <div className="w-16 h-16 mx-auto border border-white/20 flex items-center justify-center">
                <span className="text-white text-2xl font-light">C</span>
              </div>
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-white text-4xl md:text-6xl font-extralight tracking-[0.4em] uppercase"
              >
                Capital
              </motion.h1>
            </div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
              className="h-[1px] bg-white/30 mt-6 mx-auto max-w-[200px]"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-white/50 text-xs tracking-[0.3em] uppercase mt-4"
            >
              Comunidad de Fe
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
