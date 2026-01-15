import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      title: 'Reunión Dominical',
      description: 'Únete cada domingo a las 11:00 AM para adorar juntos.',
      date: 'Cada Domingo',
      highlight: true
    },
    {
      title: 'Noche de Jóvenes',
      description: 'Espacio para conectar, crecer y divertirse en comunidad.',
      date: 'Viernes'
    },
    {
      title: 'Grupos de Vida',
      description: 'Pequeños grupos donde construimos relaciones profundas.',
      date: 'Entre semana'
    }
  ];

  return (
    <section id="events" className="py-32 md:py-40 bg-neutral-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-6">
            Participa
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-black tracking-wide">
            Eventos & Actividades
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className={`group bg-white p-8 hover:shadow-lg transition-all duration-500 ${
                event.highlight ? 'ring-1 ring-black' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-4 h-4 text-neutral-400" />
                <span className="text-xs tracking-[0.2em] uppercase text-neutral-400">
                  {event.date}
                </span>
              </div>
              
              <h3 className="text-xl font-light mb-4 text-black group-hover:text-neutral-600 transition-colors duration-300">
                {event.title}
              </h3>
              
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                {event.description}
              </p>

              <motion.div 
                className="flex items-center gap-2 text-black text-sm"
                whileHover={{ x: 5 }}
              >
                <span className="tracking-wider">Más info</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-400 text-sm">
            ¿Tienes preguntas? Contáctanos y te ayudaremos con gusto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}