import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import GeneticUpload from './components/GeneticUpload';
import TumorDetection from './components/TumorDetection';
import LifestyleRecommendations from './components/LifestyleRecommendations';
import MusicSonification from './components/MusicSonification';
import Footer from './components/Footer';

export type ActiveView = 'home' | 'upload' | 'dashboard' | 'tumor' | 'lifestyle' | 'music';

function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [hasGeneticData, setHasGeneticData] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'upload':
        return <GeneticUpload onUploadComplete={() => setHasGeneticData(true)} />;
      case 'dashboard':
        return <Dashboard />;
      case 'tumor':
        return <TumorDetection />;
      case 'lifestyle':
        return <LifestyleRecommendations />;
      case 'music':
        return <MusicSonification />;
      default:
        return <Hero onGetStarted={() => setActiveView('upload')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header 
        activeView={activeView} 
        setActiveView={setActiveView}
        hasGeneticData={hasGeneticData}
      />
      <main className="pt-20">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;