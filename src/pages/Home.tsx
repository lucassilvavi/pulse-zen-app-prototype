import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Moon, Brain, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const userName = "Lucas"; // In a real app, this would come from state/context
  
  // Get current date in Portuguese format
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = today.toLocaleDateString('pt-BR', options);
  
  // Capitalize first letter
  const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  
  // Mock data for daily suggestion
  const dailySuggestion = {
    title: "Respiração para foco",
    duration: "5 minutos",
    description: "Ideal para começar o dia com clareza mental"
  };
  
  // Mock data for streak
  const streak = {
    current: 3,
    total: 15,
    minutes: 45
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 pt-6 px-4">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-indigo-900">Olá, {userName}</h1>
        <p className="text-indigo-600">{capitalizedDate}</p>
      </header>
      
      {/* Daily Suggestion */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-indigo-800 mb-3">Sugestão do dia</h2>
        <div 
          className="bg-white rounded-xl shadow-md p-4"
          onClick={() => navigate('/breathing')}
        >
          <div className="flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full mr-3">
              <Brain size={24} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="font-medium text-indigo-700">{dailySuggestion.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <Clock size={14} className="mr-1" />
                <span>{dailySuggestion.duration}</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{dailySuggestion.description}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Access */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-indigo-800 mb-3">Acesso rápido</h2>
        <div className="grid grid-cols-2 gap-3">
          <div 
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center"
            onClick={() => navigate('/breathing')}
          >
            <div className="bg-blue-100 p-3 rounded-full mb-2">
              <Activity size={24} className="text-blue-600" />
            </div>
            <span className="text-blue-700 font-medium">Respiração</span>
          </div>
          
          <div 
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center"
            onClick={() => navigate('/sos')}
          >
            <div className="bg-red-100 p-3 rounded-full mb-2">
              <span className="text-red-600 font-bold">SOS</span>
            </div>
            <span className="text-red-700 font-medium">Modo Emergência</span>
          </div>
          
          <div 
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center"
            onClick={() => navigate('/journal')}
          >
            <div className="bg-purple-100 p-3 rounded-full mb-2">
              <span className="text-purple-600 font-bold">📝</span>
            </div>
            <span className="text-purple-700 font-medium">Diário</span>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center">
            <div className="bg-indigo-100 p-3 rounded-full mb-2">
              <Moon size={24} className="text-indigo-600" />
            </div>
            <span className="text-indigo-700 font-medium">Dormir</span>
          </div>
        </div>
      </section>
      
      {/* Streak */}
      <section>
        <h2 className="text-lg font-semibold text-indigo-800 mb-3">Seu progresso</h2>
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">Sequência atual</p>
              <p className="text-2xl font-bold text-indigo-700">{streak.current} dias</p>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div>
              <p className="text-gray-600 text-sm">Total de sessões</p>
              <p className="text-2xl font-bold text-indigo-700">{streak.total}</p>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div>
              <p className="text-gray-600 text-sm">Minutos</p>
              <p className="text-2xl font-bold text-indigo-700">{streak.minutes}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
