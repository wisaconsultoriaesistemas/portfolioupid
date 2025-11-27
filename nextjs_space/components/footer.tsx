
'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#104c68] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="relative w-40 h-12 mb-4">
              <Image
                src="/footer_logo.svg"
                alt="Up iD Logo - Footer"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Especialistas em transformação digital e growth marketing, 
              impulsionando negócios com tecnologia e estratégia.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[#50a898]" />
                <span className="text-sm">contato@upid.tec.br</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#50a898]" />
                <span className="text-sm">+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[#50a898]" />
                <span className="text-sm">Atendimento Nacional</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Cases de Sucesso
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Growth Marketing</li>
              <li>Transformação Digital</li>
              <li>Implantação de Sistemas</li>
              <li>Consultoria Empresarial</li>
              <li>Automação de Processos</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                © 2024 Up iD - Up Inteligência Digital. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-[#50a898] font-semibold">
                William Silva – Especialista Growth Marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
