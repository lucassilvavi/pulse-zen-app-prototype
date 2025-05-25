import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const OnboardingBenefits: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "Reduza a Ansiedade",
      description: "Técnicas comprovadas para acalmar a mente e reduzir sintomas de ansiedade."
    },
    {
      title: "Melhore o Sono",
      description: "Práticas que ajudam a relaxar e preparar o corpo para um sono reparador."
    },
    {
      title: "Aumente o Foco",
      description: "Exercícios de respiração que melhoram a concentração e produtividade."
    },
    {
      title: "Desenvolva Resiliência",
      description: "Ferramentas para lidar melhor com o estresse do dia a dia."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 bg-gradient-to-b from-indigo-50 to-purple-100">
      <div className="w-full max-w-md flex flex-col items-center justify-center flex-grow">
        <h1 className="text-2xl font-bold text-indigo-900 mb-6 text-center">Benefícios da Prática Diária</h1>
        
        <div className="w-full space-y-4 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="font-semibold text-indigo-700">{benefit.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-indigo-600 text-sm mb-4">
          Apenas 5-10 minutos por dia podem fazer uma grande diferença na sua saúde mental.
        </p>
      </div>
      
      <button 
        onClick={() => navigate('/onboarding/features')}
        className="w-full max-w-md bg-indigo-600 text-white py-4 px-6 rounded-xl flex items-center justify-center mt-6 shadow-md hover:bg-indigo-700 transition-colors"
      >
        <span className="mr-2">Próximo</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default OnboardingBenefits;
