import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react';

const OnboardingSetup: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [reminders, setReminders] = useState(true);

  const handleComplete = () => {
    // In a real app, we would save these preferences
    onComplete();
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 bg-gradient-to-b from-indigo-50 to-purple-100">
      <div className="w-full max-w-md flex flex-col items-center justify-center flex-grow">
        <h1 className="text-2xl font-bold text-indigo-900 mb-6 text-center">Configuração Inicial</h1>
        
        <div className="w-full space-y-6 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Como podemos te chamar?
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-3">
                <User size={20} className="text-gray-500" />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="flex-1 p-3 outline-none"
              />
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-md">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Lembretes diários
            </label>
            <p className="text-gray-500 text-sm mb-3">
              Podemos te enviar lembretes gentis para praticar mindfulness?
            </p>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setReminders(true)}
                className={`flex-1 py-2 px-4 rounded-lg ${
                  reminders 
                    ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300' 
                    : 'bg-gray-100 text-gray-500 border border-gray-300'
                }`}
              >
                Sim, por favor
              </button>
              <button
                onClick={() => setReminders(false)}
                className={`flex-1 py-2 px-4 rounded-lg ${
                  !reminders 
                    ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300' 
                    : 'bg-gray-100 text-gray-500 border border-gray-300'
                }`}
              >
                Agora não
              </button>
            </div>
          </div>
          
          <p className="text-center text-indigo-600 text-sm">
            Você pode alterar essas configurações a qualquer momento no seu perfil.
          </p>
        </div>
      </div>
      
      <button 
        onClick={handleComplete}
        className="w-full max-w-md bg-indigo-600 text-white py-4 px-6 rounded-xl flex items-center justify-center mt-6 shadow-md hover:bg-indigo-700 transition-colors"
      >
        <span className="mr-2">Começar agora</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default OnboardingSetup;
