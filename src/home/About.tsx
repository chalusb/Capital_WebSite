import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 md:py-40 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-neutral-500 text-xs tracking-[0.3em] uppercase mb-6">
              Quiénes Somos
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight mb-8">
              Somos una comunidad de fe{' '}
              <span className="text-neutral-400">Real, Relevante y Radical</span>
            </h2>
            <div className="w-12 h-[1px] bg-white/20 mb-8" />
            <p className="text-neutral-400 font-light leading-relaxed mb-6">
              En Comunidad Capital creemos en construir relaciones auténticas 
              fundamentadas en la fe. Somos más que una iglesia, somos una familia 
              comprometida con transformar vidas a través del amor de Cristo.
            </p>
            <p className="text-neutral-500 font-light leading-relaxed">
              Te invitamos a ser parte de algo más grande. Un lugar donde puedes 
              crecer, conectar y descubrir tu propósito.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="border-l border-white/10 pl-8">
              <h3 className="text-lg font-light mb-3 tracking-wide">Nuestra Visión</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Ser una comunidad que impacta positivamente a Chihuahua y al mundo, 
                formando discípulos comprometidos con vivir los valores del Reino.
              </p>
            </div>
            
            <div className="border-l border-white/10 pl-8">
              <h3 className="text-lg font-light mb-3 tracking-wide">Nuestra Misión</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Conectar personas con Dios, con otros y con su propósito, creando 
                espacios de encuentro genuino y crecimiento espiritual.
              </p>
            </div>

            <div className="border-l border-[#C9A962]/30 pl-8">
              <h3 className="text-lg font-light mb-3 tracking-wide text-[#C9A962]/80">
                Nuestros Valores
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Fe', 'Familia', 'Comunidad', 'Servicio', 'Excelencia'].map((value) => (
                  <span 
                    key={value}
                    className="text-xs tracking-[0.2em] uppercase text-neutral-400 
                               border border-white/10 px-4 py-2"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}