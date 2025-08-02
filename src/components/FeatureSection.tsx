import React, { useEffect, useRef, useState } from 'react';

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  gradient?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  description,
  features,
  imageSrc,
  imageAlt,
  reverse = false,
  gradient = "from-gray-50 to-white"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`min-h-screen flex items-center bg-gradient-to-br ${gradient} relative overflow-hidden`}
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at ${reverse ? '75%' : '25%'} 50%, rgba(4, 120, 87, 0.1) 0%, transparent 70%),
            linear-gradient(rgba(4, 120, 87, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(4, 120, 87, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '600px 600px, 40px 40px, 40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Content Column */}
          <div className={`${reverse ? 'lg:col-start-2' : ''} space-y-6 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          } transition-all duration-700`}>
            <div className="feature-blur p-8 space-y-4">
              <div className="inline-block bg-emerald-100/80 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                {subtitle}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {description}
              </p>
            
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100/80 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            
              <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
                <span>Explore This Feature</span>
                <div className="w-5 h-5 group-hover:translate-x-1 transition-transform">→</div>
              </button>
            </div>
          </div>
          
          {/* Image Column */}
          <div className={`${reverse ? 'lg:col-start-1' : ''} ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'
          } transition-all duration-700 delay-200`}>
            <div className="relative">
              <div className="feature-blur rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-video flex items-center justify-center overflow-hidden">
                  <img 
                    src={imageSrc} 
                    alt={imageAlt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              
              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full opacity-20 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;