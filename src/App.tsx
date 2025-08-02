import React from 'react';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import StickyNavigation from './components/StickyNavigation';
import CallToAction from './components/CallToAction';
import WidgetShowcase from './components/WidgetShowcase';
import BrowserCompatibility from './components/BrowserCompatibility';

function App() {
  const features = [
    {
      id: 'canvas',
      title: 'Dynamic Canvas',
      subtitle: 'Personalization',
      description: 'Transform your digital workspace into a personalized sanctuary. Arrange, resize, and customize widgets to create your perfect productivity environment.',
      features: [
        'Drag-and-drop widget arrangement for ultimate customization',
        'Resize and position elements exactly where you need them',
        'Save multiple layouts for different moods and tasks',
        'Seamless synchronization across all your devices'
      ],
      imageSrc: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      imageAlt: 'DeenTab Customizable Canvas Interface',
      reverse: false,
      gradient: 'from-blue-50 to-indigo-50'
    },
    {
      id: 'productivity',
      title: 'Productivity Widgets',
      subtitle: 'Stay Organized',
      description: 'Everything you need to stay productive and organized, beautifully integrated into your daily workflow.',
      features: [
        'Smart Todo Lists with priority management and due dates',
        'Digital sticky notes with AI-powered voice-to-text conversion',
        'Advanced time tracking to monitor your productivity patterns',
        'Pomodoro timer with customizable work and break intervals'
      ],
      imageSrc: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      imageAlt: 'Productivity Widgets Dashboard',
      reverse: true,
      gradient: 'from-green-50 to-emerald-50'
    },
    {
      id: 'mindful',
      title: 'Mindful Audio',
      subtitle: 'Peaceful Focus',
      description: 'Create your perfect audio environment with our curated collection of nasheeds, Quran recitations, and ambient sounds.',
      features: [
        'Extensive library of beautiful nasheeds and Quranic recitations',
        'Nature sounds, rain, and white noise for deep concentration',
        'Advanced audio mixer to create custom soundscapes',
        'Smart playlists that adapt to your daily routine'
      ],
      imageSrc: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      imageAlt: 'Audio Player and Mixer Interface',
      reverse: false,
      gradient: 'from-purple-50 to-pink-50'
    },
    {
      id: 'prayer',
      title: 'Prayer Times & Islamic Calendar',
      subtitle: 'Stay Connected',
      description: 'Never miss a prayer with accurate timing and beautiful visual reminders that integrate seamlessly into your day.',
      features: [
        'Precise prayer times based on your exact location',
        'Multiple calculation methods including different Madhabs',
        'Visual countdown timers with gentle notifications',
        'Islamic (Hijri) calendar with important dates and events'
      ],
      imageSrc: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      imageAlt: 'Prayer Times and Islamic Calendar Widget',
      reverse: true,
      gradient: 'from-orange-50 to-amber-50'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Sticky Navigation */}
      <StickyNavigation />
      
      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>
      
      {/* Feature Sections */}
      {features.map((feature) => (
        <div key={feature.id} id={feature.id}>
          <FeatureSection {...feature} />
        </div>
      ))}
      
      {/* Widget Showcase */}
      <WidgetShowcase />
      
      {/* Browser Compatibility */}
      <BrowserCompatibility />
      
      {/* Call to Action */}
      <CallToAction />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">DeenTab</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Your digital sanctuary for focus, productivity, and faith. 
                Made with love and dedication for the Muslim community.
              </p>
              <div className="text-sm text-gray-500">
                Made with ❤️ & Faith
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Premium</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Browser Extension</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Web App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DeenTab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;