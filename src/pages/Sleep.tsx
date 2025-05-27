import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Clock, Music, BookOpen, ChevronRight } from 'lucide-react';

interface SleepOption {
  id: string;
  title: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
  type: 'story' | 'sound' | 'meditation';
}

const Sleep: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'stories' | 'sounds' | 'meditations'>('stories');
  
  // Mock data for sleep options
  const sleepOptions: SleepOption[] = [
    {
      id: 'story-1',
      title: 'Viagem pela floresta',
      duration: '15 minutos',
      description: 'Uma jornada relaxante através de uma floresta tranquila',
      icon: <BookOpen size={24} className="text-indigo-600" />,
      type: 'story'
    },
    {
      id: 'story-2',
      title: 'Noite estrelada',
      duration: '20 minutos',
      description: 'Relaxe observando as estrelas em uma noite clara',
      icon: <BookOpen size={24} className="text-indigo-600" />,
      type: 'story'
    },
    {
      id: 'sound-1',
      title: 'Chuva na janela',
      duration: '45 minutos',
      description: 'Som suave de chuva caindo em uma noite tranquila',
      icon: <Music size={24} className="text-blue-600" />,
      type: 'sound'
    },
    {
      id: 'sound-2',
      title: 'Ondas do oceano',
      duration: '60 minutos',
      description: 'Ondas suaves quebrando na praia',
      icon: <Music size={24} className="text-blue-600" />,
      type: 'sound'
    },
    {
      id: 'meditation-1',
      title: 'Relaxamento profundo',
      duration: '10 minutos',
      description: 'Meditação guiada para preparar o corpo para o sono',
      icon: <Moon size={24} className="text-purple-600" />,
      type: 'meditation'
    },
    {
      id: 'meditation-2',
      title: 'Liberando o dia',
      duration: '15 minutos',
      description: 'Deixe ir as preocupações do dia e prepare-se para dormir',
      icon: <Moon size={24} className="text-purple-600" />,
      type: 'meditation'
    }
  ];

  // Filter options based on active tab
  const filteredOptions = sleepOptions.filter(option => {
    if (activeTab === 'stories') return option.type === 'story';
    if (activeTab === 'sounds') return option.type === 'sound';
    if (activeTab === 'meditations') return option.type === 'meditation';
    return true;
  });

  // Handle navigation to sleep session
  const handleOptionClick = (option: SleepOption) => {
    navigate('/sleep/session', { state: { option } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 pt-6 px-4">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-indigo-900">Dormir</h1>
        <p className="text-indigo-600">Relaxe e prepare-se para uma boa noite de sono</p>
      </header>
      
      {/* Tabs */}
      <div className="flex mb-6 bg-white rounded-lg shadow-sm">
        <button 
          className={`flex-1 py-3 text-center rounded-l-lg ${activeTab === 'stories' ? 'bg-indigo-100 text-indigo-800 font-medium' : 'text-gray-600'}`}
          onClick={() => setActiveTab('stories')}
        >
          Histórias
        </button>
        <button 
          className={`flex-1 py-3 text-center ${activeTab === 'sounds' ? 'bg-indigo-100 text-indigo-800 font-medium' : 'text-gray-600'}`}
          onClick={() => setActiveTab('sounds')}
        >
          Sons
        </button>
        <button 
          className={`flex-1 py-3 text-center rounded-r-lg ${activeTab === 'meditations' ? 'bg-indigo-100 text-indigo-800 font-medium' : 'text-gray-600'}`}
          onClick={() => setActiveTab('meditations')}
        >
          Meditações
        </button>
      </div>
      
      {/* Sleep Options */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-indigo-800 mb-3">
          {activeTab === 'stories' ? 'Histórias para dormir' : 
           activeTab === 'sounds' ? 'Sons relaxantes' : 'Meditações para dormir'}
        </h2>
        
        <div className="space-y-3">
          {filteredOptions.map((option) => (
            <div 
              key={option.id}
              className="bg-white rounded-xl shadow-md p-4"
              onClick={() => handleOptionClick(option)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-indigo-700">{option.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <Clock size={14} className="mr-1" />
                      <span>{option.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{option.description}</p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Sleep Tips */}
      <section>
        <h2 className="text-lg font-semibold text-indigo-800 mb-3">Dicas para dormir melhor</h2>
        <div className="bg-white rounded-xl shadow-md p-4">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                <span className="text-blue-600 text-xs font-bold">1</span>
              </div>
              <p>Mantenha um horário regular de sono, mesmo nos fins de semana</p>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                <span className="text-blue-600 text-xs font-bold">2</span>
              </div>
              <p>Evite cafeína e álcool pelo menos 4-6 horas antes de dormir</p>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                <span className="text-blue-600 text-xs font-bold">3</span>
              </div>
              <p>Crie um ambiente escuro, silencioso e confortável para dormir</p>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                <span className="text-blue-600 text-xs font-bold">4</span>
              </div>
              <p>Evite telas (celular, TV, computador) pelo menos 1 hora antes de dormir</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Sleep;
