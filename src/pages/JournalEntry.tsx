import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Smile, Meh, Frown, Edit3 } from 'lucide-react';

const JournalEntry: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromSOS = location.state?.fromSOS || false;
  const sosType = location.state?.sosType || null;
  
  const [mood, setMood] = useState<'good' | 'neutral' | 'bad' | null>(null);
  const [intensity, setIntensity] = useState(5);
  const [note, setNote] = useState('');
  
  const handleSave = () => {
    // In a real app, we would save the entry to a database
    navigate('/journal');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 pt-6 px-4 pb-20">
      <header className="mb-6 flex items-center">
        <button 
          onClick={() => navigate(-1)}
          className="mr-4 p-2 rounded-full bg-purple-100"
        >
          <ArrowLeft size={20} className="text-purple-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-purple-900">Novo Registro</h1>
          <p className="text-purple-600 text-sm">Como você está se sentindo?</p>
        </div>
      </header>
      
      {fromSOS && (
        <div className="bg-red-50 rounded-xl p-4 border border-red-200 mb-6">
          <p className="text-sm text-red-700">
            <strong>Após Modo SOS:</strong> Registrar como você se sente agora pode ajudar a identificar padrões e melhorar seu bem-estar.
          </p>
        </div>
      )}
      
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-purple-800 mb-4">Seu humor</h2>
        
        <div className="flex justify-between mb-6">
          <button 
            onClick={() => setMood('good')}
            className={`flex-1 py-4 flex flex-col items-center justify-center rounded-xl mr-2 ${
              mood === 'good' ? 'bg-green-100 border-2 border-green-300' : 'bg-white border border-gray-200'
            }`}
          >
            <Smile size={32} className={mood === 'good' ? 'text-green-500' : 'text-gray-400'} />
            <span className={`mt-2 font-medium ${mood === 'good' ? 'text-green-600' : 'text-gray-500'}`}>Bem</span>
          </button>
          
          <button 
            onClick={() => setMood('neutral')}
            className={`flex-1 py-4 flex flex-col items-center justify-center rounded-xl mx-2 ${
              mood === 'neutral' ? 'bg-yellow-100 border-2 border-yellow-300' : 'bg-white border border-gray-200'
            }`}
          >
            <Meh size={32} className={mood === 'neutral' ? 'text-yellow-500' : 'text-gray-400'} />
            <span className={`mt-2 font-medium ${mood === 'neutral' ? 'text-yellow-600' : 'text-gray-500'}`}>Neutro</span>
          </button>
          
          <button 
            onClick={() => setMood('bad')}
            className={`flex-1 py-4 flex flex-col items-center justify-center rounded-xl ml-2 ${
              mood === 'bad' ? 'bg-red-100 border-2 border-red-300' : 'bg-white border border-gray-200'
            }`}
          >
            <Frown size={32} className={mood === 'bad' ? 'text-red-500' : 'text-gray-400'} />
            <span className={`mt-2 font-medium ${mood === 'bad' ? 'text-red-600' : 'text-gray-500'}`}>Mal</span>
          </button>
        </div>
        
        {mood && (
          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Intensidade
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={intensity}
              onChange={(e) => setIntensity(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Leve</span>
              <span>Moderado</span>
              <span>Intenso</span>
            </div>
          </div>
        )}
        
        <div className="bg-white rounded-xl shadow-md p-4">
          <label className="block text-gray-700 text-sm font-medium mb-2 flex items-center">
            <Edit3 size={16} className="mr-2 text-purple-500" />
            Notas (opcional)
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Como foi seu dia? Aconteceu algo significativo?"
            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </section>
      
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-purple-800 mb-3">Insights da IA</h2>
        <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
          {mood ? (
            <div>
              <p className="text-indigo-700 text-sm mb-3">
                <strong>Baseado no seu registro:</strong>
              </p>
              <p className="text-indigo-600 text-sm">
                {mood === 'good' && "Que bom que você está se sentindo bem! Manter práticas regulares de mindfulness pode ajudar a sustentar esse estado positivo."}
                {mood === 'neutral' && "Estados neutros são normais e fazem parte da experiência humana. Uma prática de respiração pode ajudar a trazer mais clareza."}
                {mood === 'bad' && "Sinto muito que você não esteja se sentindo bem. Lembre-se que emoções difíceis são temporárias e você tem ferramentas para lidar com elas."}
              </p>
              
              <div className="mt-4 pt-3 border-t border-indigo-200">
                <p className="text-indigo-700 text-sm font-medium">
                  Sugestão: {mood === 'good' ? "Meditação de Gratidão (5 min)" : mood === 'neutral' ? "Respiração para Clareza (3 min)" : "Exercício de Autocompaixão (7 min)"}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-indigo-600 text-sm">
              Selecione seu humor para receber insights personalizados.
            </p>
          )}
        </div>
      </section>
      
      <button 
        onClick={handleSave}
        disabled={!mood}
        className={`w-full bg-purple-600 text-white py-4 px-6 rounded-xl flex items-center justify-center shadow-md ${
          !mood ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'
        } transition-colors`}
      >
        <span className="mr-2">Salvar registro</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default JournalEntry;
