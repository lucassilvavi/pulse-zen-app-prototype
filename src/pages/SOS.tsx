import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowRight } from 'lucide-react';

const SOS: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const sosOptions = [
    {
      id: 'anxiety',
      title: 'Ansiedade',
      description: 'Sensação de nervosismo, preocupação ou medo intenso'
    },
    {
      id: 'panic',
      title: 'Ataque de Pânico',
      description: 'Episódio súbito de medo intenso com sintomas físicos'
    },
    {
      id: 'overwhelm',
      title: 'Sobrecarga',
      description: 'Sensação de estar sobrecarregado(a) com muitas demandas'
    }
  ];

  const handleStartSession = () => {
    navigate('/sos/session', { state: { type: selectedOption } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-pink-50 pt-6 px-4 pb-20">
      <header className="mb-6 flex items-center">
        <div className="bg-red-100 p-2 rounded-full mr-3">
          <AlertCircle size={24} className="text-red-500" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-red-800">Modo SOS</h1>
          <p className="text-red-600 text-sm">Suporte para momentos difíceis</p>
        </div>
      </header>
      
      <section className="mb-6">
        <p className="text-gray-700 mb-4">
          O Modo SOS oferece técnicas rápidas para ajudar em momentos de ansiedade ou estresse intenso. 
          Selecione o que você está sentindo:
        </p>
        
        <div className="space-y-3 mb-8">
          {sosOptions.map(option => (
            <div 
              key={option.id}
              className={`bg-white rounded-xl shadow-md p-4 border-2 ${
                selectedOption === option.id 
                  ? 'border-red-400' 
                  : 'border-transparent'
              }`}
              onClick={() => setSelectedOption(option.id)}
            >
              <h3 className="font-medium text-red-700">{option.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{option.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-red-50 rounded-xl p-4 border border-red-200 mb-8">
          <p className="text-sm text-red-700">
            <strong>Nota:</strong> Se você estiver em uma emergência médica ou crise grave, 
            por favor, busque ajuda profissional imediatamente ou ligue para serviços de emergência.
          </p>
        </div>
      </section>
      
      <button 
        onClick={handleStartSession}
        disabled={!selectedOption}
        className={`w-full bg-red-600 text-white py-4 px-6 rounded-xl flex items-center justify-center shadow-md ${
          !selectedOption ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
        } transition-colors`}
      >
        <span className="mr-2">Iniciar sessão SOS</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default SOS;
