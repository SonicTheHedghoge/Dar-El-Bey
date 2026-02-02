import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { getChefRecommendation } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const AIRecommender: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(LoadingState.LOADING);

    const response = await getChefRecommendation(userMessage);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(LoadingState.SUCCESS);
  };

  return (
    <section id="ai-chef" className="relative py-32 bg-black overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      
      {/* Mystical Background */}
      <div className="absolute inset-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-antique-gold/10 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="max-w-4xl w-full px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4 p-4 border border-antique-gold/30 rounded-full bg-black/50 backdrop-blur-md"
          >
             <Sparkles className="text-antique-gold w-8 h-8" />
          </motion.div>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-4 tracking-wide">
             The Culinary <span className="text-transparent bg-clip-text bg-gradient-to-r from-antique-gold to-shimmer-gold">Oracle</span>
          </h2>
          <p className="font-serif text-white/50 text-lg max-w-lg mx-auto italic">
            "Tell me your desires, your mood, your cravings... and I shall reveal the dish destined for you."
          </p>
        </div>

        {/* Chat Experience */}
        <div className="min-h-[400px] flex flex-col justify-end">
           <div className="space-y-8 mb-12 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
              <AnimatePresence>
                 {messages.length === 0 && (
                    <motion.div 
                       initial={{ opacity: 0 }} 
                       animate={{ opacity: 1 }}
                       className="text-center text-white/30 font-sans text-sm tracking-[0.2em] uppercase py-20"
                    >
                       El Bey AI is listening...
                    </motion.div>
                 )}
                 {messages.map((msg, idx) => (
                    <motion.div
                       key={idx}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                       <div className={`max-w-lg p-6 md:p-8 backdrop-blur-xl border ${
                          msg.role === 'user' 
                          ? 'bg-antique-gold/10 border-antique-gold/30 text-shimmer-gold rounded-t-3xl rounded-bl-3xl' 
                          : 'bg-white/5 border-white/10 text-white/90 rounded-t-3xl rounded-br-3xl shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                       }`}>
                          <p className={`font-serif text-lg leading-relaxed ${msg.role === 'model' ? 'italic' : ''}`}>
                             {msg.text}
                          </p>
                       </div>
                    </motion.div>
                 ))}
                 {loading === LoadingState.LOADING && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                       <div className="bg-white/5 p-6 rounded-t-3xl rounded-br-3xl flex gap-2">
                          <div className="w-2 h-2 bg-antique-gold rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-antique-gold rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-antique-gold rounded-full animate-bounce delay-200"></div>
                       </div>
                    </motion.div>
                 )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
           </div>

           {/* Input Field */}
           <form onSubmit={handleSubmit} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-antique-gold to-shimmer-gold opacity-20 blur-lg group-hover:opacity-40 transition-opacity rounded-full"></div>
              <input 
                 type="text" 
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 placeholder="I desire something spicy and rich..."
                 className="w-full bg-black/80 border border-antique-gold/30 text-white placeholder-white/30 px-8 py-6 rounded-full focus:outline-none focus:border-antique-gold transition-all font-serif text-xl relative z-10"
              />
              <button 
                 type="submit"
                 disabled={loading === LoadingState.LOADING}
                 className="absolute right-3 top-3 bottom-3 aspect-square bg-antique-gold rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform z-20 disabled:opacity-50"
              >
                 <Send size={20} />
              </button>
           </form>
        </div>

      </div>
    </section>
  );
};

export default AIRecommender;