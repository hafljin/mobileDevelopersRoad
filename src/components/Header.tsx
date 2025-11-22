
import React from 'react';
import type { User } from '../types';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const { rank, exp } = user;
  const progressPercentage = Math.max(0, Math.min(100, ((exp - rank.minExp) / (rank.maxExp - rank.minExp)) * 100));

  return (
    <header className="sticky top-0 z-10 bg-navy-medium/80 backdrop-blur-sm border-b border-border-color p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-baseline space-x-2">
            <span className="text-lg font-bold text-accent-orange">{rank.name}</span>
            <span className="text-md font-semibold text-text-primary">{user.name}</span>
          </div>
          <span className="text-sm text-text-secondary font-mono">
            {exp} / {rank.maxExp} EXP
          </span>
        </div>
        <div className="w-full bg-navy-light rounded-full h-2.5">
          <div
            className="bg-accent-orange h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
