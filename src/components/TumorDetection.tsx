import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, TrendingDown, Brain, Activity, Info } from 'lucide-react';

const TumorDetection: React.FC = () => {
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  const tumorRisks = [
    { 
      type: 'Breast Cancer', 
      risk: 12, 
      genetic_markers: ['BRCA1', 'BRCA2'], 
      status: 'low',
      recommendation: 'Continue regular screenings every 2 years'
    },
    { 
      type: 'Colorectal Cancer', 
      risk: 8, 
      genetic_markers: ['APC', 'MLH1'], 
      status: 'very_low',
      recommendation: 'Standard screening at age 50'
    },
    { 
      type: 'Lung Cancer', 
      risk: 15, 
      genetic_markers: ['TP53', 'EGFR'], 
      status: 'low',
      recommendation: 'Avoid smoking, annual check-ups recommended'
    },
    { 
      type: 'Prostate Cancer', 
      risk: 22, 
      genetic_markers: ['HOXB13', 'BRCA2'], 
      status: 'moderate',
      recommendation: 'Enhanced screening starting at age 40'
    }
  ];

  const geneticMarkers = [
    { name: 'BRCA1', status: 'normal', confidence: 98 },
    { name: 'BRCA2', status: 'normal', confidence: 97 },
    { name: 'TP53', status: 'variant', confidence: 95 },
    { name: 'APC', status: 'normal', confidence: 99 },
    { name: 'MLH1', status: 'normal', confidence: 96 },
    { name: 'EGFR', status: 'normal', confidence: 94 }
  ];

  const getRiskColor = (risk: number) => {
    if (risk < 10) return 'text-green-600 bg-green-100';
    if (risk < 20) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getRiskIcon = (status: string) => {
    switch (status) {
      case 'very_low':
      case 'low':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'moderate':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'high':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">AI Tumor Detection Analysis</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Advanced machine learning analysis of your genetic markers to assess tumor risks 
          and provide early detection insights.
        </p>
      </div>

      {/* Overall Risk Assessment */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Overall Risk Assessment</h2>
            <p className="text-green-100 mb-4">Based on comprehensive genetic analysis</p>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6" />
              <span className="text-xl font-semibold">Low Risk Profile</span>
            </div>
          </div>
          <div className="text-right">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <TrendingDown className="w-12 h-12" />
            </div>
            <p className="text-sm text-green-100">AI Confidence: 94%</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cancer Risk Analysis */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
              <Brain className="w-6 h-6 mr-3 text-blue-600" />
              Cancer Risk Analysis
            </h3>
            <div className="space-y-4">
              {tumorRisks.map((cancer, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {getRiskIcon(cancer.status)}
                      <h4 className="font-semibold text-slate-900">{cancer.type}</h4>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(cancer.risk)}`}>
                      {cancer.risk}% risk
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-slate-500 mb-1">
                      <span>Risk Level</span>
                      <span>{cancer.risk}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          cancer.risk < 10 ? 'bg-green-500' : 
                          cancer.risk < 20 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${cancer.risk}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm text-slate-500 mb-1">Genetic Markers:</p>
                    <div className="flex flex-wrap gap-2">
                      {cancer.genetic_markers.map((marker, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                          {marker}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                    <strong>Recommendation:</strong> {cancer.recommendation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Genetic Markers */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-purple-600" />
              Genetic Markers
            </h3>
            <div className="space-y-3">
              {geneticMarkers.map((marker, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                    selectedMarker === marker.name 
                      ? 'bg-blue-50 border border-blue-200' 
                      : 'bg-slate-50 hover:bg-slate-100'
                  }`}
                  onClick={() => setSelectedMarker(marker.name)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-slate-900">{marker.name}</span>
                    <span className={`w-2 h-2 rounded-full ${
                      marker.status === 'normal' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 capitalize">{marker.status}</span>
                    <span className="text-slate-500">{marker.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Insights
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Info className="w-4 h-4 mt-0.5 text-purple-200" />
                <p>Your genetic profile shows strong protective factors against common cancers.</p>
              </div>
              <div className="flex items-start space-x-2">
                <Info className="w-4 h-4 mt-0.5 text-purple-200" />
                <p>Consider enhanced screening for prostate cancer due to family history markers.</p>
              </div>
              <div className="flex items-start space-x-2">
                <Info className="w-4 h-4 mt-0.5 text-purple-200" />
                <p>Lifestyle modifications could reduce your overall cancer risk by 15-20%.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TumorDetection;