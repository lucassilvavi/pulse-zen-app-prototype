import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, AlertCircle, BookOpen } from 'lucide-react';

const OnboardingFeatures: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 bg-gradient-to-b from-indigo-50 to-purple-100">
      <div className="w-full max-w-md flex flex-col items-center justify-center flex-grow">
        <h1 className="text-2xl font-bold text-indigo-900 mb-6 text-center">Recursos Exclusivos</h1>
        
        <div className="w-full space-y-6 mb-8">
          {/* Modo SOS Feature */}
          <div className="bg-white p-5 rounded-xl shadow-md">
            <div className="flex items-start mb-3">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <AlertCircle size={24} className="text-red-500" />
              </div>
              <div>
                <h3 className="font-semibold text-red-600">Modo SOS</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Alívio imediato para momentos de ansiedade e pânico. Técnicas de grounding e respiração para acalmar rapidamente.
                </p>
              </div>
            </div>
            <div className="bg-red-50 rounded-lg p-3 flex justify-center">
              <span className="text-xs text-red-400">Visualização do Modo SOS</span>
            </div>
          </div>
          
          {/* Diário Emocional Feature */}
          <div className="bg-white p-5 rounded-xl shadow-md">
            <div className="flex items-start mb-3">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <BookOpen size={24} className="text-indigo-500" />
              </div>
              <div>
                <h3 className="font-semibold text-indigo-600">Diário Emocional com IA</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Registre seu humor e receba insights personalizados. A IA analisa padrões e sugere práticas específicas para você.
                </p>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-3 flex justify-center">
              <span className="text-xs text-indigo-400">Visualização do Diário</span>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => navigate('/onboarding/setup')}
        className="w-full max-w-md bg-indigo-600 text-white py-4 px-6 rounded-xl flex items-center justify-center mt-6 shadow-md hover:bg-indigo-700 transition-colors"
      >
        <span className="mr-2">Próximo</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default OnboardingFeatures;
