import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import MenuSection from './components/MenuSection';
import AIRecommender from './components/AIRecommender';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-antique-gold selection:text-royal-green relative">
      <Navbar />
      <Hero />
      <StorySection />
      <MenuSection />
      <AIRecommender />
      <ContactFooter />
    </div>
  );
};

export default App;