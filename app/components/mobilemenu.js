'use client';

import { X, Zap, Search, TrendingUp, Grid, Users, Calendar, Compass, Menu, Settings, FileText, Mail } from 'lucide-react';
import Link from 'next/link';

export default function MobileMenu({ showMobileMenu, setShowMobileMenu, showMenu, setShowMenu }) {
  if (!showMobileMenu) return null;

  return (
    <div 
      className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
      onClick={() => setShowMobileMenu(false)}
    >
      <div 
        className="w-64 bg-gradient-to-br from-[#0047AB] to-[#002d6e] h-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-10 h-10">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="#0047AB" strokeWidth="3"/>
                  <circle cx="65" cy="25" r="8" fill="#0047AB"/>
                  <path d="M 45 35 Q 40 40 35 50 Q 30 65 40 75" stroke="#FFA75F" strokeWidth="8" fill="none" strokeLinecap="round"/>
                  <path d="M 55 30 L 70 45 L 65 50 L 50 40 Z" fill="#0047AB"/>
                  <path d="M 50 40 L 45 50 L 55 55 L 60 45 Z" fill="#0047AB"/>
                </svg>
              </div>
              <div className="text-white font-bold text-xl">
                <span>SANS</span>
                <span className="text-[#FFA75F]">Limites</span>
              </div>
            </div>
            <button 
              onClick={() => setShowMobileMenu(false)}
              className="text-white hover:bg-white/10 p-2 rounded-full"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        
        <nav className="flex-1 px-2 py-4">
          <Link href="/" className="flex items-center gap-3 py-4 px-4 text-lg text-white hover:bg-white/10 rounded-lg transition-all mb-2 font-semibold">
            <Zap size={24} />
            Accueil
          </Link>
          <a href="#" className="flex items-center gap-3 py-4 px-4 text-lg text-white/80 hover:bg-white/10 rounded-lg transition-all mb-2">
            <Search size={24} />
            Rechercher
          </a>
          <a href="#" className="flex items-center gap-3 py-4 px-4 text-lg text-white/80 hover:bg-white/10 rounded-lg transition-all mb-2">
            <TrendingUp size={24} />
            Actualités
          </a>
          <a href="#" className="flex items-center gap-3 py-4 px-4 text-lg text-white/80 hover:bg-white/10 rounded-lg transition-all mb-2">
            <Grid size={24} />
            Catégories
          </a>
          <a href="#" className="flex items-center gap-3 py-4 px-4 text-lg text-white/80 hover:bg-white/10 rounded-lg transition-all mb-2">
            <Users size={24} />
            Groupes
          </a>
          <a href="/evenements" className="flex items-center gap-3 py-4 px-4 text-lg text-white/80 hover:bg-white/10 rounded-lg transition-all mb-2">
            <Calendar size={24} />
            Évènements
          </a>
          <a href="#" className="flex items-center gap-3 py-4 px-4 text-lg text-white/80 hover:bg-white/10 rounded-lg transition-all mb-2">
            <Compass size={24} />
            Découvrir
          </a>
          
          <div className="relative mt-2">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-3 py-4 px-4 text-lg text-white/80 hover:bg-white/10 rounded-lg transition-all w-full"
            >
              <Menu size={24} />
              Autres
            </button>
            
            {showMenu && (
              <div className="mt-2 bg-white rounded-lg shadow-xl border-2 border-[#0047AB]/20 overflow-hidden">
                <a href="#" className="flex items-center gap-3 py-3 px-4 text-[#0047AB] hover:bg-[#0047AB]/10 transition-all">
                  <Settings size={20} />
                  <span>Paramètres</span>
                </a>
                <a href="#" className="flex items-center gap-3 py-3 px-4 text-[#0047AB] hover:bg-[#0047AB]/10 transition-all">
                  <FileText size={20} />
                  <span>Mentions légales</span>
                </a>
                <a href="#" className="flex items-center gap-3 py-3 px-4 text-[#0047AB] hover:bg-[#0047AB]/10 transition-all">
                  <Mail size={20} />
                  <span>Contact</span>
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}