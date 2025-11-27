
'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Building, 
  Target, 
  Award,
  ArrowRight,
  Clock,
  CheckCircle
} from 'lucide-react';
import casesData from '@/data/cases_upid.json';

export function CasesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCase, setSelectedCase] = useState<any>(null);
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

  const getIcon = (index: number) => {
    const icons = [Building, Users, Target, Award];
    const Icon = icons[index % icons.length];
    return <Icon className="w-6 h-6" />;
  };

  const getGradientClass = (index: number) => {
    const gradients = [
      'from-[#104c68] to-[#50a898]',
      'from-[#50a898] to-[#104c68]',
      'from-[#2d6b7f] to-[#50a898]',
      'from-[#104c68] to-[#2d6b7f]'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section
      id="cases"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#104c68] mb-6">
            Cases de Sucesso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios e geraram resultados extraordinários para nossos clientes.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {casesData.cases.map((caseItem, index) => (
            <Card
              key={caseItem.id}
              className={`group hover-lift cursor-pointer ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${getGradientClass(index)} rounded-full text-white`}>
                    {getIcon(index)}
                  </div>
                  <Badge variant="outline" className="text-[#104c68] border-[#104c68]">
                    {caseItem.cliente.segmentos?.[0] || caseItem.cliente.tipo}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-[#104c68] group-hover:text-[#50a898] transition-colors duration-300">
                  {caseItem.titulo}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Client Info */}
                  <div className="flex items-center text-sm text-gray-600">
                    <Building className="w-4 h-4 mr-2" />
                    {caseItem.cliente.tipo}
                  </div>

                  {/* Key Results */}
                  <div className="space-y-2">
                    {caseItem.resultados.metricas?.slice(0, 2).map((metrica: any, i: number) => (
                      <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <span className="text-sm text-gray-600">{metrica.indicador}</span>
                        <span className="font-bold text-[#104c68]">{metrica.valor}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impacts */}
                  {caseItem.resultados.impactos && (
                    <div className="space-y-2">
                      {caseItem.resultados.impactos.slice(0, 2).map((impacto: string, i: number) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#50a898] mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600 line-clamp-2">
                            {impacto.replace(/[🚀📊💰⏳🎯📈🔄📞💡🌍🔁⚙️]/g, '')}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* View Details Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full mt-4 group border-[#104c68] text-[#104c68] hover:bg-[#104c68] hover:text-white transition-all duration-300"
                      >
                        Ver Detalhes Completos
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-[#104c68] mb-4">
                          {caseItem.titulo}
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        {/* Client and Period */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-[#104c68] mb-2">Cliente</h4>
                            <p>{caseItem.cliente.tipo}</p>
                            {caseItem.cliente.segmentos && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {caseItem.cliente.segmentos.map((segmento: string, i: number) => (
                                  <Badge key={i} variant="secondary" className="text-xs">
                                    {segmento}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                          {caseItem.periodo && (
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-[#104c68] mb-2">Período</h4>
                              {caseItem.periodo.inicio ? (
                                <p>{caseItem.periodo.inicio} - {caseItem.periodo.fim}</p>
                              ) : (
                                <p>{caseItem.periodo.descricao}</p>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Challenge */}
                        <div className="bg-red-50 p-6 rounded-lg">
                          <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                            <Target className="w-5 h-5 mr-2" />
                            Desafio
                          </h4>
                          <p className="text-gray-700 mb-3">{caseItem.desafio.descricao}</p>
                          {caseItem.desafio.problemas && (
                            <ul className="space-y-1">
                              {caseItem.desafio.problemas.map((problema: string, i: number) => (
                                <li key={i} className="flex items-start">
                                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  <span className="text-sm text-gray-600">{problema}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* Solutions */}
                        <div className="bg-blue-50 p-6 rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-3 flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Soluções Implementadas
                          </h4>
                          <div className="space-y-4">
                            {caseItem.solucoes.map((solucao: any, i: number) => (
                              <div key={i} className="border-l-4 border-blue-400 pl-4">
                                <h5 className="font-semibold text-blue-800 mb-2">{solucao.categoria}</h5>
                                {solucao.descricao && (
                                  <p className="text-gray-700 mb-2">{solucao.descricao}</p>
                                )}
                                {solucao.acoes && (
                                  <ul className="space-y-1">
                                    {solucao.acoes.map((acao: string, j: number) => (
                                      <li key={j} className="flex items-start">
                                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                                        <span className="text-sm text-gray-600">{acao}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Results */}
                        <div className="bg-green-50 p-6 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                            <TrendingUp className="w-5 h-5 mr-2" />
                            Resultados Alcançados
                          </h4>
                          
                          {caseItem.resultados.metricas && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                              {caseItem.resultados.metricas.map((metrica: any, i: number) => (
                                <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                                  <div className="text-2xl font-bold text-green-600 mb-1">
                                    {metrica.valor}
                                  </div>
                                  <div className="text-sm text-gray-600">{metrica.indicador}</div>
                                  {metrica.descricao && (
                                    <div className="text-xs text-gray-500 mt-1">{metrica.descricao}</div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {caseItem.resultados.impactos && (
                            <div className="space-y-2">
                              {caseItem.resultados.impactos.map((impacto: string, i: number) => (
                                <div key={i} className="flex items-start">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                  <span className="text-sm text-gray-700">
                                    {impacto.replace(/[🚀📊💰⏳🎯📈🔄📞💡🌍🔁⚙️]/g, '')}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Technologies */}
                        {caseItem.tecnologias && (
                          <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-3">Tecnologias Utilizadas</h4>
                            <div className="flex flex-wrap gap-2">
                              {caseItem.tecnologias.map((tech: string, i: number) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Testimonial */}
                        {caseItem.depoimentos && (
                          <div className="bg-yellow-50 p-6 rounded-lg">
                            <h4 className="font-semibold text-yellow-700 mb-3">Depoimento</h4>
                            <p className="text-gray-700 italic">"{caseItem.depoimentos}"</p>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <div className={`bg-gradient-to-r from-[#104c68] to-[#50a898] rounded-2xl p-8 sm:p-12 text-white text-center ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Resultados que Falam por Si</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">{casesData.estatisticas_gerais.empresas_atendidas}</div>
              <div className="text-lg opacity-90">Empresas Transformadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{casesData.estatisticas_gerais.segmentos_diversos.length}+</div>
              <div className="text-lg opacity-90">Segmentos Atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{casesData.estatisticas_gerais.total_cases}</div>
              <div className="text-lg opacity-90">Cases Documentados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
