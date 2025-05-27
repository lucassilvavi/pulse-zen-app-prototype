import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Heart, Download, ChevronLeft, ChevronRight } from 'lucide-react';

interface Quote {
  id: string;
  text: string;
  author: string;
  backgroundImage: string;
}

const DailyInspiration: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [liked, setLiked] = useState<string[]>([]);
  
  // Mock data for quotes
  const quotes: Quote[] = [
    {
      id: 'quote1',
      text: 'A paz vem de dentro de você mesmo. Não a procure fora.',
      author: 'Buda',
      backgroundImage: 'linear-gradient(to right bottom, #ff9a9e, #fad0c4)'
    },
    {
      id: 'quote2',
      text: 'Respire. Deixe ir. E lembre-se de que este momento exato é o único que você sabe que tem com certeza.',
      author: 'Oprah Winfrey',
      backgroundImage: 'linear-gradient(to right bottom, #a18cd1, #fbc2eb)'
    },
    {
      id: 'quote3',
      text: 'A mente é tudo. O que você pensa, você se torna.',
      author: 'Buda',
      backgroundImage: 'linear-gradient(to right bottom, #84fab0, #8fd3f4)'
    },
    {
      id: 'quote4',
      text: 'Cada manhã somos nascidos de novo. O que fazemos hoje é o que mais importa.',
      author: 'Buda',
      backgroundImage: 'linear-gradient(to right bottom, #fbc2eb, #a6c1ee)'
    },
    {
      id: 'quote5',
      text: 'Viva o momento presente e faça-o tão bonito que valha a pena ser lembrado.',
      author: 'Ido Portal',
      backgroundImage: 'linear-gradient(to right bottom, #a1c4fd, #c2e9fb)'
    },
    {
      id: 'quote6',
      text: 'A felicidade não é algo pronto. Ela vem de suas próprias ações.',
      author: 'Dalai Lama',
      backgroundImage: 'linear-gradient(to right bottom, #d4fc79, #96e6a1)'
    },
    {
      id: 'quote7',
      text: 'Sua paz interior é o maior presente que você pode dar a si mesmo e ao mundo.',
      author: 'Amit Ray',
      backgroundImage: 'linear-gradient(to right bottom, #f6d365, #fda085)'
    }
  ];
  
  const currentQuote = quotes[currentQuoteIndex];
  
  const handlePrevious = () => {
    setCurrentQuoteIndex(prev => (prev === 0 ? quotes.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentQuoteIndex(prev => (prev === quotes.length - 1 ? 0 : prev + 1));
  };
  
  const handleLike = (quoteId: string) => {
    if (liked.includes(quoteId)) {
      setLiked(prev => prev.filter(id => id !== quoteId));
    } else {
      setLiked(prev => [...prev, quoteId]);
    }
  };
  
  const handleShare = () => {
    // In a real app, this would open a share dialog
    alert(`Compartilhando: "${currentQuote.text}" - ${currentQuote.author}`);
  };
  
  const handleSave = () => {
    // In a real app, this would save the image to the device
    alert('Imagem salva na galeria');
  };
  
  const handleBack = () => {
    navigate('/home');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <button 
          className="p-2 rounded-full hover:bg-white/20"
          onClick={handleBack}
        >
          <ArrowLeft size={24} className="text-indigo-900" />
        </button>
        <h1 className="text-xl font-bold text-indigo-900">Inspiração Diária</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </header>
      
      {/* Quote Card */}
      <div className="px-4 py-6">
        <div 
          className="relative rounded-2xl shadow-lg overflow-hidden aspect-square flex items-center justify-center p-8"
          style={{ background: currentQuote.backgroundImage }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full"
            onClick={handlePrevious}
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full"
            onClick={handleNext}
          >
            <ChevronRight size={24} className="text-white" />
          </button>
          
          {/* Quote Content */}
          <div className="relative text-center text-white">
            <p className="text-2xl font-bold mb-6 leading-relaxed">"{currentQuote.text}"</p>
            <p className="text-lg">— {currentQuote.author}</p>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-center space-x-8 p-4">
        <button 
          className="flex flex-col items-center"
          onClick={() => handleLike(currentQuote.id)}
        >
          <div className={`p-3 rounded-full ${liked.includes(currentQuote.id) ? 'bg-red-100' : 'bg-white'}`}>
            <Heart 
              size={24} 
              className={liked.includes(currentQuote.id) ? 'text-red-500 fill-red-500' : 'text-gray-500'} 
            />
          </div>
          <span className="text-sm text-gray-700 mt-1">Curtir</span>
        </button>
        
        <button 
          className="flex flex-col items-center"
          onClick={handleShare}
        >
          <div className="p-3 rounded-full bg-white">
            <Share2 size={24} className="text-indigo-600" />
          </div>
          <span className="text-sm text-gray-700 mt-1">Compartilhar</span>
        </button>
        
        <button 
          className="flex flex-col items-center"
          onClick={handleSave}
        >
          <div className="p-3 rounded-full bg-white">
            <Download size={24} className="text-indigo-600" />
          </div>
          <span className="text-sm text-gray-700 mt-1">Salvar</span>
        </button>
      </div>
      
      {/* Quote Navigation Indicator */}
      <div className="flex justify-center mt-4">
        {quotes.map((_, index) => (
          <div 
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${index === currentQuoteIndex ? 'bg-indigo-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentQuoteIndex(index)}
          ></div>
        ))}
      </div>
      
      {/* Saved Quotes Section */}
      {liked.length > 0 && (
        <section className="p-4 mt-6">
          <h2 className="text-lg font-semibold text-indigo-800 mb-3">Suas Citações Favoritas</h2>
          <div className="space-y-3">
            {quotes.filter(quote => liked.includes(quote.id)).map(quote => (
              <div 
                key={quote.id}
                className="bg-white rounded-xl shadow-md p-4"
              >
                <p className="text-gray-800 font-medium mb-2">"{quote.text}"</p>
                <p className="text-gray-600 text-sm">— {quote.author}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default DailyInspiration;
