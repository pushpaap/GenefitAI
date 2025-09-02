import React from 'react';
import { TrendingUp, Shield, Heart, Music, Activity, Brain, AlertTriangle, CheckCircle, Download, Share } from 'lucide-react';

const Dashboard: React.FC = () => {
  const healthMetrics = [
    { label: 'Overall Health Score', value: '87/100', status: 'good', icon: Activity, trend: '+5%' },
    { label: 'Tumor Risk Level', value: 'Low', status: 'good', icon: Shield, trend: '-2%' },
    { label: 'Genetic Wellness', value: 'Excellent', status: 'good', icon: Heart, trend: '+8%' },
    { label: 'Analysis Complete', value: '100%', status: 'good', icon: Brain, trend: 'Complete' }
  ];

  const recentAnalysis = [
    { type: 'Tumor Screening', date: '2 hours ago', status: 'completed', risk: 'Low', confidence: '94%' },
    { type: 'Lifestyle Analysis', date: '3 hours ago', status: 'completed', risk: 'Optimized', confidence: '97%' },
    { type: 'DNA Sonification', date: '4 hours ago', status: 'completed', risk: 'Generated', confidence: '100%' },
    { type: 'Genetic Markers', date: '5 hours ago', status: 'completed', risk: 'Normal', confidence: '96%' }
  ];

  const insights = [
    {
      title: 'Enhanced BRCA1 Protection',
      description: 'Your genetic profile shows strong protective factors against breast cancer.',
      impact: 'Reduces risk by 23%',
      type: 'positive'
    },
    {
      title: 'Omega-3 Sensitivity',
      description: 'Your genes indicate enhanced response to omega-3 fatty acids.',
      impact: 'Inflammation reduction potential',
      type: 'actionable'
    },
    {
      title: 'Sleep Optimization Needed',
      description: 'Circadian rhythm genes suggest benefits from consistent sleep schedule.',
      impact: 'Potential 15% wellness improvement',
      type: 'actionable'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Your Genetic Health Dashboard</h1>
          <p className="text-slate-600">Comprehensive analysis of your genomic data and health insights.</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200">
            <Share className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {healthMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                <metric.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-right">
                <CheckCircle className="w-5 h-5 text-green-500 mb-1" />
                <span className="text-xs text-green-600 font-medium">{metric.trend}</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 mb-1">{metric.label}</p>
            <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all duration-200 transform hover:scale-105">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-slate-900">Run Tumor Screening</p>
                  <p className="text-xs text-slate-500">Full genetic cancer analysis</p>
                </div>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl hover:from-green-100 hover:to-teal-100 transition-all duration-200 transform hover:scale-105">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-slate-900">Update Lifestyle Plan</p>
                  <p className="text-xs text-slate-500">Refresh recommendations</p>
                </div>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all duration-200 transform hover:scale-105">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Music className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-slate-900">Generate DNA Music</p>
                  <p className="text-xs text-slate-500">Create genetic symphony</p>
                </div>
              </button>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Insights
            </h3>
            <div className="space-y-3 text-sm">
              {insights.map((insight, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-3">
                  <h4 className="font-medium mb-1">{insight.title}</h4>
                  <p className="text-purple-100 text-xs mb-2">{insight.description}</p>
                  <span className="inline-block px-2 py-1 bg-white/20 rounded text-xs font-medium">
                    {insight.impact}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Analysis */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">Recent Analysis Results</h3>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div className="space-y-4">
              {recentAnalysis.map((analysis, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{analysis.type}</p>
                      <p className="text-sm text-slate-500">{analysis.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-slate-500">Confidence: {analysis.confidence}</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {analysis.risk}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Summary */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">Analysis Progress</p>
                  <p className="text-sm text-slate-600">All genomic screening completed</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">100%</p>
                  <p className="text-sm text-slate-500">Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Assessment Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="flex items-center space-x-4 mb-6">
            <Brain className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold">Comprehensive Health Summary</h3>
              <p className="text-blue-100">AI analysis based on your complete genetic profile</p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-sm text-blue-100 mb-1">Cancer Risk</p>
              <p className="text-3xl font-bold">Low</p>
              <p className="text-xs text-blue-200 mt-1">12% average</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-sm text-blue-100 mb-1">Wellness Potential</p>
              <p className="text-3xl font-bold">High</p>
              <p className="text-xs text-blue-200 mt-1">92% optimization</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-sm text-blue-100 mb-1">Action Items</p>
              <p className="text-3xl font-bold">5</p>
              <p className="text-xs text-blue-200 mt-1">High priority</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-sm text-blue-100 mb-1">DNA Music</p>
              <p className="text-3xl font-bold">Ready</p>
              <p className="text-xs text-blue-200 mt-1">3 min symphony</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;