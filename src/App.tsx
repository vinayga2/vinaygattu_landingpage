import React from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-200 bg-slate-900">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <ProfileCard />
      </main>
      <Footer />
    </div>
  );
};

export default App;
