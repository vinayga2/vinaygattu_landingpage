import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/70 backdrop-blur-md sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-cyan-400 tracking-wider">
            Vinay Gattu
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
