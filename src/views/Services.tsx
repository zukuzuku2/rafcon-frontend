import { Construction, Wrench, Factory, Layers, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Obras Civiles',
      description: 'Preparación de terrenos, excavaciones y fundaciones de hormigón estructural diseñadas para soportar cargas dinámicas y cargas pesadas en plantas industriales.',
      icon: Construction,
      subServices: [
        'Excavaciones y movimiento de tierras',
        'Bases y fundaciones estructurales',
        'Radieres y pavimentos industriales',
        'Obras de hormigón armado complejas',
      ],
    },
    {
      title: 'Estructuras Metálicas',
      description: 'Fabricación y habilitación de estructuras de acero con soldaduras certificadas y control dimensional estricto para asegurar un acople perfecto en faena.',
      icon: Wrench,
      subServices: [
        'Fabricación de vigas y columnas',
        'Estructuras reticuladas pesadas',
        'Soldadura calificada (AWS)',
        'Tratamiento anticorrosivo y pintura',
      ],
    },
    {
      title: 'Montajes Industriales',
      description: 'Montaje electromecánico e izaje de precisión de maquinaria pesada, tuberías y sistemas mecánicos clave para plantas productivas.',
      icon: Factory,
      subServices: [
        'Montaje mecánico estructural',
        'Izajes críticos y maniobras',
        'Instalación de piping industrial',
        'Alineación láser de maquinaria',
      ],
    },
    {
      title: 'Galpones y Tinglados',
      description: 'Soluciones llave en mano para bodegaje, naves de producción y almacenamiento con luces libres amplias y resistencia a condiciones climáticas extremas.',
      icon: Layers,
      subServices: [
        'Galpones alma llena y reticulados',
        'Montaje de cubiertas y revestimientos',
        'Portones y accesos industriales',
        'Ventilación y aislación térmica',
      ],
    },
  ];

  return (
    <section className="bg-slate-950 text-slate-100 py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 flex flex-col items-center">
          <Construction className="text-amber-500 mb-4" size={40} />
          <span className="text-amber-500 font-bold uppercase tracking-wider text-xs sm:text-sm block mb-3">
            Nuestra Especialidad
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 mb-6">
            Servicios Industriales de <span className="text-amber-500">Alto Estándar</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded mb-6"></div>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Ofrecemos soluciones integrales desde las fundaciones hasta el montaje final de su infraestructura, garantizando precisión, seguridad y cumplimiento absoluto de los plazos comprometidos.
          </p>
        </div>

        {/* Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800/80 p-8 rounded-2xl flex flex-col justify-between hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 group"
              >
                <div>
                  {/* Icon Container with interactive states */}
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                    <ServiceIcon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-slate-100 font-bold text-xl mb-3 tracking-tight group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Sub-services section */}
                <div>
                  <div className="border-t border-slate-800/80 my-5" />
                  <h4 className="text-slate-500 text-xxs font-bold uppercase tracking-widest mb-3">
                    Especialidades
                  </h4>
                  <ul className="space-y-2.5">
                    {service.subServices.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-slate-300 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/70 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
