import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Bell, Moon, HelpCircle, LogOut, Settings, ChevronRight } from 'lucide-react';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  
  // Mock user data
  const user = {
    name: 'Lucas',
    email: 'lucas@example.com',
    joinDate: 'Maio 2025',
    stats: {
      streak: 3,
      totalSessions: 15,
      totalMinutes: 45,
      sosUsed: 2
    }
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
          <div>
            <h2 className="text-lg font-semibold text-indigo-900">{user.name}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
            <p className="text-gray-400 text-xs">Membro desde {user.joinDate}</p>
          </div>
        </div>
      </section>
      
      {/* Stats */}
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
    </div>
  );
};

export default Profile;
