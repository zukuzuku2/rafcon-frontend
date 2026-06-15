import { ArrowRight, HardHat, ShieldCheck, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform transition-transform duration-10000"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')` 
        }}
      />
      
      {/* Dark Gradient Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />

      {/* Decorative Grid Line Effects (Subtle Industry Aesthetic) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full text-xs font-bold tracking-wider uppercase mb-8 shadow-sm backdrop-blur-sm">
          <HardHat className="w-4 h-4" />
          <span>Infraestructura & Construcción Industrial</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-tight max-w-5xl mb-6">
          Solidez en <span className="text-amber-500">Ingeniería</span>, Estructuras y Montajes
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mb-12 leading-relaxed">
          Desarrollamos y ejecutamos proyectos de alta complejidad a lo largo de todo Chile. Ofrecemos soluciones integrales en estructuras metálicas, obras civiles y galpones con máxima precisión, seguridad y excelencia técnica.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-16">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded uppercase text-sm tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 gap-2"
          >
            Cotizar Proyecto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center border border-slate-700 hover:border-amber-500 hover:bg-amber-500/10 text-slate-200 hover:text-amber-50 font-bold px-8 py-4 rounded uppercase text-sm tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Ver Portafolio
          </a>
        </div>
      </div>

      {/* Trust Stats / Badges (Only visible on MD screens and up) */}
      <div className="absolute bottom-8 left-0 w-full z-10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 bg-slate-900/90 backdrop-blur-md border border-slate-800/80 p-6 rounded-xl shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 rounded-lg text-amber-500">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="text-slate-100 font-bold text-sm uppercase tracking-wider">Cero Accidentes</h4>
                <p className="text-slate-400 text-xs mt-0.5">Prioridad absoluta en seguridad laboral.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-l border-slate-800/80 pl-6">
              <div className="p-3 bg-amber-500/10 rounded-lg text-amber-500">
                <HardHat className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="text-slate-100 font-bold text-sm uppercase tracking-wider">Equipos Calificados</h4>
                <p className="text-slate-400 text-xs mt-0.5">Ingenieros y técnicos expertos homologados.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-l border-slate-800/80 pl-6">
              <div className="p-3 bg-amber-500/10 rounded-lg text-amber-500">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="text-slate-100 font-bold text-sm uppercase tracking-wider">Cobertura Nacional</h4>
                <p className="text-slate-400 text-xs mt-0.5">Operamos y trasladamos logística en todo Chile.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
