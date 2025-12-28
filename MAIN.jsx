import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Bell, 
  Shield, 
  Zap, 
  Users, 
  MapPin, 
  AlertTriangle, 
  Calendar, 
  Navigation, 
  CheckCircle, 
  Phone, 
  Mail, 
  ArrowRight, 
  Menu, 
  X, 
  Clock, 
  Wifi 
} from 'lucide-react';
import './city-alerts-styles.css'; // Import the separate CSS file

export default function CityAlertsLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAlert, setActiveAlert] = useState(0);

  // Mock alert data for the live preview
  const mockAlerts = [
    { 
      type: 'traffic', 
      icon: Navigation, 
      text: 'Heavy traffic on MG Road - Use alternate route', 
      time: '2 mins ago' 
    },
    { 
      type: 'power', 
      icon: Zap, 
      text: 'Power outage in Sector 12 - Restoration by 6 PM', 
      time: '15 mins ago' 
    },
    { 
      type: 'event', 
      icon: Calendar, 
      text: 'Community cleanup drive this Sunday at City Park', 
      time: '1 hour ago' 
    },
    { 
      type: 'safety', 
      icon: Shield, 
      text: 'Weather advisory: Heavy rain expected tonight', 
      time: '3 hours ago' 
    }
  ];

  // Rotate through alerts automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlert((prev) => (prev + 1) % mockAlerts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mockAlerts.length]);

  // Features data
  const features = [
    {
      icon: Bell,
      title: "Real-Time Alerts",
      description: "Get instant notifications about traffic, power cuts, roadblocks, and safety concerns in your area"
    },
    {
      icon: MessageCircle,
      title: "No New App Needed",
      description: "All updates delivered directly through WhatsApp - the app you already use every day"
    },
    {
      icon: Shield,
      title: "Verified Information",
      description: "Trustworthy, reliable updates from official sources - no rumors or misinformation"
    },
    {
      icon: Calendar,
      title: "Community Events",
      description: "Stay informed about local happenings, cultural events, and community activities"
    },
    {
      icon: MapPin,
      title: "Location-Based",
      description: "Receive updates relevant to your neighborhood and frequently visited areas"
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Critical information reaches you in seconds, ensuring you're always prepared"
    }
  ];

  // Alert types
  const alertTypes = [
    { name: 'Traffic Updates', icon: Navigation, color: 'orange' },
    { name: 'Power Cuts', icon: Zap, color: 'yellow' },
    { name: 'Safety Alerts', icon: Shield, color: 'red' },
    { name: 'Road Blocks', icon: AlertTriangle, color: 'amber' },
    { name: 'Public Services', icon: Users, color: 'blue' },
    { name: 'Local Events', icon: Calendar, color: 'purple' }
  ];

  // How it works steps
  const steps = [
    { 
      step: '01', 
      title: 'Send a Message', 
      desc: 'Send "SUBSCRIBE" to our WhatsApp number', 
      icon: MessageCircle 
    },
    { 
      step: '02', 
      title: 'Choose Your Areas', 
      desc: 'Select the neighborhoods you want updates from', 
      icon: MapPin 
    },
    { 
      step: '03', 
      title: 'Stay Informed', 
      desc: 'Receive real-time alerts directly in WhatsApp', 
      icon: Bell 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 whatsapp-gradient rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold outfit gradient-text">CityAlert</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                How It Works
              </a>
              <a href="#coverage" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Coverage
              </a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Contact
              </a>
              <button className="px-6 py-3 whatsapp-gradient text-white rounded-full font-semibold flex items-center gap-2 whatsapp-btn">
                <MessageCircle className="w-5 h-5" />
                Subscribe Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                How It Works
              </a>
              <a href="#coverage" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Coverage
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-200 rounded-full filter blur-3xl opacity-30 float-animation"></div>
        <div 
          className="absolute bottom-20 left-10 w-80 h-80 bg-teal-200 rounded-full filter blur-3xl opacity-30 float-animation" 
          style={{ animationDelay: '3s' }}
        ></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column - Text Content */}
          <div>
            <div className="slide-up" style={{ animationDelay: '0.2s', transform: 'translateY(30px)' }}>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Wifi className="w-4 h-4" />
                Stay Connected. Stay Informed.
              </div>
            </div>

            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-black outfit mb-6 text-gray-900 leading-tight slide-up" 
              style={{ animationDelay: '0.4s', transform: 'translateY(30px)' }}
            >
              Your City's Updates,<br />
              <span className="gradient-text">Right in WhatsApp</span>
            </h1>

            <p 
              className="text-xl text-gray-600 mb-8 leading-relaxed slide-up" 
              style={{ animationDelay: '0.6s', transform: 'translateY(30px)' }}
            >
              Real-time alerts about traffic, emergencies, events, and city happenings delivered 
              directly to your WhatsApp. No new apps, just reliable information when you need it.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 slide-up" 
              style={{ animationDelay: '0.8s', transform: 'translateY(30px)' }}
            >
              <button className="px-8 py-4 whatsapp-gradient text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 whatsapp-btn">
                <MessageCircle className="w-6 h-6" />
                Join via WhatsApp
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-emerald-500 text-emerald-600 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all">
                Learn More
              </button>
            </div>

            <div 
              className="mt-12 flex items-center gap-8 slide-up" 
              style={{ animationDelay: '1s', transform: 'translateY(30px)' }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-gray-600 font-medium">No App Download</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-gray-600 font-medium">100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-gray-600 font-medium">Verified Info</span>
              </div>
            </div>
          </div>

          {/* Right Column - Live Notifications Preview */}
          <div 
            className="relative slide-up" 
            style={{ animationDelay: '1.2s', transform: 'translateY(30px)' }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {/* Phone Mockup Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 whatsapp-gradient rounded-full flex items-center justify-center pulse-ring">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">City Alerts</div>
                  <div className="text-sm text-gray-500">Live notifications</div>
                </div>
              </div>

              {/* Notification Feed */}
              <div className="space-y-4">
                {mockAlerts.map((alert, idx) => {
                  const Icon = alert.icon;
                  return (
                    <div 
                      key={idx}
                      className={`p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 ${
                        idx === activeAlert ? 'notification-slide ring-2 ring-emerald-400' : 'opacity-60'
                      }`}
                    >
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium text-sm mb-1">{alert.text}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            {alert.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Typing Indicator */}
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                  <div 
                    className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" 
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                  <div 
                    className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" 
                    style={{ animationDelay: '0.4s' }}
                  ></div>
                </div>
                <span>Monitoring your city...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Types Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black outfit mb-4 text-gray-900">
              What Updates Do You <span className="gradient-text">Receive?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Stay informed about everything that matters in your city
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {alertTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 card-hover text-center"
                >
                  <div className={`w-14 h-14 mx-auto mb-3 bg-${type.color}-100 rounded-full flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 text-${type.color}-600`} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">{type.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 mesh-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black outfit mb-4 text-gray-900">
              Why <span className="gradient-text">CityAlert</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The simplest way to stay connected with your city's pulse
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg card-hover">
                  <div className="w-16 h-16 whatsapp-gradient rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold outfit mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black outfit mb-4 text-gray-900">
              Get Started in <span className="gradient-text">3 Simple Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative">
                  <div className="text-center">
                    <div className="inline-flex w-20 h-20 whatsapp-gradient rounded-full items-center justify-center mb-6 relative">
                      <Icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold outfit mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-10 -right-4 text-emerald-300">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="px-10 py-5 whatsapp-gradient text-white rounded-full font-bold text-xl flex items-center gap-3 mx-auto whatsapp-btn">
              <MessageCircle className="w-7 h-7" />
              Start Getting Alerts Now
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black outfit mb-2">50K+</div>
              <div className="text-emerald-100 font-medium">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-black outfit mb-2">1M+</div>
              <div className="text-emerald-100 font-medium">Alerts Sent</div>
            </div>
            <div>
              <div className="text-5xl font-black outfit mb-2">100%</div>
              <div className="text-emerald-100 font-medium">Verified Info</div>
            </div>
            <div>
              <div className="text-5xl font-black outfit mb-2">24/7</div>
              <div className="text-emerald-100 font-medium">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black outfit mb-6 text-gray-900">
            Never Miss a Beat in <span className="gradient-text">Your City</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of residents who trust CityAlert for reliable, real-time updates
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-10 py-5 whatsapp-gradient text-white rounded-full font-bold text-xl flex items-center justify-center gap-3 whatsapp-btn">
              <MessageCircle className="w-7 h-7" />
              Subscribe via WhatsApp
            </button>
            <button className="px-10 py-5 bg-white border-2 border-gray-300 text-gray-700 rounded-full font-bold text-xl hover:bg-gray-50 transition-all">
              Learn More
            </button>
          </div>

          <div className="flex justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-emerald-600" />
              <span>+1-234-567-8900</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-600" />
              <span>hello@cityalert.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 whatsapp-gradient rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold outfit">CityAlert</span>
              </div>
              <p className="text-gray-400 text-sm">
                Keeping your city connected, one message at a time.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#coverage" className="hover:text-white transition-colors">Coverage</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 CityAlert. All rights reserved. Stay informed, stay safe.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}