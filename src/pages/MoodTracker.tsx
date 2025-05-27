import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Save } from 'lucide-react';

interface MoodEntry {
  id: string;
  date: Date;
  mood: 'great' | 'good' | 'okay' | 'bad' | 'awful';
  activities: string[];
  notes: string;
}

const MoodTracker: React.FC = () => {
  const navigate = useNavigate();
  const [currentMood, setCurrentMood] = useState<MoodEntry['mood'] | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [moodHistory, setMoodHistory] = useState<MoodEntry[]>([
    {
      id: '1',
      date: new Date(Date.now() - 86400000 * 2), // 2 days ago
      mood: 'good',
      activities: ['Exercício', 'Meditação'],
      notes: 'Dia produtivo, me senti bem após a meditação matinal.'
    },
    {
      id: '2',
      date: new Date(Date.now() - 86400000), // 1 day ago
      mood: 'great',
      activities: ['Natureza', 'Amigos', 'Boa alimentação'],
      notes: 'Passeio no parque com amigos, clima perfeito!'
    }
  ]);
  
  // Activities options
  const activityOptions = [
    'Exercício', 'Meditação', 'Boa alimentação', 'Sono adequado', 
    'Natureza', 'Amigos', 'Família', 'Trabalho', 'Estudo',
    'Leitura', 'Música', 'Arte', 'Descanso'
  ];
  
  const handleMoodSelect = (mood: MoodEntry['mood']) => {
    setCurrentMood(mood);
  };
  
  const handleActivityToggle = (activity: string) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(prev => prev.filter(a => a !== activity));
    } else {
      setSelectedActivities(prev => [...prev, activity]);
    }
  };
  
  const handleSaveMood = () => {
    if (!currentMood) return;
    
    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      date: new Date(),
      mood: currentMood,
      activities: selectedActivities,
      notes
    };
    
    setMoodHistory(prev => [newEntry, ...prev]);
    
    // Reset form
    setCurrentMood(null);
    setSelectedActivities([]);
    setNotes('');
    
    // Show success message
    alert('Humor registrado com sucesso!');
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  };
  
  const getMoodEmoji = (mood: MoodEntry['mood']) => {
    switch (mood) {
      case 'great': return '😄';
      case 'good': return '🙂';
      case 'okay': return '😐';
      case 'bad': return '😔';
      case 'awful': return '😢';
    }
  };
  
  const getMoodColor = (mood: MoodEntry['mood']) => {
    switch (mood) {
      case 'great': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'okay': return 'bg-yellow-100 text-yellow-800';
      case 'bad': return 'bg-orange-100 text-orange-800';
      case 'awful': return 'bg-red-100 text-red-800';
    }
  };
  
  const getMoodText = (mood: MoodEntry['mood']) => {
    switch (mood) {
      case 'great': return 'Ótimo';
      case 'good': return 'Bom';
      case 'okay': return 'Neutro';
      case 'bad': return 'Ruim';
      case 'awful': return 'Péssimo';
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 pt-6 px-4 pb-20">
      {/* Header */}
      <header className="mb-6 flex items-center">
        <button 
          className="p-2 rounded-full hover:bg-white/20 mr-2"
          onClick={() => navigate('/home')}
        >
          <ArrowLeft size={24} className="text-indigo-900" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-indigo-900">Rastreador de Humor</h1>
          <p className="text-indigo-600">Acompanhe como você se sente</p>
        </div>
      </header>
      
      {/* Current Mood Section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-indigo-800 mb-3">Como você está se sentindo hoje?</h2>
        
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
          <div className="flex justify-between mb-4">
            <button 
              className={`flex flex-col items-center justify-center p-3 rounded-lg ${currentMood === 'great' ? 'bg-green-100' : 'bg-gray-50'}`}
              onClick={() => handleMoodSelect('great')}
            >
              <span className="text-3xl mb-1">😄</span>
              <span className="text-xs">Ótimo</span>
            </button>
            
            <button 
              className={`flex flex-col items-center justify-center p-3 rounded-lg ${currentMood === 'good' ? 'bg-blue-100' : 'bg-gray-50'}`}
              onClick={() => handleMoodSelect('good')}
            >
              <span className="text-3xl mb-1">🙂</span>
              <span className="text-xs">Bom</span>
            </button>
            
            <button 
              className={`flex flex-col items-center justify-center p-3 rounded-lg ${currentMood === 'okay' ? 'bg-yellow-100' : 'bg-gray-50'}`}
              onClick={() => handleMoodSelect('okay')}
            >
              <span className="text-3xl mb-1">😐</span>
              <span className="text-xs">Neutro</span>
            </button>
            
            <button 
              className={`flex flex-col items-center justify-center p-3 rounded-lg ${currentMood === 'bad' ? 'bg-orange-100' : 'bg-gray-50'}`}
              onClick={() => handleMoodSelect('bad')}
            >
              <span className="text-3xl mb-1">😔</span>
              <span className="text-xs">Ruim</span>
            </button>
            
            <button 
              className={`flex flex-col items-center justify-center p-3 rounded-lg ${currentMood === 'awful' ? 'bg-red-100' : 'bg-gray-50'}`}
              onClick={() => handleMoodSelect('awful')}
            >
              <span className="text-3xl mb-1">😢</span>
              <span className="text-xs">Péssimo</span>
            </button>
          </div>
          
          {currentMood && (
            <>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">O que você fez hoje? (opcional)</h3>
                <div className="flex flex-wrap gap-2">
                  {activityOptions.map(activity => (
                    <button
                      key={activity}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedActivities.includes(activity) 
                          ? 'bg-indigo-100 text-indigo-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                      onClick={() => handleActivityToggle(activity)}
                    >
                      {activity}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Notas (opcional)</h3>
                <textarea
                  className="w-full p-3 border border-gray-200 rounded-lg"
                  rows={3}
                  placeholder="Como foi seu dia? O que você está sentindo?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>
              
              <button
                className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium flex items-center justify-center"
                onClick={handleSaveMood}
              >
                <Save size={18} className="mr-2" />
                Salvar registro
              </button>
            </>
          )}
        </div>
      </section>
      
      {/* Mood History */}
      <section>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-indigo-800">Histórico de Humor</h2>
          <button className="text-indigo-600 text-sm font-medium flex items-center">
            <Calendar size={16} className="mr-1" />
            Ver calendário
          </button>
        </div>
        
        <div className="space-y-3">
          {moodHistory.map(entry => (
            <div key={entry.id} className="bg-white rounded-xl shadow-md p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-gray-500 text-sm">{formatDate(entry.date)}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xl mr-2">{getMoodEmoji(entry.mood)}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${getMoodColor(entry.mood)}`}>
                      {getMoodText(entry.mood)}
                    </span>
                  </div>
                </div>
              </div>
              
              {entry.activities.length > 0 && (
                <div className="mb-2">
                  <div className="flex flex-wrap gap-1 mt-2">
                    {entry.activities.map(activity => (
                      <span 
                        key={activity} 
                        className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full text-xs"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {entry.notes && (
                <p className="text-gray-700 text-sm">{entry.notes}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MoodTracker;
