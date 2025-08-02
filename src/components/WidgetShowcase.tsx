import React, { useEffect, useState } from 'react';
import DraggableButton from './DraggableButton';

const widgets = [
  { name: 'Todo List', icon: '📝' },
  { name: 'Digital Clock', icon: '🕐' },
  { name: 'Prayer Times', icon: '🕌' },
  { name: 'Greeting', icon: '👋' },
  { name: 'Task Box', icon: '📋' },
  { name: 'Time Tracker', icon: '⏱️' },
  { name: 'Quick Notes', icon: '📄' },
  { name: 'Calendar', icon: '📅' },
  { name: 'Pomodoro', icon: '🍅' },
  { name: 'Quote', icon: '💭' },
  { name: 'User Preferences', icon: '⚙️' },
  { name: 'Reset Canvas', icon: '🔄' },
  { name: 'Request Features', icon: '💡' }
];

const WidgetShowcase = () => {
  const [visibleWidgets, setVisibleWidgets] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      widgets.forEach((_, index) => {
        setTimeout(() => {
          setVisibleWidgets(prev => [...prev, index]);
        }, index * 100);
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
            <DraggableButton
              key={widget.name}
              className={`widget-button feature-blur p-4 text-center transition-all duration-300 ${
                visibleWidgets.includes(index) 
                  ? index % 2 === 0 
                    ? 'animate-slideLeftToRight' 
                    : 'animate-slideRightToLeft'
                  : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-2">
                {widget.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-xs leading-tight">
                {widget.name}
              </h3>
            </DraggableButton>
          ))}
        </div>

        <div className="text-center mt-12">
          <DraggableButton className="px-8 py-4 font-semibold text-lg shadow-lg">
            Explore All Widgets
          </DraggableButton>
        </div>
      </div>
    </section>
  );
};

export default WidgetShowcase;