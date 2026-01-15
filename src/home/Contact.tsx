import { motion, useInView } from 'framer-motion';
import { useRef, useState, type FormEvent } from 'react';
import { MessageCircle, Instagram, Facebook, Send, Loader2, CheckCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState('idle'); // idle, loading, success

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      href: 'https://wa.me/526143342823',
      label: 'Escríbenos'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://instagram.com/comunidadcapital',
      label: '@comunidadcapital'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://facebook.com/ComunidadCapital',
      label: 'Comunidad Capital'
    },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormState('success');
    setTimeout(() => setFormState('idle'), 3000);
  };

  return (
    <section id="contact" className="py-32 md:py-40 bg-black text-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-neutral-500 text-xs tracking-[0.3em] uppercase mb-6">
            Conecta
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-wide mb-6">
            Contáctanos
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Nos encantaría saber de ti. Escríbenos y te responderemos pronto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-lg font-light mb-8 tracking-wide">Síguenos</h3>
            
            <div className="space-y-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 border border-white/10 
                             hover:border-white/30 hover:bg-white/5 transition-all duration-500"
                >
                  <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                  <div>
                    <p className="text-white font-light">{social.name}</p>
                    <p className="text-neutral-500 text-sm">{social.label}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-12 p-6 border-l border-[#C9A962]/30"
            >
              <p className="text-[#C9A962]/60 text-sm italic">
                "Donde dos o tres se reúnen en mi nombre, allí estoy yo en medio de ellos."
              </p>
              <p className="text-neutral-600 text-xs mt-2">— Mateo 18:20</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-lg font-light mb-8 tracking-wide">Envíanos un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  required
                  className="bg-transparent border-white/10 text-white placeholder:text-neutral-600 
                             focus:border-white/30 rounded-none h-12"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  required
                  className="bg-transparent border-white/10 text-white placeholder:text-neutral-600 
                             focus:border-white/30 rounded-none h-12"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tu mensaje..."
                  rows={4}
                  required
                  className="bg-transparent border-white/10 text-white placeholder:text-neutral-600 
                             focus:border-white/30 rounded-none resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={formState !== 'idle'}
                className="w-full bg-white text-black hover:bg-neutral-200 rounded-none h-12 
                           font-light tracking-[0.15em] uppercase transition-all duration-500"
              >
                {formState === 'loading' && (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                )}
                {formState === 'success' && (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    ¡Mensaje enviado!
                  </>
                )}
                {formState === 'idle' && (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
