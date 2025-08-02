import React from 'react';
import { Chrome, Globe, Smartphone, Monitor, Download } from 'lucide-react';

const BrowserCompatibility = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(4, 120, 87, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(4, 120, 87, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: '400px 400px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Works with Any
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text">
              Browser
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DeenTab is designed to work seamlessly across all modern browsers and devices. 
            Choose your preferred way to access your digital sanctuary.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          {/* Browser Extension */}
          <div className="feature-blur p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Chrome className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Browser Extension</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Replace your new tab page with DeenTab. Automatically opens every time you create a new tab, 
              keeping your productivity tools and spiritual reminders always at hand.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Automatic new tab replacement</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Works offline</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Syncs across devices</span>
              </div>
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center space-x-2 mx-auto">
              <Download className="w-4 h-4" />
              <span>Add to Chrome</span>
            </button>
          </div>

          {/* Web Application */}
          <div className="feature-blur p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Application</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Access DeenTab directly from any browser without installation. Perfect for shared computers, 
              work environments, or when you want quick access from anywhere.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>No installation required</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Works on any device</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Always up to date</span>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center space-x-2 mx-auto">
              <Globe className="w-4 h-4" />
              <span>Open Web App</span>
            </button>
          </div>
        </div>

        {/* Device Compatibility */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Compatible with All Your Devices</h3>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="flex flex-col items-center space-y-2">
              <Monitor className="w-12 h-12 text-gray-600" />
              <span className="text-sm text-gray-600">Desktop</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Smartphone className="w-12 h-12 text-gray-600" />
              <span className="text-sm text-gray-600">Mobile</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Monitor className="w-12 h-12 text-gray-600" />
              <span className="text-sm text-gray-600">Tablet</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowserCompatibility;