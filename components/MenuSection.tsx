import React, { useRef } from 'react';
import { MENU_ITEMS } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const MenuSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} id="menu" className="bg-deep-green h-[300vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        
        {/* Background Elements */}
        <div className="absolute top-10 left-10 z-20 mix-blend-difference text-white">
           <h2 className="font-display text-6xl md:text-9xl opacity-20 uppercase">The Menu</h2>
        </div>
        
        <div className="absolute inset-0 bg-luxury-pattern opacity-5 pointer-events-none"></div>

        <motion.div 
           style={{ x }} 
           className="flex items-center gap-12 pl-[10vw] pr-[10vw]"
        >
          {/* Intro Card */}
          <div className="flex-shrink-0 w-[80vw] md:w-[30vw] h-[60vh] flex flex-col justify-center text-shimmer-gold">
             <span className="font-sans tracking-[0.5em] text-sm uppercase mb-6">Culinary Masterpieces</span>
             <h3 className="font-serif text-5xl md:text-7xl leading-none mb-8">
               A Symphony <br/> of <span className="italic text-white">Flavors</span>
             </h3>
             <p className="font-light text-white/60 max-w-sm leading-relaxed mb-8">
               Swipe to explore our curated selection of Tunisian delicacies, each prepared with patience and passion.
             </p>
             <div className="flex gap-2 items-center text-sm font-bold uppercase tracking-widest">
                <span>Scroll Down</span>
                <div className="w-12 h-[1px] bg-shimmer-gold"></div>
             </div>
          </div>

          {/* Menu Items */}
          {MENU_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative flex-shrink-0 w-[85vw] md:w-[28vw] h-[65vh] bg-royal-green/50 border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-royal-green/80"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-green via-deep-green/50 to-transparent"></div>
              </div>

              <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-end">
                <span className="font-sans text-antique-gold text-xs tracking-[0.3em] uppercase mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {item.category}
                </span>
                
                <h3 className="font-display text-3xl md:text-4xl text-paper-cream mb-4 border-b border-white/10 pb-4">
                  {item.name}
                </h3>
                
                <p className="font-serif text-lg text-white/70 mb-8 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  {item.description}
                </p>

                <div className="flex justify-between items-center">
                   <span className="font-display text-3xl text-antique-gold">{item.price}</span>
                   <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-antique-gold hover:text-deep-green hover:border-antique-gold transition-all duration-300">
                     +
                   </button>
                </div>
              </div>
            </div>
          ))}

          {/* Spacer */}
          <div className="flex-shrink-0 w-[10vw]"></div>

        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;