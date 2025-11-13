
import React from 'react';
import { Home, User, BarChart, Bot } from './icons';

interface BottomNavProps {
  onAiTutorClick: () => void;
}

const NavItem: React.FC<{ icon: React.ElementType; label: string; active?: boolean }> = ({ icon: Icon, label, active }) => (
  <button className={`flex flex-col items-center justify-center w-full transition-colors duration-200 ${active ? 'text-accent-orange' : 'text-text-secondary hover:text-text-primary'}`}>
    <Icon className="w-6 h-6 mb-1" />
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ onAiTutorClick }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 bg-navy-medium/80 backdrop-blur-sm border-t border-border-color">
      <div className="max-w-4xl mx-auto h-20 px-4 flex items-center justify-around">
        <NavItem icon={Home} label="Home" active />
        <NavItem icon={User} label="MyPage" />
        
        <div className="relative -top-6">
            <button 
                onClick={onAiTutorClick}
                className="bg-accent-orange text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-accent-orange/30 transform hover:scale-105 hover:bg-accent-orange-hover transition-all duration-300 ease-in-out"
                aria-label="AI Tutor"
            >
                <Bot className="w-8 h-8"/>
            </button>
        </div>

        <NavItem icon={BarChart} label="Ranking" />
        <NavItem icon={User} label="Settings" />
      </div>
    </footer>
  );
};

export default BottomNav;
