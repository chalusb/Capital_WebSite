import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

export default function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scheduleItems = [
    { day: 'Domingo', time: '11:00 AM', event: 'Reunión Principal' },
    { day: 'Miércoles', time: '7:00 PM', event: 'Alabanzas' },
  ];

  return (
    <section id="schedule" className="py-32 md:py-40 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">
            Encuéntranos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-black tracking-wide">
            Horarios & Ubicación
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-5 h-5 text-neutral-400" />
              <h3 className="text-lg font-light tracking-wide">Reuniones</h3>
            </div>
            
            <div className="space-y-6">
              {scheduleItems.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="group border-b border-neutral-100 pb-6 hover:border-black/20 transition-colors duration-500"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-black font-light text-xl mb-1">{item.day}</p>
                      <p className="text-neutral-400 text-sm">{item.event}</p>
                    </div>
                    <p className="text-black text-lg font-light tracking-wider">{item.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-neutral-400 text-sm mt-8 leading-relaxed"
            >
              ¡Trae un amigo, familiar o vecino! Todos son bienvenidos.
            </motion.p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-5 h-5 text-neutral-400" />
              <h3 className="text-lg font-light tracking-wide">Ubicación</h3>
            </div>

            <div className="bg-neutral-50 p-8 mb-6">
              <p className="text-black font-light text-lg mb-2">
                Comunidad Capital
              </p>
              <p className="text-neutral-500 leading-relaxed mb-4">
                Avenida Prolongación Teófilo Borunda #2108
                <br />
                Col. Centro, Chihuahua, México
              </p>
              
              <div className="flex items-center gap-2 text-neutral-400">
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:+526143342823" 
                  className="text-sm hover:text-black transition-colors duration-300"
                >
                  614 334 2823
                </a>
              </div>
            </div>

            <motion.a
              href="https://maps.google.com/?q=Avenida+Prolongación+Teófilo+Borunda+2108+Chihuahua+Mexico"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black text-sm tracking-[0.15em] uppercase 
                         border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 
                         transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              Ver en Google Maps
              <span className="text-lg">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}