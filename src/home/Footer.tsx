import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-extralight tracking-[0.3em] uppercase text-black mb-2">
              Capital
            </h3>
            <p className="text-neutral-400 text-xs tracking-[0.2em] uppercase">
              Comunidad de Fe
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-neutral-400 text-sm">
              Real • Relevante • Radical
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <p className="text-neutral-400 text-xs">
              © {currentYear} Comunidad Capital
            </p>
            <p className="text-neutral-300 text-xs mt-1">
              Chihuahua, México
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-full h-[1px] bg-neutral-100 mt-12 origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center text-neutral-300 text-xs mt-8 tracking-widest uppercase"
        >
          #miFamilia
        </motion.p>
      </div>
    </footer>
  );
}