import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';

const BreathingSession: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [isComplete, setIsComplete] = useState(false);
  
  // Get session parameters from location state
  const technique = location.state?.technique || 'basic';
  const duration = location.state?.duration || 5; // minutes
  
  // Convert duration to seconds for the timer
  const totalSeconds = duration * 60;
  
  // Timer for breathing exercise
  useEffect(() => {
    if (isComplete) return;
    
    const timer = setInterval(() => {
      setSeconds(prev => {
        const newSeconds = prev + 1;
        
        // Change breath phase based on technique
        if (technique === 'basic') {
          if (newSeconds % 8 === 0) {
            setBreathPhase('inhale');
          } else if (newSeconds % 8 === 4) {
            setBreathPhase('exhale');
          }
        } else if (technique === 'square') {
          if (newSeconds % 16 === 0) {
            setBreathPhase('inhale');
          } else if (newSeconds % 16 === 4) {
            setBreathPhase('hold');
          } else if (newSeconds % 16 === 8) {
            setBreathPhase('exhale');
          } else if (newSeconds % 16 === 12) {
            setBreathPhase('hold');
          }
        } else if (technique === '478') {
          if (newSeconds % 19 === 0) {
            setBreathPhase('inhale');
          } else if (newSeconds % 19 === 4) {
            setBreathPhase('hold');
          } else if (newSeconds % 19 === 11) {
            setBreathPhase('exhale');
          }
        }
        
        // Check if session is complete
        if (newSeconds >= totalSeconds) {
          setIsComplete(true);
          clearInterval(timer);
        }
        
        return newSeconds;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [technique, totalSeconds, isComplete]);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  const getBreathInstructions = () => {
    if (breathPhase === 'inhale') return 'Inspire lentamente pelo nariz';
    if (breathPhase === 'hold') return 'Segure o ar por um momento';
    return 'Expire lentamente pela boca';
  };
  
  const handleComplete = () => {
    navigate('/journal/entry', { state: { fromBreathing: true } });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center">
        <button 
          onClick={() => navigate(-1)}
          className="mr-4 p-2 rounded-full bg-blue-100"
        >
          <ArrowLeft size={20} className="text-blue-600" />
        </button>
        <div>
          <h1 className="text-blue-900">Respiração Guiada</h1>
          <div className="flex items-center text-blue-600 text-sm">
            <Clock size={14} className="mr-1" />
            <span>
              {isComplete ? 
                `${duration}:00` : 
                `${formatTime(seconds)} / ${duration}:00`}
            </span>
          </div>
        </div>
      </header>
      
      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {!isComplete ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Respire comigo</h2>
            
            <div className="relative mb-8">
              <div 
                className={`w-48 h-48 rounded-full mx-auto flex items-center justify-center transition-all duration-1000 ease-in-out animate-breathe ${
                  breathPhase === 'inhale' ? 'scale-100 bg-blue-400' : 
                  breathPhase === 'hold' ? 'scale-110 bg-blue-500' : 
                  'scale-90 bg-blue-400'
                }`}
              >
                <div 
                  className={`w-40 h-40 rounded-full bg-white flex items-center justify-center transition-all duration-1000 ease-in-out ${
                    breathPhase === 'inhale' ? 'scale-90' : 
                    breathPhase === 'hold' ? 'scale-90' : 
                    'scale-100'
                  }`}
                >
                  <span className="text-xl font-medium text-blue-700">
                    {breathPhase === 'inhale' ? 'Inspire' : 
                     breathPhase === 'hold' ? 'Segure' : 
                     'Expire'}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-blue-700">
              {getBreathInstructions()}
            </p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Prática Concluída</h2>
            <p className="text-blue-700 mb-8">
              Parabéns! Você completou {duration} minutos de respiração guiada.
            </p>
            <p className="text-blue-700 mb-8">
              Como você está se sentindo agora?
            </p>
            <div className="space-y-4">
              <button 
                onClick={handleComplete}
                className="w-full btn-primary"
              >
                Registrar no diário
              </button>
              <button 
                onClick={() => navigate('/home')}
                className="w-full btn-secondary"
              >
                Voltar para home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreathingSession;
