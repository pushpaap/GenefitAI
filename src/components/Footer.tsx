import React from 'react';
import { Dna, Heart, Shield, Music, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'Upload DNA', href: '#upload' },
        { label: 'Health Dashboard', href: '#dashboard' },
        { label: 'Tumor Detection', href: '#screening' },
        { label: 'Wellness Plans', href: '#lifestyle' }
      ]
    },
    {
      title: 'Science',
      links: [
        { label: 'How It Works', href: '#science' },
        { label: 'AI Models', href: '#models' },
        { label: 'Research Papers', href: '#research' },
        { label: 'Data Privacy', href: '#privacy' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Documentation', href: '#docs' },
        { label: 'API Reference', href: '#api' },
        { label: 'Help Center', href: '#help' },
        { label: 'Contact Us', href: '#contact' }
      ]
    }
  ];

  const features = [
    { icon: Shield, label: 'AI Tumor Detection' },
    { icon: Heart, label: 'Personalized Wellness' },
    { icon: Music, label: 'DNA Sonification' },
    { icon: Dna, label: 'Genetic Analysis' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Dna className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">GeneFit AI</h3>
                <p className="text-sm text-slate-400">Genomic Health Platform</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Revolutionizing personalized healthcare through AI-powered genetic analysis, 
              early tumor detection, and innovative DNA sonification.
            </p>
            
            {/* Features Icons */}
            <div className="flex space-x-3">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <feature.icon className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-700 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {feature.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Legal */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-400">
              <span>© 2025 GeneFit AI. All rights reserved.</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors duration-200">HIPAA Compliance</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;