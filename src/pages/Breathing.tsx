import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, ArrowRight } from 'lucide-react';

const Breathing: React.FC = () => {
  const navigate = useNavigate();
  
  const breathingOptions = [
    {
      id: 'basic',
      title: 'Respiração Básica',
      description: 'Técnica simples para acalmar a mente e relaxar o corpo',
      duration: '5 minutos',
      level: 'Iniciante'
    },
    {
      id: 'square',
      title: 'Respiração Quadrada',
      description: 'Inspire, segure, expire e segure por tempos iguais',
      duration: '7 minutos',
      level: 'Intermediário'
    },
    {
      id: '478',
      title: 'Técnica 4-7-8',
      description: 'Inspire por 4, segure por 7, expire por 8',
      duration: '10 minutos',
      level: 'Intermediário'
    }
  ];
  
  const durationOptions = [
    { value: 1, label: '1 min' },
    { value: 2, label: '2 min' },
    { value: 5, label: '5 min' },
    { value: 10, label: '10 min' }
  ];
  
  const [selectedTechnique, setSelectedTechnique] = React.useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = React.useState<number | null>(null);

  const handleStartSession = () => {
    navigate('/breathing/session', { 
      state: { 
        technique: selectedTechnique,
        duration: selectedDuration 
      } 
    });
  };

  return (
    <div className="min-h-screen gradient-primary pt-6 px-4 pb-20">
      <header className="mb-6 flex items-center">
        <div className="bg-blue-100 p-2 rounded-full mr-3">
          <Activity size={24} className="text-blue-600" />
        </div>
        <div>
          <h1 className="text-blue-900">Respiração Guiada</h1>
          <p className="text-blue-600 text-sm">Acalme sua mente, respire profundamente</p>
        </div>
      </header>
      
      <section className="mb-6">
        <h2 className="text-blue-800 mb-3">Escolha uma técnica</h2>
        <div className="space-y-3">
          {breathingOptions.map(option => (
            <div 
              key={option.id}
              className={`card-hover border-2 ${
                selectedTechnique === option.id 
                  ? 'border-blue-400' 
                  : 'border-transparent'
              }`}
              onClick={() => setSelectedTechnique(option.id)}
            >
              <h3 className="font-medium text-blue-700">{option.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{option.description}</p>
              <div className="flex justify-between mt-2 text-xs">
                <span className="text-blue-500">{option.duration}</span>
                <span className="bg-blue-50 px-2 py-1 rounded-full text-blue-600">{option.level}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-blue-800 mb-3">Duração</h2>
        <div className="flex space-x-2">
          {durationOptions.map(option => (
            <button
              key={option.value}
              className={`flex-1 py-3 rounded-lg ${
                selectedDuration === option.value 
                  ? 'bg-blue-100 text-blue-700 border-2 border-blue-300' 
                  : 'bg-white text-gray-500 border border-gray-300'
              }`}
              onClick={() => setSelectedDuration(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </section>
      
      <button 
        onClick={handleStartSession}
        disabled={!selectedTechnique || !selectedDuration}
        className={`w-full btn-primary ${
          !selectedTechnique || !selectedDuration ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <span className="mr-2">Iniciar sessão</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default Breathing;
