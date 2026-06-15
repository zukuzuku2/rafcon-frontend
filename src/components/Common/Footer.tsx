import { Phone, Mail, MapPin, ArrowRight, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  const services = [
    { name: 'Obras Civiles', href: '#services' },
    { name: 'Estructuras Metálicas', href: '#services' },
    { name: 'Montajes Industriales', href: '#services' },
    { name: 'Galpones y Tinglados', href: '#services' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      {/* Upper Footer / Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1: Rafcon Summary */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              {/* Industrial Logo Icon (SVG) */}
              <svg 
                className="w-8 h-8 text-amber-500 hover:rotate-12 transition-transform duration-300"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-xl font-bold tracking-widest text-slate-100">
                RAF<span className="text-amber-500">CON</span>
              </span>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-400">
              Líderes en soluciones de infraestructura industrial en Chile. Nos especializamos en proyectos de alta complejidad, garantizando máxima seguridad, precisión y cumplimiento de plazos bajo rigurosos estándares de calidad.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-400 rounded-lg transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-400 rounded-lg transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-400 rounded-lg transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-slate-100 font-bold uppercase tracking-wider text-sm border-l-4 border-amber-500 pl-3">
              Servicios
            </h3>
            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="group flex items-center text-sm text-slate-400 hover:text-amber-500 transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-slate-600 group-hover:text-amber-500 transition-all duration-200 transform group-hover:translate-x-1" />
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-slate-100 font-bold uppercase tracking-wider text-sm border-l-4 border-amber-500 pl-3">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="block text-slate-500 text-xs font-semibold uppercase tracking-wider">Teléfono</span>
                  <a href="tel:+56912345678" className="text-slate-300 hover:text-amber-500 transition-colors">
                    +56 9 1234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="block text-slate-500 text-xs font-semibold uppercase tracking-wider">Email Corporativo</span>
                  <a href="mailto:contacto@rafcon.cl" className="text-slate-300 hover:text-amber-500 transition-colors">
                    contacto@rafcon.cl
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="block text-slate-500 text-xs font-semibold uppercase tracking-wider">Ubicación</span>
                  <p className="text-slate-300">
                    Av. Industrial 4500, Antofagasta / Santiago, Chile
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-slate-950/80 border-t border-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; {currentYear} RAFCON. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="#" className="hover:text-amber-500 transition-colors">Políticas de Privacidad</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
