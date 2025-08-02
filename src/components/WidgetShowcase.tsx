import React, { useEffect, useState } from 'react';
import DraggableButton from './DraggableButton';

const widgets = [
  'Todo List', 'Digital Clock', 'Prayer Times', 'Greeting',
  'Task Box', 'Time Tracker', 'Quick Notes', 'Calendar',
  'Pomodoro', 'Quote', 'User Preferences', 'Reset Canvas', 'Request Features'
];

const WidgetShowcase = () => {
  const [visibleWidgets, setVisibleWidgets] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      widgets.forEach((_, index) => {
        setTimeout(() => {
          setVisibleWidgets(prev => [...prev, index]);
        }, index * 150);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.1;
    const deltaY = (e.clientY - centerY) * 0.1;
    
    e.currentTarget.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${deltaX * 0.1}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    e.currentTarget.style.transform = 'translate(0px, 0px) rotate(0deg)';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(4, 120, 87, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(4, 120, 87, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Widgets at Your
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text">
              Fingertips
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover all the amazing widgets that make DeenTab your ultimate productivity companion. 
            Each one designed to enhance your daily workflow and spiritual connection.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {widgets.map((widget, index) => (
            <div
              key={widget}
              className={`widget-button feature-blur p-4 rounded-2xl text-center transition-all duration-300 ${
                visibleWidgets.includes(index) ? 'animate-dropIn' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                {widget.charAt(0)}
              </div>
              <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                {widget}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <DraggableButton className="text-white px-8 py-4 font-semibold text-lg shadow-lg">
            Explore All Widgets
          </DraggableButton>
        </div>
      </div>
    </section>
  );
};

export default WidgetShowcase;