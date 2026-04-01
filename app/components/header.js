'use client';

import { Bell, Send, Plus, Menu } from 'lucide-react';

export default function Header({ setShowMobileMenu }) {
  return (
    <header className="bg-gradient-to-r from-[#0047AB] to-[#FFA75F] px-4 lg:px-6 py-3 lg:py-4 flex items-center justify-between sticky top-0 z-10 shadow-lg">
      <button 
        onClick={() => setShowMobileMenu(true)}
        className="lg:hidden text-white hover:bg-white/20 p-2 rounded-full transition-all"
      >
        <Menu size={26} />
      </button>
      
      <div className="lg:hidden flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-8 h-8">
            <circle cx="50" cy="50" r="48" fill="none" stroke="#0047AB" strokeWidth="3"/>
            <circle cx="65" cy="25" r="8" fill="#0047AB"/>
            <path d="M 45 35 Q 40 40 35 50 Q 30 65 40 75" stroke="#FFA75F" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <path d="M 55 30 L 70 45 L 65 50 L 50 40 Z" fill="#0047AB"/>
            <path d="M 50 40 L 45 50 L 55 55 L 60 45 Z" fill="#0047AB"/>
          </svg>
        </div>
        <span className="text-white font-bold text-lg">SL</span>
      </div>
      
      <div className="flex-1 hidden lg:block"></div>
      <div className="flex items-center gap-3 lg:gap-6">
        <div className="hidden md:flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-3 lg:px-4 py-1.5 lg:py-2">
          <div className="w-8 lg:w-10 h-8 lg:h-10 bg-white rounded-full flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-6 lg:w-8 h-6 lg:h-8">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#0047AB" strokeWidth="3"/>
              <circle cx="65" cy="25" r="8" fill="#0047AB"/>
              <path d="M 45 35 Q 40 40 35 50 Q 30 65 40 75" stroke="#FFA75F" strokeWidth="8" fill="none" strokeLinecap="round"/>
              <path d="M 55 30 L 70 45 L 65 50 L 50 40 Z" fill="#0047AB"/>
              <path d="M 50 40 L 45 50 L 55 55 L 60 45 Z" fill="#0047AB"/>
            </svg>
          </div>
          <span className="text-base lg:text-lg font-bold text-white hidden sm:inline">Mon Profil</span>
        </div>
        <button className="hover:bg-white/20 p-1.5 lg:p-2 rounded-full transition-all text-white">
          <Bell size={22} className="lg:w-[26px] lg:h-[26px]" />
        </button>
        <button className="hidden sm:block hover:bg-white/20 p-1.5 lg:p-2 rounded-full transition-all text-white">
          <Send size={22} className="lg:w-[26px] lg:h-[26px]" />
        </button>
        <button className="bg-white hover:bg-white/90 p-2 lg:p-3 rounded-full transition-all text-[#0047AB] shadow-lg">
          <Plus size={22} className="lg:w-[26px] lg:h-[26px]" strokeWidth={3} />
        </button>
      </div>
    </header>
  );
}