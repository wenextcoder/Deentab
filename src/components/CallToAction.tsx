import React from 'react';
import { Download, Chrome, Globe } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, white 0%, transparent 50%)`,
          backgroundSize: '400px 400px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block">Digital Experience?</span>
          </h2>
          
          <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
            Join thousands of users who have already created their ideal digital sanctuary. 
            Start your journey to focused productivity and peaceful mindfulness today.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <Chrome className="w-12 h-12 text-emerald-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Browser Extension</h3>
              <p className="text-emerald-100 mb-4">Replace your new tab with DeenTab</p>
              <button className="bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors flex items-center space-x-2 mx-auto">
                <Download className="w-4 h-4" />
                <span>Add to Chrome</span>
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <Globe className="w-12 h-12 text-emerald-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Web Application</h3>
              <p className="text-emerald-100 mb-4">Access DeenTab from any browser</p>
              <button className="bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors flex items-center space-x-2 mx-auto">
                <Globe className="w-4 h-4" />
                <span>Open Web App</span>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg">
              Start Free Trial
            </button>
            
            <button className="text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-emerald-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Free Forever Plan</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Premium from $4.99/month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;