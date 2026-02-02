import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Heritage', href: '#story' },
    { name: 'Cuisine', href: '#menu' },
    { name: 'El Bey AI', href: '#ai-chef' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ${
          scrolled ? 'py-4' : 'py-8'
        }`}
      >
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`
            backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-6 py-3 flex items-center justify-between gap-8
            ${scrolled ? 'bg-royal-green/80 w-[90%] md:w-auto' : 'bg-transparent border-transparent md:bg-black/20 w-[95%] md:w-auto'}
          `}
        >
          {/* Mobile Menu Trigger (Left) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="text-shimmer-gold">
              <Menu size={24} />
            </button>
          </div>

          {/* Links (Left Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-white/80 hover:text-antique-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Logo (Center) */}
          <a href="#" className="flex items-center gap-3 group">
             <div className="relative">
                <div className="absolute inset-0 bg-antique-gold/50 blur-lg rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img 
                  src={RESTAURANT_INFO.logoUrl} 
                  alt="Dar el Bey" 
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-antique-gold/50 object-cover relative z-10"
                />
             </div>
             <span className="font-display font-bold text-xl md:text-2xl text-shimmer-gold tracking-widest hidden sm:block">
               DAR EL BEY
             </span>
          </a>

          {/* CTA (Right Desktop) */}
          <div className="hidden md:flex items-center gap-6">
             <div className="h-4 w-[1px] bg-white/20"></div>
             <a href="#contact" className="flex items-center gap-2 text-antique-gold hover:text-white transition-colors duration-300 font-sans text-xs font-bold tracking-widest uppercase">
                <Phone size={14} />
                <span>Reserve</span>
             </a>
          </div>
          
           {/* Mobile Placeholder (Right) */}
           <div className="md:hidden w-6"></div>
        </motion.div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-royal-green flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-antique-gold p-2 border border-antique-gold/20 rounded-full hover:bg-antique-gold hover:text-royal-green transition-all"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col gap-8 text-center">
               {navLinks.map((link, i) => (
                 <motion.a
                   initial={{ y: 40, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: i * 0.1 }}
                   key={link.name}
                   href={link.href}
                   onClick={() => setIsOpen(false)}
                   className="font-display text-4xl sm:text-5xl text-paper-cream hover:text-antique-gold transition-colors duration-300"
                 >
                   {link.name}
                 </motion.a>
               ))}
               <motion.div 
                 initial={{ y: 40, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.4 }}
                 className="mt-8 flex flex-col gap-4 items-center"
               >
                 <div className="w-12 h-[1px] bg-antique-gold/30"></div>
                 <p className="font-sans text-antique-gold tracking-widest text-sm">RESERVATIONS</p>
                 <a href={`tel:${RESTAURANT_INFO.phone}`} className="font-serif text-3xl text-white">{RESTAURANT_INFO.phone}</a>
               </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;