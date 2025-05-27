import React, { useState, useEffect, use } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Pause, Play, SkipBack, Volume2, Moon } from 'lucide-react';

interface SleepOption {
  id: string;
  title: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
  type: 'story' | 'sound' | 'meditation';
}

const SleepSession: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { option } = location.state as { option: SleepOption };
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);

    // Convert duration string to seconds for progress calculation
  const getDurationInSeconds = (durationStr: string): number => {
    const minutes = parseInt(durationStr.split(' ')[0], 10);
    return minutes * 60;
  };
  
  const totalDuration = getDurationInSeconds(option.duration);
  
  // Format time as MM:SS
  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  // Simulate progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentTime < totalDuration) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev < totalDuration) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentTime, totalDuration]);
  
  // Calculate progress percentage
  const progressPercentage = (currentTime / totalDuration) * 100;
  
  // Handle play/pause toggle
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  // Handle restart
  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };
  
  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value, 10));
  };
  
  // Handle back navigation
  const handleBack = () => {
    navigate('/sleep');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center">
        <button 
          className="p-2 rounded-full hover:bg-white/10"
          onClick={handleBack}
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Dormir</h1>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-between p-6">
        {/* Title and Description */}
        <div className="text-center mb-8 mt-8">
          <div className="bg-indigo-800/50 p-4 rounded-full inline-block mb-4">
            {option.type === 'story' ? (
              <span className="text-4xl">📖</span>
            ) : option.type === 'sound' ? (
              <span className="text-4xl">🎵</span>
            ) : (
              <Moon size={48} className="text-indigo-300" />
            )}
          </div>
          <h2 className="text-2xl font-bold mb-2">{option.title}</h2>
          <p className="text-indigo-200">{option.description}</p>
        </div>
        
        {/* Visualization */}
        <div className="w-full max-w-md h-40 bg-indigo-800/30 rounded-xl mb-8 flex items-center justify-center overflow-hidden">
          {/* Animated wave visualization */}
          <div className="relative w-full h-full">
            <div className={`absolute inset-0 flex items-center justify-center ${isPlaying ? 'opacity-100' : 'opacity-50'}`}>
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={i}
                  className={`mx-0.5 bg-indigo-400 rounded-full ${isPlaying ? 'animate-pulse' : ''}`}
                  style={{ 
                    height: `${Math.random() * 60 + 20}%`,
                    width: '4px',
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${Math.random() * 1 + 1}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="w-full max-w-md">
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="h-1 w-full bg-indigo-800/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-400 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm mt-1 text-indigo-200">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(totalDuration)}</span>
            </div>
          </div>
          
          {/* Playback Controls */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <button 
              className="p-3 rounded-full hover:bg-white/10"
              onClick={handleRestart}
            >
              <SkipBack size={24} />
            </button>
            <button 
              className="p-4 bg-indigo-500 rounded-full hover:bg-indigo-400"
              onClick={togglePlayPause}
            >
              {isPlaying ? <Pause size={32} /> : <Play size={32} />}
            </button>
          </div>
          
          {/* Volume Control */}
          <div className="flex items-center space-x-4">
            <Volume2 size={20} className="text-indigo-300" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full h-2 bg-indigo-800/50 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #818cf8 0%, #818cf8 ${volume}%, rgba(99, 102, 241, 0.3) ${volume}%, rgba(99, 102, 241, 0.3) 100%)`
              }}
            />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="p-6 text-center text-indigo-300 text-sm">
        <p>Respire profundamente e relaxe. Boa noite.</p>
      </footer>
    </div>
  );
};

export default SleepSession;
