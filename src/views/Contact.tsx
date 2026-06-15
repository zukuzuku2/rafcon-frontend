import { useActionState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertTriangle } from 'lucide-react';

interface FormState {
  success: boolean;
  message: string;
  error?: string;
}

export default function Contact() {
  // React 19 Form Action handling with useActionState
  const [state, formAction, isPending] = useActionState(
    async (_prevState: FormState, formData: FormData): Promise<FormState> => {
      // Simulate network request delay
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const name = formData.get('name') as string;
      const company = formData.get('company') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const projectType = formData.get('projectType') as string;
      const message = formData.get('message') as string;

      // Validation
      if (!name || !email || !projectType || !message) {
        return {
          success: false,
          message: 'Por favor complete todos los campos requeridos (*).',
          error: 'validation',
        };
      }

      // Log submission data (effectively reading all form inputs)
      console.log('Solicitud de contacto recibida:', { name, company, email, phone, projectType, message });

      // Successful simulated submit
      return {
        success: true,
        message: `¡Solicitud enviada! Gracias ${name}. Tu requerimiento para ${projectType} se ha registrado. Te contactaremos al correo ${email} a la brevedad.`,
      };
    },
    { success: false, message: '' }
  );

  const contactBlocks = [
    {
      label: 'Teléfono',
      value: '+56 9 1234 5678',
      subtext: 'Línea de atención comercial e ingeniería de proyectos.',
      icon: Phone,
      href: 'tel:+56912345678',
    },
    {
      label: 'Email Corporativo',
      value: 'contacto@rafcon.cl',
      subtext: 'Envíe sus bases técnicas para cotizaciones formales.',
      icon: Mail,
      href: 'mailto:contacto@rafcon.cl',
    },
    {
      label: 'Ubicación Principal',
      value: 'Av. Industrial 4500, Santiago / Antofagasta, Chile',
      subtext: 'Talleres de fabricación metalmecánica y oficinas centrales.',
      icon: MapPin,
      href: '#',
    },
    {
      label: 'Horario de Atención',
      value: 'Lunes a Viernes: 08:30 - 18:30 hrs',
      subtext: 'Atención presencial, soporte telefónico y comercial.',
      icon: Clock,
      href: '#',
    },
  ];

  return (
    <section className="bg-slate-950 text-slate-100 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Blur elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-slate-900/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center">
          <Mail className="text-amber-500 mb-4" size={40} />
          <span className="text-amber-500 font-bold uppercase tracking-wider text-xs sm:text-sm block mb-3">
            Cotizaciones y Consultas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 mb-6">
            Inicie su Proyecto con <span className="text-amber-500">Nosotros</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded"></div>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 p-8 rounded-2xl shadow-xl relative">
            {state.success ? (
              /* Success Message */
              <div className="py-12 px-4 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-slate-100 font-bold text-2xl">¡Solicitud Procesada!</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                  {state.message}
                </p>
                <div className="pt-6">
                  <a
                    href="#contact"
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-6 py-3 rounded-xl uppercase text-xs tracking-wider transition-colors border border-slate-700"
                  >
                    Enviar otro mensaje
                  </a>
                </div>
              </div>
            ) : (
              /* Form */
              <form action={formAction} className="space-y-6">
                
                {state.error === 'validation' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-500 rounded-xl flex items-center gap-3 text-sm">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <span>{state.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      disabled={isPending}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/80 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none transition-colors duration-200 placeholder-slate-700 disabled:opacity-50"
                    />
                  </div>

                  {/* Company field */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Empresa / Entidad
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      disabled={isPending}
                      placeholder="Ej. Minera del Norte"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/80 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none transition-colors duration-200 placeholder-slate-700 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      disabled={isPending}
                      placeholder="nombre@empresa.cl"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/80 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none transition-colors duration-200 placeholder-slate-700 disabled:opacity-50"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Teléfono de Contacto
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      disabled={isPending}
                      placeholder="Ej. +56 9 1234 5678"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/80 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none transition-colors duration-200 placeholder-slate-700 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Project Type Select */}
                <div>
                  <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Tipo de Proyecto *
                  </label>
                  <select
                    name="projectType"
                    id="projectType"
                    required
                    disabled={isPending}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/80 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none transition-colors duration-200 cursor-pointer disabled:opacity-50"
                  >
                    <option value="" disabled className="text-slate-700">Seleccione una especialidad</option>
                    <option value="Obras Civiles">Obras Civiles</option>
                    <option value="Estructuras Metálicas">Estructuras Metálicas</option>
                    <option value="Montajes Industriales">Montajes Industriales</option>
                    <option value="Galpones y Tinglados">Galpones y Tinglados</option>
                    <option value="Otro Proyecto">Otro / Multidisciplinario</option>
                  </select>
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Detalles del Proyecto / Mensaje *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    disabled={isPending}
                    placeholder="Describa brevemente los requerimientos, dimensiones, plazos o especificaciones técnicas de su obra..."
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/80 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none transition-colors duration-200 placeholder-slate-700 min-h-[140px] resize-none disabled:opacity-50"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-4 rounded-xl uppercase text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 disabled:bg-slate-800 disabled:text-slate-600 disabled:shadow-none flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                      Procesando Solicitud...
                    </>
                  ) : (
                    <>
                      Enviar Solicitud de Cotización
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact info blocks */}
          <div className="space-y-6">
            {contactBlocks.map((block, index) => {
              const Icon = block.icon;
              const isLink = block.href !== '#';
              return (
                <div
                  key={index}
                  className="flex gap-5 p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl hover:border-amber-500/25 transition-colors duration-300 group"
                >
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                      {block.label}
                    </h4>
                    {isLink ? (
                      <a
                        href={block.href}
                        className="text-slate-100 font-bold text-sm sm:text-base hover:text-amber-500 transition-colors"
                      >
                        {block.value}
                      </a>
                    ) : (
                      <p className="text-slate-100 font-bold text-sm sm:text-base">
                        {block.value}
                      </p>
                    )}
                    <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                      {block.subtext}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
