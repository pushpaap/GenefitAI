import React from 'react';
import { Dna, Home, Upload, BarChart3, Shield, Heart, Music } from 'lucide-react';
import type { ActiveView } from '../App';

interface HeaderProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  hasGeneticData: boolean;
}

const Header: React.FC<HeaderProps> = ({ activeView, setActiveView, hasGeneticData }) => {
  const navItems = [
    { id: 'home' as ActiveView, label: 'Home', icon: Home },
    { id: 'upload' as ActiveView, label: 'Upload DNA', icon: Upload },
    { id: 'dashboard' as ActiveView, label: 'Dashboard', icon: BarChart3, requiresData: true },
    { id: 'tumor' as ActiveView, label: 'Health Screening', icon: Shield, requiresData: true },
    { id: 'lifestyle' as ActiveView, label: 'Wellness', icon: Heart, requiresData: true },
    { id: 'music' as ActiveView, label: 'Sonification', icon: Music, requiresData: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Dna className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">GeneFit AI</h1>
              <p className="text-sm text-slate-500">Personalized Genomic Health</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(({ id, label, icon: Icon, requiresData }) => {
              const isDisabled = requiresData && !hasGeneticData;
              const isActive = activeView === id;
              
              return (
                <button
                  key={id}
                  onClick={() => !isDisabled && setActiveView(id)}
                  disabled={isDisabled}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-blue-100 text-blue-700 shadow-sm' 
                      : isDisabled
                        ? 'text-slate-400 cursor-not-allowed'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              );
            })}
          </nav>

          <div className="md:hidden">
            <button className="p-2 rounded-lg hover:bg-slate-100">
              <BarChart3 className="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;