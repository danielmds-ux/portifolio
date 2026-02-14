import React from 'react';
import { Github, Linkedin, ExternalLink, Code, Smartphone, Zap, ChevronRight, Terminal, Cpu, Globe } from 'lucide-react';

const projects = [
  {
    title: "Lilow Automação IA",
    category: "BOT & WEB APP",
    description: "Ecossistema de agendamento inteligente via WhatsApp usando API Gemini. Interface de gestão de pacientes e portal do cliente integrados.",
    tech: ["React", "Node.js", "AI Gemini", "WhatsApp API"],
    // ADICIONADO: Caminho do vídeo que você colocou na pasta public
    video: "/PageLilow.mp4", 
    imagePlaceholder: "print_lilow.jpg",
    link: "https://lilow.vercel.app/",
    featured: true
  },
  {
    title: "Dashboard Construtora",
    category: "SISTEMA DE GESTÃO",
    description: "Painel de controle financeiro high-end. Gestão de orçamentos de obra complexos e fluxo de caixa em tempo real com dados visuais.",
    tech: ["React", "Tailwind", "Supabase/Firebase"],
    // Sem vídeo por enquanto
    video: "/PageAbrahao.mp4",
    imagePlaceholder: "print_dashboard.jpg",
    link: "#" 
  },
  {
    title: "Wedding Experience",
    category: "EVENTO INTERATIVO",
    description: "Plataforma digital responsiva para casamentos. RSVP dinâmico, lista de presentes integrada e galeria de fotos em tempo real.",
    tech: ["React", "Framer Motion", "Cloud Functions"],
    // Sem vídeo por enquanto
    video: "/PageCasamento.mp4",
    imagePlaceholder: "print_casamento.jpg",
    link: "https://casamentodb.vercel.app/" 
  }
];

