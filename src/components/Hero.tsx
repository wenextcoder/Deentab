import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import DraggableButton from './DraggableButton';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-emerald-50/30 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 animate-gridPulse"
            style={{
              backgroundImage: `
                linear-gradient(rgba(4, 120, 87, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(4, 120, 87, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          ></div>
          
          {/* Floating Circles */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-200/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-emerald-300/15 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 bg-emerald-100/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-emerald-200/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Animated Border Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 liquid-blur border border-emerald-200/50 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-700 text-sm font-medium">Now Available - Browser Extension & Web App</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your Digital
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text">
              Sanctuary
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your browser into a personalized productivity and mindfulness companion. 
            Stay focused, organized, and connected to your faith throughout your day.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <DraggableButton className="group text-white px-8 py-4 font-semibold text-lg flex items-center space-x-2">
              <span>Experience DeenTab Now</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </DraggableButton>
            
            <DraggableButton className="group flex items-center space-x-2 text-gray-700 hover:text-emerald-600 font-semibold text-lg">
              <div className="w-12 h-12 glass-button shadow-lg rounded-full flex items-center justify-center group-hover:shadow-xl transition-shadow">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span>Watch Demo</span>
            </DraggableButton>
          </div>
          
          {/* App Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="liquid-blur rounded-2xl shadow-2xl p-4 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gray-100 rounded-xl p-8 aspect-video flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop" 
                  alt="DeenTab App Interface" 
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 glass-button text-emerald-700 px-4 py-2 text-sm font-medium animate-bounce">
              ✨ Customizable
            </div>
            <div className="absolute -bottom-4 -right-4 glass-button text-blue-700 px-4 py-2 text-sm font-medium animate-bounce delay-300">
              🎵 Peaceful Audio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;