import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const OnboardingWelcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 bg-gradient-to-b from-indigo-50 to-purple-100">
      <div className="w-full max-w-md flex flex-col items-center justify-center flex-grow text-center">
        <div className="mb-8">
          <div className="w-24 h-24 rounded-full bg-indigo-600 mx-auto flex items-center justify-center">
            <span className="text-white text-3xl font-bold">N</span>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-indigo-900 mb-4">Bem-vindo ao Nourish</h1>
        
        <p className="text-lg text-indigo-700 mb-8">
          Seu espaço seguro para cuidar da sua saúde mental e encontrar momentos de calma no dia a dia.
        </p>
        
        <div className="w-full max-w-xs h-48 bg-white rounded-xl shadow-lg mb-8 flex items-center justify-center">
          <span className="text-indigo-400 text-sm">Ilustração de bem-estar</span>
        </div>
      </div>
      
      <button 
        onClick={() => navigate('/onboarding/benefits')}
        className="w-full max-w-md bg-indigo-600 text-white py-4 px-6 rounded-xl flex items-center justify-center mt-6 shadow-md hover:bg-indigo-700 transition-colors"
      >
        <span className="mr-2">Continuar</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default OnboardingWelcome;