function App() {
  return (
    <div className="min-h-screen text-slate-300 selection:bg-cyan-500/20 selection:text-cyan-200 overflow-x-hidden">
      
      {/* HEADER / NAV - Estilo "Vidro" */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 supports-[backdrop-filter]:bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Terminal size={24} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            <h1 className="text-lg font-bold text-white tracking-wider">
              DANIEL SOUZA<span className="text-cyan-500 animate-pulse">_</span>DEV
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-mono-code text-sm">
            <a href="#servicos" className="hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all">Soluções</a>
            <a href="#projetos" className="hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all">Projetos</a>
          </nav>
          <a href="https://wa.me/5522992241009" target="_blank" className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 px-6 py-2 rounded-full font-medium hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center gap-2">
            <Zap size={18} /> Fale Comigo
          </a>
        </div>
      </header>

      {/* HERO SECTION - Impacto Visual */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto text-center relative">
        {/* Efeito de Luz de Fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>

        <span className="inline-flex items-center gap-2 bg-slate-900/80 border border-cyan-500/30 py-1.5 px-4 rounded-full text-sm font-mono-code text-cyan-400 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Disponível para projetos em Cabo Frio & Remoto
        </span>

        <h2 className="text-5xl md:text-7xl font-extrabold mt-4 mb-8 leading-tight tracking-tight text-white">
          Arquiteto de <br className="md:hidden"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
             Soluções Digitais
          </span>
        </h2>
        
        <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Eu não crio apenas sites. Eu desenvolvo <strong className="text-slate-200">sistemas inteligentes</strong> que automatizam seu negócio, organizam sua gestão e colocam sua empresa no futuro.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
          <a href="#projetos" className="group bg-white text-slate-950 px-8 py-4 rounded-lg font-bold hover:bg-cyan-50 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-300 flex items-center gap-2 w-full md:w-auto justify-center">
            Ver Portfólio <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/>
          </a>
          <a href="https://wa.me/5522992241009" target="_blank" className="group border-2 border-slate-700 text-slate-300 px-8 py-4 rounded-lg font-bold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 flex items-center gap-3 w-full md:w-auto justify-center bg-slate-900/50">
            <Smartphone size={20}/> Agendar Consultoria
          </a>
        </div>
      </section>

      {/* SERVIÇOS - Cartões Holográficos */}
      <section id="servicos" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] bg-slate-800 flex-grow"></div>
            <h3 className="text-sm font-mono-code text-cyan-500 uppercase tracking-widest">/// Minhas Habilidades</h3>
            <div className="h-[1px] bg-slate-800 flex-grow"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-900/80 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.2)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Globe className="text-cyan-500 mb-6 h-12 w-12 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">Web & Landing Pages</h4>
              <p className="text-slate-400 leading-relaxed">Sites de alta performance, otimizados para o Google (SEO) e perfeitos para celular. Sua vitrine digital 24h.</p>
            </div>
             {/* Card 2 */}
            <div className="group p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-900/80 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.2)] transition-all duration-500 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Cpu className="text-purple-500 mb-6 h-12 w-12 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">Automação com IA</h4>
              <p className="text-slate-400 leading-relaxed">Robôs inteligentes para WhatsApp que atendem e agendam clientes sozinhos, usando a inteligência do Google Gemini.</p>
            </div>
             {/* Card 3 */}
            <div className="group p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-900/80 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.2)] transition-all duration-500 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Code className="text-green-500 mb-6 h-12 w-12 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">Sistemas & Dashboards</h4>
              <p className="text-slate-400 leading-relaxed">Painéis administrativos personalizados para organizar o financeiro, estoque e processos da sua empresa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS - Interface de Dados */}
      <section id="projetos" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-16 text-center text-white">Projetos <span className="text-cyan-400">Selecionados</span></h3>
          
          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={index} className={`group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 flex flex-col ${project.featured ? 'md:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.15)] border-cyan-500/30 relative' : 'hover:shadow-xl'}`}>
                
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full z-10 flex items-center gap-1">
                    <Zap size={12} fill="currentColor"/> DESTAQUE
                  </div>
                )}

                {/* Espaço da Imagem - Efeito de Scan */}
                <div className="h-56 bg-slate-950 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                  
                  {/* LÓGICA DE VIDEO: Se tiver vídeo definido, mostra o vídeo. Senão, mostra o placeholder. */}
                  {project.video ? (
                    <video 
                      src={project.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  ) : (
                    <>
                      {/* Placeholder antigo caso não tenha vídeo */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950 opacity-50"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 group-hover:text-cyan-400/50 transition-colors">
                        <Code size={40} className="mb-2 opacity-50" />
                        <span className="text-sm font-mono-code tracking-widest">{project.imagePlaceholder}</span>
                        <div className="mt-4 w-3/4 h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-500/50 w-1/2 animate-pulse"></div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Efeito de Scanline passando */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out h-[200%] pointer-events-none"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative">
                   {/* Efeito de brilho no card */}
                   <div className="absolute pointer-events-none -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6,182,212,0.1), transparent 40%)' }}>
                  </div>

                  <span className="font-mono-code text-xs text-cyan-500 mb-3 block tracking-widest">{project.category}</span>
                  <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">{project.title}</h4>
                  <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="bg-slate-800/50 border border-slate-700 text-slate-300 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {project.link && project.link !== "#" ? (
                     <a href={project.link} target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/link">
                     Acessar Projeto <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"/>
                   </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 cursor-not-allowed">
                     Acesso Restrito <Code size={16} />
                   </span>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px] -z-10 opacity-40 pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-6 text-center bg-slate-900/50 border border-slate-800/50 p-12 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors duration-500">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para <span className="text-cyan-400">modernizar</span> sua empresa?</h3>
            <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto">Não deixe seu negócio parado no tempo. Vamos conversar sobre como a tecnologia pode aumentar suas vendas e organizar seus processos.</p>
            <a href="https://wa.me/5522992241009" target="_blank" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1">
              Solicitar Orçamento no WhatsApp
            </a>
          </div>
      </section>

      {/* FOOTER - Tecnológico */}
      <footer className="bg-slate-950 text-slate-500 py-12 text-center border-t border-slate-900 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
           <div className="mb-6 flex items-center justify-center gap-2">
            <Terminal size={20} className="text-cyan-500 opacity-50" />
            <span className="font-bold text-slate-300 tracking-wider">DANIEL SOUZA<span className="text-cyan-500">_</span>DEV</span>
           </div>
          
          <p className="mb-6 text-sm">
            Desenvolvimento focado em performance e resultado.<br/>Atendimento em Cabo Frio - RJ e Online.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"><Github size={20}/></a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors hover:scale-110 transform"><Linkedin size={20}/></a>
          </div>

          <div className="text-xs font-mono-code opacity-50">
            © {new Date().getFullYear()} SYSTEM STATUS: ONLINE. Feito com React + Tailwind + Café.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;