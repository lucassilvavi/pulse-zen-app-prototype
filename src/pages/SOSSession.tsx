import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';

const SOSSession: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  
  // Get the type of SOS session from location state
  const sosType = location.state?.type || 'anxiety';
  
  // Timer for breathing exercise
  useEffect(() => {
    const timer = setInterval(() => {
      if (step === 2) { // Only run timer during breathing exercise
        setSeconds(prev => {
          const newSeconds = prev + 1;
          
          // Change breath phase every few seconds
          if (newSeconds % 12 === 0) {
            setBreathPhase('inhale');
          } else if (newSeconds % 12 === 4) {
            setBreathPhase('hold');
          } else if (newSeconds % 12 === 6) {
            setBreathPhase('exhale');
          }
          
          return newSeconds;
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [step]);
  
  // Auto-advance steps
  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => setStep(2), 5000);
      return () => clearTimeout(timer);
    }
    
    if (step === 2 && seconds >= 60) {
      setStep(3);
    }
  }, [step, seconds]);
  
  const handleComplete = () => {
    navigate('/journal/entry', { state: { fromSOS: true, sosType } });
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center">
        <button 
          onClick={() => navigate(-1)}
          className="mr-4 p-2 rounded-full bg-gray-800"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-xl font-bold">Modo SOS</h1>
          <div className="flex items-center text-gray-400 text-sm">
            <Clock size={14} className="mr-1" />
            <span>{Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}</span>
          </div>
        </div>
      </header>
      
      {/* Content based on current step */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {step === 1 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Vamos começar</h2>
            <p className="text-gray-300 mb-8">
              Encontre um lugar tranquilo e confortável. Vamos focar na sua respiração.
            </p>
            <div className="animate-pulse text-xl">Preparando...</div>
          </div>
        )}
        
        {step === 2 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Respire comigo</h2>
            
            <div className="relative mb-8">
              <div 
                className={`w-48 h-48 rounded-full mx-auto flex items-center justify-center transition-all duration-1000 ease-in-out ${
                  breathPhase === 'inhale' ? 'scale-100 bg-blue-900' : 
                  breathPhase === 'hold' ? 'scale-110 bg-blue-800' : 
                  'scale-90 bg-blue-900'
                }`}
              >
                <div 
                  className={`w-40 h-40 rounded-full bg-gray-900 flex items-center justify-center transition-all duration-1000 ease-in-out ${
                    breathPhase === 'inhale' ? 'scale-90' : 
                    breathPhase === 'hold' ? 'scale-90' : 
                    'scale-100'
                  }`}
                >
                  <span className="text-xl font-medium">
                    {breathPhase === 'inhale' ? 'Inspire' : 
                     breathPhase === 'hold' ? 'Segure' : 
                     'Expire'}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300">
              {breathPhase === 'inhale' ? 'Inspire lentamente pelo nariz' : 
               breathPhase === 'hold' ? 'Segure o ar por um momento' : 
               'Expire lentamente pela boca'}
            </p>
          </div>
        )}
        
        {step === 3 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Como você está se sentindo?</h2>
            <p className="text-gray-300 mb-8">
              Espero que esteja se sentindo um pouco melhor. Lembre-se que está tudo bem não estar bem.
            </p>
            <p className="text-gray-300 mb-8">
              Gostaria de registrar como você está se sentindo agora no seu diário emocional?
            </p>
            <div className="space-y-4">
              <button 
                onClick={handleComplete}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl"
              >
                Sim, registrar no diário
              </button>
              <button 
                onClick={() => navigate('/home')}
                className="w-full bg-gray-800 text-white py-4 px-6 rounded-xl"
              >
                Não, voltar para home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SOSSession;
