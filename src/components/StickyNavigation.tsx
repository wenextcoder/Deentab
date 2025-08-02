import React, { useEffect, useState } from 'react';
import DraggableButton from './DraggableButton';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'canvas', label: 'Dynamic Canvas' },
  { id: 'productivity', label: 'Productivity' },
  { id: 'mindful', label: 'Mindful Audio' },
  { id: 'prayer', label: 'Prayer Times' },
  { id: 'cta', label: 'Get Started' }
];

const StickyNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers = sections.map(section => {
      const element = document.getElementById(section.id);
      if (!element) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="glass-button p-4">
        <div className="space-y-3">
          {sections.map((section) => (
            <DraggableButton
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block w-3 h-3 rounded-full ${
                activeSection === section.id
                  ? 'bg-emerald-600 scale-125'
                  : 'bg-gray-300 hover:bg-emerald-400'
              }`}
              title={section.label}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default StickyNavigation;