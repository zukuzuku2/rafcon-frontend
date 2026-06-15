import { Target, ShieldCheck, Award, Briefcase, Percent, Clock, HardHat } from 'lucide-react';

export default function About() {
  const stats = [
    {
      value: '+12',
      label: 'Años de Experiencia',
      description: 'Liderando proyectos industriales en el mercado nacional.',
      icon: Clock,
    },
    {
      value: '+150',
      label: 'Proyectos Listos',
      description: 'Montajes, galpones y obras civiles entregadas con éxito.',
      icon: Briefcase,
    },
    {
      value: '100%',
      label: 'Tasa de Seguridad',
      description: 'Cero incidentes gracias a nuestros estrictos protocolos.',
      icon: Percent,
    },
    {
      value: '+50k',
      label: 'm² Construidos',
      description: 'De galpones y naves industriales de alta resistencia.',
      icon: Award,
    },
  ];

  return (
    <section className="bg-slate-950 text-slate-100 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Glow background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-slate-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Trajectory and Mission/Values */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <HardHat className="text-amber-500" size={40} />
                <span className="text-amber-500 font-bold uppercase tracking-wider text-xs sm:text-sm block">
                  Quiénes Somos
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
                Ingeniería con <span className="text-amber-500">Solidez de Acero</span> y Compromiso Industrial
              </h2>
            </div>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl">
              En RAFCON nos especializamos en materializar proyectos de infraestructura de alta exigencia técnica. Desde obras civiles iniciales y cimientos, hasta la fabricación, montaje de estructuras metálicas pesadas y galpones industriales de gran escala. Contamos con un equipo altamente calificado y procesos certificados para garantizar la continuidad operacional de nuestros clientes.
            </p>

            {/* List with Icons for Mission and Values */}
            <div className="space-y-6 pt-2">
              <div className="flex gap-4 items-start sm:items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-inner">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-slate-100 font-bold text-lg mb-1">
                    Nuestra Misión
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    Facilitar el crecimiento y operatividad de la industria en Chile mediante el diseño, montaje y construcción de naves y estructuras que cumplan con los estándares de seguridad y calidad más exigentes del sector.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start sm:items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-inner">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-slate-100 font-bold text-lg mb-1">
                    Valores Corporativos
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    La seguridad en faena es intransigente, la precisión en ingeniería es nuestro estándar, y la puntualidad y transparencia guían la ejecución de cada proyecto que asumimos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grid of stats cards */}
          <div className="lg:col-span-5 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 p-8 rounded-2xl flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 group ${
                      index % 2 === 1 ? 'sm:translate-y-4' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-2.5 bg-slate-950/60 rounded-xl text-slate-400 group-hover:text-amber-500 transition-colors border border-slate-800">
                        <StatIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <span className="block text-4xl sm:text-5xl font-black text-amber-500 tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                        {stat.value}
                      </span>
                      <h4 className="text-slate-200 font-bold text-sm uppercase tracking-wider mt-3 mb-1">
                        {stat.label}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
