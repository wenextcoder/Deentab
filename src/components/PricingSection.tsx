import React from 'react';
import { Check } from 'lucide-react';
import DraggableButton from './DraggableButton';

const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and upgrade when you're ready. All plans include our core features 
            to help you stay productive and connected to your faith.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <div className="feature-blur p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly</h3>
              <p className="text-gray-600">Per Month</p>
            </div>
            
            <div className="mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $2 <span className="text-lg text-gray-600">/ 240 BDT</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">All Premium Features</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Unlimited 4K/8K backgrounds</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Complete nasheed library</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">All widget types</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Early access to new features</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Custom widget themes</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Calendar sync</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Advanced time tracking</span>
              </div>
            </div>

            <DraggableButton className="w-full px-6 py-3 font-semibold text-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              Choose Plan
            </DraggableButton>
          </div>

          {/* Lifetime Plan */}
          <div className="feature-blur p-8 text-center hover:scale-105 transition-transform duration-300 relative">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="glass-button px-4 py-2 text-sm font-medium bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                Most Popular
              </div>
            </div>

            <div className="mb-6 mt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Lifetime</h3>
              <p className="text-gray-600">One-time Payment</p>
            </div>
            
            <div className="mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $9 <span className="text-lg text-gray-600">/ 1080 BDT</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">All Premium Features</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Unlimited 4K/8K backgrounds</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Complete nasheed library</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">All widget types</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Early access to new features</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Custom widget themes</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Calendar sync</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Advanced time tracking</span>
              </div>
            </div>

            <DraggableButton className="w-full px-6 py-3 font-semibold text-lg bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
              Choose Plan
            </DraggableButton>
          </div>
        </div>

        {/* Donation Message */}
        <div className="text-center mt-12">
          <div className="feature-blur p-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 font-medium">
              ❤️ 20% of profits are donated to Gaza
            </p>
            <p className="text-gray-600 mt-2">
              Your subscription helps support those in need while building amazing productivity tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;