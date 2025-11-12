'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Leaf, TrendingUp, DollarSign, Shield, Menu, X, ArrowRight, CheckCircle, Users } from 'lucide-react';

export default function EcoInovaLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const valores = [
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      titulo: "Sustentabilidade",
      desc: "Compromisso com o futuro do planeta através de energia limpa e renovável"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      titulo: "Inovação",
      desc: "Tecnologia de ponta para maximizar a eficiência energética"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      titulo: "Transparência",
      desc: "Processos claros e honestos em cada etapa do projeto"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      titulo: "Custo-benefício",
      desc: "Soluções acessíveis sem comprometer a qualidade"
    }
  ];

  const equipe = [
    {
      nome: "Ana Paula Silva",
      cargo: "CEO & Fundadora",
      bio: "15 anos em energia renovável",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      nome: "Ricardo Mendes",
      cargo: "CTO",
      bio: "Especialista em sistemas fotovoltaicos",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      nome: "Juliana Costa",
      cargo: "Diretora de Operações",
      bio: "Gestão de projetos sustentáveis",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      nome: "Carlos Oliveira",
      cargo: "Diretor Comercial",
      bio: "Conexão com clientes e comunidades",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    }
  ];

  const timeline = [
    { ano: "2020", evento: "Fundação da EcoInova com foco em residências" },
    { ano: "2022", evento: "Expandimos para pequenos comércios, 500+ instalações" },
    { ano: "2024", evento: "Reconhecimento nacional em sustentabilidade" },
    { ano: "2030", evento: "Meta: Líderes em energia solar residencial" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sun className={`w-8 h-8 ${isScrolled ? 'text-green-600' : 'text-white'}`} />
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                EcoInova
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Manifesto', 'História', 'Valores', 'Equipe'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-200'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {['Manifesto', 'História', 'Valores', 'Equipe'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 hover:text-green-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - Manifesto */}
      <section id="manifesto" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-500 to-emerald-600" />
        <div className="absolute inset-0 bg-black opacity-20" />
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Energia Limpa para Todos
          </h1>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20">
              <h2 className="text-2xl font-semibold mb-3 flex items-center justify-center gap-2">
                <Sun className="w-8 h-8" />
                Nossa Missão
              </h2>
              <p className="text-xl">
                Democratizar o acesso à energia limpa no Brasil
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20">
              <h2 className="text-2xl font-semibold mb-3 flex items-center justify-center gap-2">
                <TrendingUp className="w-8 h-8" />
                Nossa Visão
              </h2>
              <p className="text-xl">
                Ser líder em soluções de energia solar residencial até 2030
              </p>
            </div>
          </div>

          <button className="mt-12 bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2 mx-auto">
            Faça um Orçamento Gratuito
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Nossa História */}
      <section id="história" className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Nossa História</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              Fundada em 2020, a <strong>EcoInova</strong> nasceu do sonho de tornar a energia solar acessível para cada lar brasileiro. 
              Começamos com uma pequena equipe apaixonada por sustentabilidade e, desde então, já transformamos mais de 500 residências 
              e estabelecimentos comerciais em exemplos de eficiência energética. Nosso compromisso vai além da instalação: 
              construímos um futuro mais verde, um teto solar por vez.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-600" />
            
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className={`bg-white rounded-xl shadow-lg p-6 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full font-bold mb-3">
                        {item.ano}
                      </span>
                      <p className="text-gray-700 text-lg">{item.evento}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-green-600 border-4 border-white rounded-full shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam cada decisão e projeto da EcoInova
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100"
              >
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {valor.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                  {valor.titulo}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {valor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Conheça Nossa Equipe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Especialistas apaixonados por transformar o futuro energético do Brasil
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipe.map((membro, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={membro.img}
                    alt={membro.nome}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {membro.nome}
                  </h3>
                  <p className="text-green-600 font-semibold mb-2">
                    {membro.cargo}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {membro.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full filter blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">
            Pronto para Transformar sua Energia?
          </h2>
          <p className="text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Junte-se a centenas de brasileiros que já reduziram suas contas de luz em até 95%
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-green-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2">
              Solicitar Orçamento Gratuito
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-all transform hover:scale-105 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Falar com Especialista
            </button>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-lg opacity-90">Instalações Realizadas</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">95%</p>
              <p className="text-lg opacity-90">Economia Média</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">4.9★</p>
              <p className="text-lg opacity-90">Avaliação dos Clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sun className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold">EcoInova Ltda.</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                © 2024 EcoInova. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-sm">
                Democratizando o acesso à energia limpa no Brasil
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}