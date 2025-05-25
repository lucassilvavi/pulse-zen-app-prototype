import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

const Journal: React.FC = () => {
  const navigate = useNavigate();
  
  // Mock journal entries
  const journalEntries = [
    {
      id: 1,
      date: '23 de maio',
      mood: 'Calmo',
      moodEmoji: '😌',
      highlight: 'Pratiquei respiração por 5 minutos',
      preview: 'Hoje foi um dia tranquilo. Consegui praticar a respiração guiada...'
    },
    {
      id: 2,
      date: '22 de maio',
      mood: 'Ansioso',
      moodEmoji: '😰',
      highlight: 'Usei o modo SOS',
      preview: 'Tive um momento de ansiedade antes da reunião, mas o modo SOS ajudou...'
    },
    {
      id: 3,
      date: '20 de maio',
      mood: 'Feliz',
      moodEmoji: '😊',
      highlight: 'Meditação matinal',
      preview: 'Acordei cedo e fiz uma meditação. Me senti energizado o dia todo...'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 pt-6 px-4 pb-20">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-purple-900">Diário Emocional</h1>
          <p className="text-purple-600 text-sm">Registre e acompanhe seu bem-estar</p>
        </div>
        <button 
          onClick={() => navigate('/journal/entry')}
          className="bg-purple-600 text-white p-3 rounded-full shadow-md"
        >
          <span className="text-xl font-bold">+</span>
        </button>
      </header>
      
      <section className="mb-6">
        <h2 className="text-lg font-semibold text-purple-800 mb-3">Insights da Semana</h2>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-gray-700 mb-3">
            Baseado nos seus registros, notamos que:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-full mr-2 mt-0.5">
                <span className="text-purple-600 text-xs">✓</span>
              </div>
              <p className="text-gray-600 text-sm">
                Você tende a se sentir mais calmo nas manhãs após praticar respiração.
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-full mr-2 mt-0.5">
                <span className="text-purple-600 text-xs">✓</span>
              </div>
              <p className="text-gray-600 text-sm">
                Momentos de ansiedade ocorrem mais frequentemente antes de reuniões.
              </p>
            </li>
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-purple-700 text-sm font-medium">
              Sugestão: Experimente uma sessão curta de respiração antes de reuniões importantes.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-lg font-semibold text-purple-800 mb-3">Seus Registros</h2>
        <div className="space-y-3">
          {journalEntries.map(entry => (
            <div 
              key={entry.id}
              className="bg-white rounded-xl shadow-md p-4"
              onClick={() => navigate(`/journal/entry?id=${entry.id}`)}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-full mr-2">
                    <span className="text-xl">{entry.moodEmoji}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-purple-700">{entry.mood}</h3>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar size={12} className="mr-1" />
                      <span>{entry.date}</span>
                    </div>
                  </div>
                </div>
                <span className="text-purple-600 text-xs font-medium px-2 py-1 bg-purple-50 rounded-full">
                  {entry.highlight}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{entry.preview}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Journal;
