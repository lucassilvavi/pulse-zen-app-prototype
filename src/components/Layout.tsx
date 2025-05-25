import React from 'react';
import type { ReactNode } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Activity, LifeBuoy, Book, User } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;
  
  // Don't show navigation on onboarding screens
  const isOnboarding = path.includes('/onboarding');
  
  if (isOnboarding) {
    return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <main className="pb-20">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl">
        <div className="flex justify-around items-center h-16">
          <Link to="/home" className={`flex flex-col items-center justify-center w-1/5 ${path === '/home' ? 'text-indigo-600' : 'text-gray-500'}`}>
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/breathing" className={`flex flex-col items-center justify-center w-1/5 ${path === '/breathing' ? 'text-indigo-600' : 'text-gray-500'}`}>
            <Activity size={24} />
            <span className="text-xs mt-1">Respirar</span>
          </Link>
          <Link to="/sos" className={`flex flex-col items-center justify-center w-1/5 ${path === '/sos' ? 'text-indigo-600' : 'text-gray-500'}`}>
            <div className="bg-red-500 rounded-full p-3 -mt-5 shadow-lg">
              <LifeBuoy size={24} className="text-white" />
            </div>
          </Link>
          <Link to="/journal" className={`flex flex-col items-center justify-center w-1/5 ${path === '/journal' ? 'text-indigo-600' : 'text-gray-500'}`}>
            <Book size={24} />
            <span className="text-xs mt-1">Diário</span>
          </Link>
          <Link to="/profile" className={`flex flex-col items-center justify-center w-1/5 ${path === '/profile' ? 'text-indigo-600' : 'text-gray-500'}`}>
            <User size={24} />
            <span className="text-xs mt-1">Perfil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Layout;