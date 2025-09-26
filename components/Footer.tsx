
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-4">
      <div className="container mx-auto px-6 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Vinay Gattu. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
