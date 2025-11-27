
'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  Lightbulb, 
  Target, 
  Rocket, 
  TrendingUp, 
  Settings, 
  Users,
  Award,
  CheckCircle
} from 'lucide-react';

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Growth Marketing',
      description: 'Estratégias data-driven para acelerar o crescimento do seu negócio'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Implantação de Sistemas',
      description: 'ERP, SaaS e automação comercial para otimizar processos'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Consultoria Empresarial',
      description: 'Reestruturação e otimização de processos organizacionais'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Transformação Digital',
      description: 'Modernização completa com foco em resultados mensuráveis'
    }
  ];

  const values = [
    'Foco em resultados mensuráveis',
    'Tecnologia como ferramenta estratégica',
    'Atendimento personalizado',
    'Crescimento sustentável',
    'Transparência nos processos'
  ];

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#104c68] mb-6">
            Sobre a Up iD
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Especialistas em transformação digital e growth marketing, conectamos tecnologia, 
            estratégia e resultados para impulsionar o crescimento do seu negócio.
          </p>
        </div>

        {/* Mission Statement */}
        <div className={`mb-20 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-[#104c68] to-[#50a898] rounded-full">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#104c68] mb-4">
              Nossa Missão
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transformar negócios através da inteligência digital, oferecendo soluções 
              tecnológicas e estratégias de growth marketing que geram resultados concretos 
              e sustentáveis para nossos clientes.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`mb-20 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center text-[#104c68] mb-12">
            Nossos Serviços
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover-lift group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-[#104c68] to-[#50a898] rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#104c68] mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values and Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Values */}
          <div className={`${isVisible ? 'fade-in-left' : 'opacity-0'}`}>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-[#104c68] to-[#50a898] rounded-full mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#104c68]">
                  Nossos Valores
                </h3>
              </div>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#50a898] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Approach */}
          <div className={`${isVisible ? 'fade-in-right' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-[#104c68] to-[#50a898] rounded-xl shadow-lg p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white/20 rounded-full mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">
                  Nossa Abordagem
                </h3>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong>Análise Estratégica:</strong> Mapeamos processos e identificamos oportunidades de melhoria.
                </p>
                <p className="leading-relaxed">
                  <strong>Implementação Personalizada:</strong> Soluções sob medida para cada necessidade específica.
                </p>
                <p className="leading-relaxed">
                  <strong>Acompanhamento Contínuo:</strong> Suporte técnico e monitoramento de resultados.
                </p>
                <p className="leading-relaxed">
                  <strong>Resultados Mensuráveis:</strong> KPIs claros e relatórios de performance transparentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
