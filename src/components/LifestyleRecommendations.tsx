import React, { useState } from 'react';
import { Heart, Utensils, Dumbbell, Moon, Brain, TrendingUp, CheckCircle, Star } from 'lucide-react';

const LifestyleRecommendations: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('nutrition');

  const categories = [
    { id: 'nutrition', label: 'Nutrition', icon: Utensils, color: 'green' },
    { id: 'fitness', label: 'Fitness', icon: Dumbbell, color: 'blue' },
    { id: 'sleep', label: 'Sleep', icon: Moon, color: 'purple' },
    { id: 'stress', label: 'Stress Management', icon: Brain, color: 'teal' }
  ];

  const recommendations = {
    nutrition: [
      {
        title: 'Mediterranean Diet Emphasis',
        description: 'Your genetic profile shows enhanced response to Mediterranean dietary patterns.',
        genetic_basis: 'APOE ε4 variant suggests improved cognitive protection',
        priority: 'high',
        difficulty: 'medium'
      },
      {
        title: 'Omega-3 Supplementation',
        description: 'Increased omega-3 needs based on inflammation response genes.',
        genetic_basis: 'IL6 and TNF-α variants indicate higher inflammatory baseline',
        priority: 'high',
        difficulty: 'easy'
      },
      {
        title: 'Moderate Caffeine Intake',
        description: 'Slow caffeine metabolism detected - limit to 200mg daily.',
        genetic_basis: 'CYP1A2 slow metabolizer variant',
        priority: 'medium',
        difficulty: 'easy'
      }
    ],
    fitness: [
      {
        title: 'High-Intensity Interval Training',
        description: 'Your genetic profile shows excellent response to HIIT workouts.',
        genetic_basis: 'ACE I/D polymorphism favors anaerobic performance',
        priority: 'high',
        difficulty: 'hard'
      },
      {
        title: 'Strength Training Focus',
        description: 'Enhanced muscle fiber composition for resistance training.',
        genetic_basis: 'ACTN3 variant associated with power performance',
        priority: 'high',
        difficulty: 'medium'
      },
      {
        title: 'Extended Recovery Periods',
        description: 'Genetic markers indicate need for longer recovery between intense sessions.',
        genetic_basis: 'IL6 variant suggests slower inflammation resolution',
        priority: 'medium',
        difficulty: 'easy'
      }
    ],
    sleep: [
      {
        title: 'Consistent Sleep Schedule',
        description: 'Strong circadian rhythm genetics require regular sleep-wake cycles.',
        genetic_basis: 'CLOCK gene variants show high sensitivity to schedule disruption',
        priority: 'high',
        difficulty: 'medium'
      },
      {
        title: 'Blue Light Management',
        description: 'Increased sensitivity to evening light exposure.',
        genetic_basis: 'PER3 length polymorphism affects melatonin regulation',
        priority: 'medium',
        difficulty: 'easy'
      }
    ],
    stress: [
      {
        title: 'Mindfulness Meditation',
        description: 'Your stress response genes show excellent adaptation to meditation practices.',
        genetic_basis: 'COMT val/met variant benefits from mindfulness interventions',
        priority: 'high',
        difficulty: 'medium'
      },
      {
        title: 'Social Connection Priority',
        description: 'Genetic profile indicates strong health benefits from social support.',
        genetic_basis: 'OXTR variants enhance oxytocin sensitivity',
        priority: 'medium',
        difficulty: 'easy'
      }
    ]
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Personalized Wellness Plan</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          AI-powered lifestyle recommendations tailored to your unique genetic profile 
          for optimal health and disease prevention.
        </p>
      </div>

      {/* Wellness Score */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-xl p-8 text-white mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-10 h-10" />
            </div>
            <p className="text-2xl font-bold">92/100</p>
            <p className="text-green-100">Wellness Potential</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-10 h-10" />
            </div>
            <p className="text-2xl font-bold">+15%</p>
            <p className="text-green-100">Improvement Potential</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Activity className="w-10 h-10" />
            </div>
            <p className="text-2xl font-bold">8/12</p>
            <p className="text-green-100">Recommendations Active</p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`
              flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300
              ${activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-slate-600 hover:bg-slate-50 shadow-md'
              }
            `}
          >
            <category.icon className="w-5 h-5" />
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      {/* Recommendations */}
      <div className="grid gap-6">
        {recommendations[activeCategory as keyof typeof recommendations]?.map((rec, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-slate-900 mb-2">{rec.title}</h4>
                <p className="text-slate-600 mb-3">{rec.description}</p>
              </div>
              <div className="flex flex-col space-y-2 ml-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                  {rec.priority} priority
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(rec.difficulty)}`}>
                  {rec.difficulty}
                </span>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Genetic Basis:</strong> {rec.genetic_basis}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Implementation Guide */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
          <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
          Implementation Guide
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Week 1-2: Foundation</h4>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Start with easy-priority recommendations</li>
              <li>• Focus on sleep schedule consistency</li>
              <li>• Begin omega-3 supplementation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Week 3-4: Progression</h4>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Introduce HIIT training gradually</li>
              <li>• Implement Mediterranean diet changes</li>
              <li>• Add mindfulness practice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifestyleRecommendations;