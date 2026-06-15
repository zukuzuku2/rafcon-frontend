import { useState } from 'react';
import { HardHat } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#home" className="flex items-center gap-2 group">
              {/* Industrial Logo Icon (SVG) */}
              <svg 
                className="w-8 h-8 text-amber-500 group-hover:rotate-12 transition-transform duration-300"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-xl font-bold tracking-widest text-slate-100 group-hover:text-amber-500 transition-colors">
                RAF<span className="text-amber-500 group-hover:text-slate-100 transition-colors">CON</span>
              </span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-slate-300 hover:text-amber-500 transition-colors duration-200 relative py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-xl uppercase text-xs tracking-wider transition-all duration-300 shadow-md shadow-amber-500/10 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <HardHat className="w-4 h-4" />
              Presupuesto
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-amber-500 hover:bg-slate-800 focus:outline-none transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                // Close Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu Hamburger Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 border-t border-slate-800' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-slate-900/98 backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-amber-500 hover:bg-slate-800/50 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 px-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl uppercase text-sm tracking-wider transition-all duration-200 shadow-md shadow-amber-500/10 flex items-center justify-center gap-1.5"
            >
              <HardHat className="w-4.5 h-4.5" />
              Presupuesto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
