import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-paper-cream pt-24 pb-12 border-t border-royal-green/10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
           
           {/* Brand Block */}
           <div className="max-w-sm">
              <h2 className="font-display text-4xl text-royal-green mb-6">Dar el Bey</h2>
              <p className="font-serif text-xl text-royal-green/70 italic mb-8">
                 "A sanctuary of taste in the heart of Sousse."
              </p>
              <div className="flex gap-4">
                 <a href="#" className="w-12 h-12 border border-royal-green/20 rounded-full flex items-center justify-center text-royal-green hover:bg-royal-green hover:text-paper-cream transition-all duration-300">
                    <Facebook size={20} />
                 </a>
                 <a href="#" className="w-12 h-12 border border-royal-green/20 rounded-full flex items-center justify-center text-royal-green hover:bg-royal-green hover:text-paper-cream transition-all duration-300">
                    <Instagram size={20} />
                 </a>
              </div>
           </div>

           {/* Info Columns */}
           <div className="flex flex-col md:flex-row gap-16 md:gap-24">
              
              <div>
                 <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-antique-gold uppercase mb-6">Visit Us</h4>
                 <div className="space-y-4 text-royal-green">
                    <div className="flex gap-4 items-start">
                       <MapPin size={20} className="mt-1 opacity-50" />
                       <p className="font-serif text-lg leading-relaxed max-w-[200px]">{RESTAURANT_INFO.location}</p>
                    </div>
                 </div>
              </div>

              <div>
                 <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-antique-gold uppercase mb-6">Contact</h4>
                 <div className="space-y-4 text-royal-green">
                    <div className="flex gap-4 items-center">
                       <Phone size={20} className="opacity-50" />
                       <p className="font-serif text-lg">{RESTAURANT_INFO.phone}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                       <Mail size={20} className="opacity-50" />
                       <p className="font-serif text-lg">{RESTAURANT_INFO.email}</p>
                    </div>
                 </div>
              </div>

           </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-royal-green/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="font-sans text-xs text-royal-green/40 tracking-widest uppercase">
              © {new Date().getFullYear()} Dar el Bey. All Rights Reserved.
           </p>
           <p className="font-serif text-royal-green/40 italic">
              Crafted with olive oil & code.
           </p>
        </div>

      </div>
    </footer>
  );
};

export default ContactFooter;