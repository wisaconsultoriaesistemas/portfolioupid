
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Award, ChevronDown } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span className="counter">
      {count}
      {suffix}
    </span>
  );
}

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#104c68] via-[#2d6b7f] to-[#50a898]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-16 sm:w-64 sm:h-20">
              <Image
                src="/hero_logo.svg"
                alt="Up iD Logo - Hero"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in-up">
            Transformação Digital que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Gera Resultados
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto fade-in-up">
            Especialistas em Growth Marketing e Inteligência Digital, impulsionando negócios com estratégias comprovadas e tecnologias inovadoras
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="text-center fade-in-up">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-yellow-300 mr-2" />
                <span className="text-4xl sm:text-5xl font-bold text-white">
                  <Counter end={30} suffix="+" />
                </span>
              </div>
              <p className="text-gray-200">Empresas Atendidas</p>
            </div>
            
            <div className="text-center fade-in-up">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-yellow-300 mr-2" />
                <span className="text-4xl sm:text-5xl font-bold text-white">
                  <Counter end={8} suffix="+" />
                </span>
              </div>
              <p className="text-gray-200">Segmentos Diversos</p>
            </div>
            
            <div className="text-center fade-in-up">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-yellow-300 mr-2" />
                <span className="text-4xl sm:text-5xl font-bold text-white">
                  <Counter end={4} />
                </span>
              </div>
              <p className="text-gray-200">Cases Documentados</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 fade-in-up">
            <Button
              onClick={() => scrollToSection('cases')}
              size="lg"
              className="bg-white text-[#104c68] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Ver Cases de Sucesso
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('contato')}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#104c68] px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Falar Conosco
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection('sobre')}
              className="animate-bounce text-white hover:text-yellow-300 transition-colors duration-300"
              aria-label="Rolar para baixo"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
