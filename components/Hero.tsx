import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RESTAURANT_INFO } from '../constants';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="hero" className="relative h-[120vh] w-full overflow-hidden flex items-center justify-center bg-royal-green">
      
      {/* Dynamic Background */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-royal-green via-transparent to-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2069&auto=format&fit=crop" 
          alt="Tunisian Architecture Detail" 
          className="w-full h-full object-cover scale-110 opacity-60"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-screen flex flex-col justify-center items-center text-center">
        
        {/* Floating Logo Badge */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
           animate={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="mb-12 relative"
        >
           <div className="absolute -inset-10 bg-antique-gold/20 blur-3xl rounded-full animate-pulse"></div>
           <div className="relative p-2 border border-antique-gold/30 rounded-full">
             <img 
                src={RESTAURANT_INFO.logoUrl} 
                alt="Royal Seal" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-antique-gold shadow-[0_0_40px_rgba(198,168,104,0.3)]"
             />
           </div>
        </motion.div>

        {/* Main Typography */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="font-display text-5xl md:text-8xl lg:text-9xl text-paper-cream tracking-wider leading-[0.9] mb-6 uppercase"
          >
            Dar El <span className="text-antique-gold italic font-serif lowercase">Bey</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4">
             <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-antique-gold"></div>
             <p className="font-sans text-xs md:text-sm tracking-[0.4em] text-antique-gold uppercase">
               Royal Tunisian Cuisine
             </p>
             <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-antique-gold"></div>
          </div>
          
          <p className="font-serif text-xl md:text-3xl text-white/80 italic max-w-2xl leading-relaxed">
            "Where heritage meets pure olive oil mastery."
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.8, duration: 0.8 }}
           className="mt-16 flex flex-col md:flex-row gap-6 w-full md:w-auto"
        >
            <a href="#menu" className="group relative px-10 py-4 overflow-hidden border border-antique-gold/50 bg-royal-green/30 backdrop-blur-sm">
                <span className="relative z-10 font-sans text-xs font-bold tracking-[0.2em] text-antique-gold group-hover:text-royal-green transition-colors duration-500 uppercase">
                  Explore Menu
                </span>
                <div className="absolute inset-0 bg-antique-gold transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></div>
            </a>
            <a href="#ai-chef" className="group relative px-10 py-4 overflow-hidden bg-antique-gold">
                <span className="relative z-10 font-sans text-xs font-bold tracking-[0.2em] text-royal-green group-hover:text-antique-gold transition-colors duration-500 uppercase">
                  Consult The Chef
                </span>
                <div className="absolute inset-0 bg-royal-green transform scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></div>
            </a>
        </motion.div>

      </div>

      {/* Decorative Elements */}
      <motion.div style={{ opacity }} className="absolute bottom-10 left-10 hidden md:block z-20">
         <p className="font-display text-white/20 text-9xl leading-none select-none">1920</p>
      </motion.div>
      <motion.div style={{ opacity }} className="absolute bottom-10 right-10 hidden md:block z-20 text-right">
         <p className="font-sans text-antique-gold/60 text-xs tracking-widest mb-1">SCROLL TO DISCOVER</p>
         <div className="h-24 w-[1px] bg-antique-gold/30 ml-auto animate-pulse"></div>
      </motion.div>

    </section>
  );
};

export default Hero;