
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-10 sm:w-40 sm:h-12">
              <Image
                src="/header_logo.svg"
                alt="Up iD Logo - Navegação"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-[#104c68] transition-colors duration-200"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-[#104c68] transition-colors duration-200"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('cases')}
              className="text-gray-700 hover:text-[#104c68] transition-colors duration-200"
            >
              Cases
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-[#104c68] transition-colors duration-200"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection('cases')}
              className="bg-[#104c68] hover:bg-[#50a898] text-white px-6 py-2 rounded-full transition-colors duration-300"
            >
              Ver Cases
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="block px-3 py-2 text-gray-700 hover:text-[#104c68] transition-colors duration-200 w-full text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block px-3 py-2 text-gray-700 hover:text-[#104c68] transition-colors duration-200 w-full text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('cases')}
                className="block px-3 py-2 text-gray-700 hover:text-[#104c68] transition-colors duration-200 w-full text-left"
              >
                Cases
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block px-3 py-2 text-gray-700 hover:text-[#104c68] transition-colors duration-200 w-full text-left"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
