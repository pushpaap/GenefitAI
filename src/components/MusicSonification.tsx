import React, { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause, Download, Volume2, Settings, AudioWaveform as Waveform, Disc, RotateCcw } from 'lucide-react';

const MusicSonification: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutes
  const [volume, setVolume] = useState(0.7);
  const [sonificationMethod, setSonificationMethod] = useState('frequency');
  const [selectedSequence, setSelectedSequence] = useState('chromosome1');
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const sequences = [
    { id: 'chromosome1', name: 'Chromosome 1 (BRCA1 Region)', length: '2.1M base pairs' },
    { id: 'chromosome17', name: 'Chromosome 17 (TP53 Region)', length: '1.8M base pairs' },
    { id: 'chromosome13', name: 'Chromosome 13 (BRCA2 Region)', length: '1.5M base pairs' },
    { id: 'mitochondrial', name: 'Mitochondrial DNA', length: '16.5K base pairs' }
  ];

  const sonificationMethods = [
    { 
      id: 'frequency', 
      name: 'Frequency Mapping', 
      description: 'A=220Hz, T=440Hz, G=880Hz, C=1760Hz' 
    },
    { 
      id: 'harmonic', 
      name: 'Harmonic Series', 
      description: 'Base pairs mapped to harmonic overtones' 
    },
    { 
      id: 'pentatonic', 
      name: 'Pentatonic Scale', 
      description: 'Traditional musical scale mapping' 
    },
    { 
      id: 'chromatic', 
      name: 'Chromatic Scale', 
      description: 'Full 12-tone chromatic progression' 
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.1;
        });
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, duration]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const resetPlayback = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const generateWaveform = () => {
    const points = [];
    for (let i = 0; i < 100; i++) {
      const progress = i / 100;
      const playProgress = currentTime / duration;
      const amplitude = Math.sin(i * 0.1 + currentTime * 2) * 0.5 + 
                       Math.sin(i * 0.05 + currentTime * 1.5) * 0.3 +
                       Math.sin(i * 0.02 + currentTime * 0.8) * 0.2;
      const height = 40 + amplitude * 20;
      const isActive = progress <= playProgress;
      points.push({
        x: i * 4,
        height: Math.abs(height),
        active: isActive && isPlaying
      });
    }
    return points;
  };

  const waveformPoints = generateWaveform();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Music className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">DNA Music Sonification</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Transform your genetic sequences into beautiful musical compositions using 
          advanced algorithmic sonification techniques.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Player */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl p-8 text-white">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-1">Now Playing</h3>
                <p className="text-slate-300">{sequences.find(s => s.id === selectedSequence)?.name}</p>
              </div>
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <Disc className={`w-6 h-6 ${isPlaying ? 'animate-spin' : ''}`} />
              </div>
            </div>

            {/* Waveform Visualization */}
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-center h-32 relative overflow-hidden">
                <svg width="400" height="80" className="absolute inset-0 w-full h-full">
                  {waveformPoints.map((point, index) => (
                    <rect
                      key={index}
                      x={point.x}
                      y={40 - point.height / 2}
                      width="3"
                      height={point.height}
                      fill={point.active ? '#8B5CF6' : '#475569'}
                      className="transition-all duration-100"
                    />
                  ))}
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg"></div>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">{formatTime(currentTime)}</span>
                <span className="text-sm text-slate-300">{formatTime(duration)}</span>
              </div>
              
              <div className="w-full bg-slate-700 rounded-full h-2 cursor-pointer">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-100"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <button 
                  onClick={resetPlayback}
                  className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors duration-200"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <button 
                  onClick={togglePlayback}
                  className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full transition-all duration-200 transform hover:scale-105"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </button>
                <button className="p-3 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors duration-200">
                  <Download className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <Volume2 className="w-5 h-5 text-slate-400" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Controls and Settings */}
        <div className="lg:col-span-1 space-y-6">
          {/* Sequence Selection */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <Waveform className="w-5 h-5 mr-2 text-purple-600" />
              DNA Sequence
            </h3>
            <div className="space-y-3">
              {sequences.map((sequence) => (
                <label key={sequence.id} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="sequence"
                    value={sequence.id}
                    checked={selectedSequence === sequence.id}
                    onChange={(e) => setSelectedSequence(e.target.value)}
                    className="w-4 h-4 text-purple-600 border-slate-300 focus:ring-purple-500"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{sequence.name}</p>
                    <p className="text-sm text-slate-500">{sequence.length}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Sonification Method */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-600" />
              Sonification Method
            </h3>
            <div className="space-y-3">
              {sonificationMethods.map((method) => (
                <label key={method.id} className="block cursor-pointer">
                  <div className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    sonificationMethod === method.id 
                      ? 'border-purple-300 bg-purple-50' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="method"
                        value={method.id}
                        checked={sonificationMethod === method.id}
                        onChange={(e) => setSonificationMethod(e.target.value)}
                        className="w-4 h-4 text-purple-600 border-slate-300 focus:ring-purple-500"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-slate-900">{method.name}</p>
                        <p className="text-sm text-slate-500">{method.description}</p>
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Genetic Statistics */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Sequence Statistics</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">32%</p>
                  <p className="text-sm text-slate-600">Adenine (A)</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">18%</p>
                  <p className="text-sm text-slate-600">Thymine (T)</p>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <p className="text-2xl font-bold text-yellow-600">28%</p>
                  <p className="text-sm text-slate-600">Guanine (G)</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">22%</p>
                  <p className="text-sm text-slate-600">Cytosine (C)</p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">GC Content</span>
                  <span className="font-semibold text-slate-900">50%</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-slate-500">Complexity Score</span>
                  <span className="font-semibold text-slate-900">8.7/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Music Analysis */}
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Musical Analysis</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
              <span className="text-slate-600">Dominant Key</span>
              <span className="font-semibold text-slate-900">C Major</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
              <span className="text-slate-600">Tempo (BPM)</span>
              <span className="font-semibold text-slate-900">120</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
              <span className="text-slate-600">Time Signature</span>
              <span className="font-semibold text-slate-900">4/4</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
              <span className="text-slate-600">Harmonic Complexity</span>
              <span className="font-semibold text-slate-900">Moderate</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Genetic-Musical Correlations</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <p className="font-medium text-slate-900 mb-2">Repetitive Sequences → Rhythmic Patterns</p>
              <p className="text-sm text-slate-600">Your DNA's tandem repeats create natural rhythmic motifs</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200">
              <p className="font-medium text-slate-900 mb-2">GC Content → Harmonic Richness</p>
              <p className="text-sm text-slate-600">High GC regions translate to complex harmonies</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <p className="font-medium text-slate-900 mb-2">SNPs → Melodic Variations</p>
              <p className="text-sm text-slate-600">Genetic variants create unique musical signatures</p>
            </div>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Export Your Genetic Symphony</h3>
            <p className="text-purple-100 mb-4">
              Download your personalized DNA music in various formats
            </p>
          </div>
          <Music className="w-12 h-12 text-purple-200" />
        </div>
        
        <div className="grid sm:grid-cols-3 gap-4">
          <button className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors duration-200">
            <p className="font-semibold mb-1">MP3 Audio</p>
            <p className="text-sm text-purple-100">High-quality audio file</p>
          </button>
          <button className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors duration-200">
            <p className="font-semibold mb-1">MIDI File</p>
            <p className="text-sm text-purple-100">Musical notation data</p>
          </button>
          <button className="bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors duration-200">
            <p className="font-semibold mb-1">Sheet Music</p>
            <p className="text-sm text-purple-100">PDF notation</p>
          </button>
        </div>
      </div>

      {/* Scientific Background */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">How DNA Sonification Works</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">1. Sequence Analysis</h4>
            <p className="text-sm text-slate-600 mb-4">
              AI algorithms analyze your genetic sequences to identify patterns, 
              repetitions, and structural elements that can be mapped to musical parameters.
            </p>
            
            <h4 className="font-semibold text-slate-900 mb-2">2. Musical Mapping</h4>
            <p className="text-sm text-slate-600">
              Base pairs (A, T, G, C) are assigned specific frequencies, with additional 
              parameters like rhythm and harmony derived from sequence complexity and structure.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">3. Synthesis & Composition</h4>
            <p className="text-sm text-slate-600 mb-4">
              Advanced audio synthesis combines multiple tracks representing different 
              genomic features into a cohesive musical composition.
            </p>
            
            <h4 className="font-semibold text-slate-900 mb-2">4. Personalization</h4>
            <p className="text-sm text-slate-600">
              Your unique genetic variations create a completely original musical piece 
              that serves as both art and scientific visualization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSonification;