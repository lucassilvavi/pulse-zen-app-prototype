import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Bell, Moon, HelpCircle, ChevronRight, Award, BarChart2 } from 'lucide-react';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [activeTab, setActiveTab] = useState<'profile' | 'stats' | 'achievements'>('profile');
  
  // Mock user data
  const user = {
    name: 'Lucas',
    email: 'lucas@example.com',
    joinDate: 'Maio 2025',
    level: 2,
    progress: 65, // percentage to next level
    stats: {
      streak: 3,
      totalSessions: 15,
      totalMinutes: 45,
      sosUsed: 2
    }
  };
  
  // Mock achievements data
  const achievements = [
    { id: 1, title: 'Primeira Meditação', description: 'Complete sua primeira sessão de meditação', completed: true, icon: '🧘‍♂️' },
    { id: 2, title: 'Sequência de 3 Dias', description: 'Medite por 3 dias consecutivos', completed: true, icon: '🔥' },
    { id: 3, title: 'Explorador', description: 'Experimente 3 tipos diferentes de meditação', completed: true, icon: '🧭' },
    { id: 4, title: 'Sequência de 7 Dias', description: 'Medite por 7 dias consecutivos', completed: false, icon: '📅' },
    { id: 5, title: 'Mestre do Sono', description: 'Complete 5 sessões de sono', completed: false, icon: '😴' },
    { id: 6, title: 'Mente Calma', description: 'Acumule 60 minutos de meditação', completed: false, icon: '🧠' },
  ];
  
  // Mock stats data
  const weeklyStats = [
    { day: 'Dom', minutes: 10 },
    { day: 'Seg', minutes: 15 },
    { day: 'Ter', minutes: 5 },
    { day: 'Qua', minutes: 0 },
    { day: 'Qui', minutes: 8 },
    { day: 'Sex', minutes: 7 },
    { day: 'Sáb', minutes: 0 },
  ];
  
  const handleNavigateToMoodTracker = () => {
    navigate('/mood-tracker');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 pt-6 px-4 pb-20">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-indigo-900">Perfil</h1>
        <p className="text-indigo-600">Configurações e estatísticas</p>
      </header>
      
      {/* User Info */}
      <section className="mb-6">
        <div className="bg-white rounded-xl shadow-md p-5 flex items-center">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
            <User size={32} className="text-indigo-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-indigo-900">{user.name}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
            <p className="text-gray-400 text-xs">Membro desde {user.joinDate}</p>
            
            {/* Level Progress */}
            <div className="mt-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-indigo-700">Nível {user.level}</span>
                <span className="text-xs font-medium text-indigo-700">{user.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: `${user.progress}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tabs */}
      <div className="flex mb-6 bg-white rounded-lg shadow-sm">
        <button 
          className={`flex-1 py-3 text-center rounded-l-lg ${activeTab === 'profile' ? 'bg-indigo-100 text-indigo-800 font-medium' : 'text-gray-600'}`}
          onClick={() => setActiveTab('profile')}
        >
          Perfil
        </button>
        <button 
          className={`flex-1 py-3 text-center ${activeTab === 'stats' ? 'bg-indigo-100 text-indigo-800 font-medium' : 'text-gray-600'}`}
          onClick={() => setActiveTab('stats')}
        >
          Estatísticas
        </button>
        <button 
          className={`flex-1 py-3 text-center rounded-r-lg ${activeTab === 'achievements' ? 'bg-indigo-100 text-indigo-800 font-medium' : 'text-gray-600'}`}
          onClick={() => setActiveTab('achievements')}
        >
          Conquistas
        </button>
      </div>
      
      {activeTab === 'profile' && (
        <>
          {/* Stats Summary */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-indigo-800 mb-3">Suas estatísticas</h2>
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="text-gray-500 text-sm">Sequência atual</p>
                  <p className="text-xl font-bold text-indigo-700">{user.stats.streak} dias</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="text-gray-500 text-sm">Total de sessões</p>
                  <p className="text-xl font-bold text-indigo-700">{user.stats.totalSessions}</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="text-gray-500 text-sm">Minutos de prática</p>
                  <p className="text-xl font-bold text-indigo-700">{user.stats.totalMinutes}</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="text-gray-500 text-sm">Modo SOS usado</p>
                  <p className="text-xl font-bold text-indigo-700">{user.stats.sosUsed}x</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Settings */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-indigo-800 mb-3">Configurações</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center">
                  <Bell size={20} className="text-indigo-500 mr-3" />
                  <span className="text-gray-700">Notificações</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={notifications} 
                    onChange={() => setNotifications(!notifications)} 
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              
              <div className="p-4 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center">
                  <Moon size={20} className="text-indigo-500 mr-3" />
                  <span className="text-gray-700">Modo escuro</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={darkMode} 
                    onChange={() => setDarkMode(!darkMode)} 
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              
              <div 
                className="p-4 flex items-center justify-between border-b border-gray-100 cursor-pointer"
                onClick={handleNavigateToMoodTracker}
              >
                <div className="flex items-center">
                  <BarChart2 size={20} className="text-indigo-500 mr-3" />
                  <span className="text-gray-700">Rastreador de Humor</span>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
              
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <HelpCircle size={20} className="text-indigo-500 mr-3" />
                  <span className="text-gray-700">Ajuda e suporte</span>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </div>
          </section>
          
          {/* About */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-indigo-800 mb-3">Sobre</h2>
            <div className="bg-white rounded-xl shadow-md p-4">
              <p className="text-gray-600 text-sm">
                Nourish é um aplicativo dedicado ao seu bem-estar mental, oferecendo ferramentas para gerenciar ansiedade, 
                estresse e desenvolver hábitos saudáveis.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Versão 1.0.0 (Protótipo)
              </p>
            </div>
          </section>
          
          <button className="w-full py-3 text-red-500 font-medium">
            Sair
          </button>
        </>
      )}
      
      {activeTab === 'stats' && (
        <section className="bg-white rounded-xl shadow-md p-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Estatísticas Detalhadas</h3>
          
          {/* Weekly Activity */}
          <div className="mb-6">
            <h4 className="text-md font-medium text-gray-700 mb-3">Atividade Semanal</h4>
            <div className="flex justify-between items-end h-40">
              {weeklyStats.map((day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-8 bg-indigo-400 rounded-t-md"
                    style={{ 
                      height: `${day.minutes * 2}px`,
                      backgroundColor: day.minutes > 0 ? '#818cf8' : '#e5e7eb'
                    }}
                  ></div>
                  <span className="text-xs mt-1 text-gray-500">{day.day}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Session Types */}
          <div className="mb-6">
            <h4 className="text-md font-medium text-gray-700 mb-3">Tipos de Sessão</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Respiração</span>
                  <span className="text-sm text-gray-600">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Sono</span>
                  <span className="text-sm text-gray-600">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">SOS</span>
                  <span className="text-sm text-gray-600">15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Milestones */}
          <div>
            <h4 className="text-md font-medium text-gray-700 mb-3">Próximos Marcos</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Sequência de 7 dias</span>
                <span className="text-sm font-medium text-indigo-600">3/7</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">100 minutos de meditação</span>
                <span className="text-sm font-medium text-indigo-600">45/100</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Nível 3</span>
                <span className="text-sm font-medium text-indigo-600">65%</span>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {activeTab === 'achievements' && (
        <section className="bg-white rounded-xl shadow-md p-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Suas Conquistas</h3>
          
          <div className="grid grid-cols-2 gap-3">
            {achievements.map(achievement => (
              <div 
                key={achievement.id} 
                className={`p-4 rounded-lg border ${achievement.completed ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200 bg-gray-50'}`}
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <h4 className={`font-medium ${achievement.completed ? 'text-indigo-700' : 'text-gray-400'}`}>
                  {achievement.title}
                </h4>
                <p className={`text-sm ${achievement.completed ? 'text-indigo-600' : 'text-gray-400'}`}>
                  {achievement.description}
                </p>
                {achievement.completed && (
                  <div className="mt-2 inline-flex items-center px-2 py-1 rounded-full bg-indigo-100 text-xs text-indigo-800">
                    <Award size={12} className="mr-1" />
                    Conquistado
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Profile;
