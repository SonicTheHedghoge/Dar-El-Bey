import React from 'react';
import { motion } from 'framer-motion';

const StorySection: React.FC = () => {
  return (
    <section id="story" className="relative py-32 bg-paper-cream overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-40 bg-paper-texture"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 border-b border-royal-green/10 pb-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                   <span className="text-royal-green/60 font-sans text-sm tracking-[0.3em] uppercase block mb-4">The Philosophy</span>
                   <h2 className="font-display text-5xl md:text-7xl text-royal-green uppercase leading-[0.9]">
                       Liquid <br/> <span className="text-antique-gold font-serif italic lowercase">Gold</span>
                   </h2>
                </motion.div>
                <motion.div
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.4, duration: 0.8 }}
                   className="md:w-1/3 mt-8 md:mt-0"
                >
                   <p className="font-serif text-xl text-royal-green/80 italic leading-relaxed">
                       "At Dar el Bey, every dish tells a story of the land. We cook exclusively with virgin olive oil—no shortcuts, just pure heritage."
                   </p>
                </motion.div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                
                {/* Image 1 - Large */}
                <div className="md:col-span-7 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative overflow-hidden aspect-[4/5] clip-image-slant"
                    >
                        <img 
                           src="https://images.unsplash.com/photo-1474979266404-7eaacbcd3925?q=80&w=2070&auto=format&fit=crop" 
                           alt="Olive Oil Pouring" 
                           className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
                        />
                        <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-royal-green/90 to-transparent w-full">
                           <p className="text-paper-cream font-display text-3xl">Purity.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Text & Detail */}
                <div className="md:col-span-5 flex flex-col gap-12">
                   <div className="space-y-6">
                      <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="p-8 border border-royal-green/10 bg-white/50 backdrop-blur-sm"
                      >
                         <h3 className="font-sans font-bold text-royal-green uppercase tracking-widest text-sm mb-4">Taste & Health</h3>
                         <p className="font-serif text-lg text-gray-600 leading-loose">
                           "Taste, health, and cleanliness!! At Dar el Bey, everything is well balanced." We believe that true luxury is nourishment. Our kitchen honors the ancient ways, rejecting processed fats for the liquid gold of our ancestors.
                         </p>
                      </motion.div>

                      <div className="grid grid-cols-2 gap-4">
                         <div className="aspect-square bg-royal-green p-6 flex flex-col justify-between text-paper-cream">
                             <span className="font-display text-4xl">100%</span>
                             <span className="font-sans text-xs tracking-widest uppercase opacity-70">Virgin Olive Oil</span>
                         </div>
                         <div className="aspect-square bg-antique-gold p-6 flex flex-col justify-between text-royal-green">
                             <span className="font-display text-4xl">Est.</span>
                             <span className="font-sans text-xs tracking-widest uppercase opacity-70">Tradition</span>
                         </div>
                      </div>
                   </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default StorySection;