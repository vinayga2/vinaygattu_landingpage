
import React from 'react';
import SocialLink from './SocialLink';
import { SOCIAL_LINKS } from '../constants';

const ProfileCard: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-800/50 rounded-2xl shadow-2xl shadow-cyan-500/10 backdrop-blur-xl border border-slate-700 overflow-hidden transform transition-all duration-500 hover:scale-105">
      <div className="p-8 text-center">
        <div className="mb-6">
          <img
            className="w-32 h-32 rounded-full mx-auto ring-4 ring-cyan-500/50 shadow-lg"
            src="https://picsum.photos/seed/vinaygattu/256/256"
            alt="Profile photo of Vinay Gattu"
          />
        </div>
        <h1 className="text-3xl font-bold text-slate-50 mb-1">
          Vinay Gattu
        </h1>
        <h2 className="text-lg text-cyan-400 font-medium mb-4">
          Software Engineer | Frontend Specialist
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          Passionate about crafting beautiful, intuitive, and performant web experiences. Turning complex problems into elegant solutions with modern technology.
        </p>
        <div className="text-slate-400 text-sm font-mono bg-slate-900/50 rounded-md p-2 inline-block mb-8">
            knowvinaygattu@gattus.com
        </div>
        
        <div className="flex items-center justify-center space-x-5">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink key={link.name} href={link.url} ariaLabel={`Link to Vinay Gattu's ${link.name}`}>
              {link.icon}
            </SocialLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
