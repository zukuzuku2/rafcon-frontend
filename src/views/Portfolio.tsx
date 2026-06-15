import { useState, useEffect } from 'react';
import { projects, Project } from '@/data/projects';
import { FolderGit, Calendar, MapPin, Layers, ArrowUpRight, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const categories = ['Todos', 'Obras Civiles', 'Estructuras Metálicas', 'Montajes', 'Galpones'];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const filtered = projects.filter((project) => {
        if (activeCategory === 'Todos') return true;
        return project.category === activeCategory;
      });

      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 350); // Premium visual transition delay

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section className="bg-slate-950 text-slate-100 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Glow elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center">
          <Briefcase className="text-amber-500 mb-4" size={40} />
          <span className="text-amber-500 font-bold uppercase tracking-wider text-xs sm:text-sm block mb-3">
            Nuestros Trabajos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 mb-6">
            Proyectos que Marcan la <span className="text-amber-500">Diferencia</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded"></div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 border focus:outline-none ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-lg shadow-amber-500/15'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-100 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Grid / Loading / Empty States */}
        {isLoading ? (
          /* Loading State (Skeletons) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden animate-pulse">
                <div className="h-64 bg-slate-950" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-slate-800 rounded w-3/4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-800/80 rounded w-full" />
                    <div className="h-4 bg-slate-800/80 rounded w-5/6" />
                  </div>
                  <div className="border-t border-slate-800/80 pt-4 grid grid-cols-2 gap-4">
                    <div className="h-4 bg-slate-800/60 rounded w-2/3" />
                    <div className="h-4 bg-slate-800/60 rounded w-1/2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-8 max-w-md mx-auto">
            <FolderGit className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-slate-200 font-bold text-lg mb-2">No se encontraron proyectos</h3>
            <p className="text-slate-400 text-sm mb-6">
              No registramos obras completadas en esta categoría para mostrar en este momento.
            </p>
            <button 
              onClick={() => setActiveCategory('Todos')} 
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded uppercase tracking-wider transition-colors"
            >
              Ver Todo el Portafolio
            </button>
          </div>
        ) : (
          /* Grid of Project Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative h-64 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // High quality placeholder in case local assets aren't present
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600';
                    }}
                  />
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-950/90 backdrop-blur-md text-amber-500 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-500/20">
                      {project.category}
                    </span>
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-slate-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      project.status === 'Completado' ? 'bg-emerald-400' :
                      project.status === 'En Ejecución' ? 'bg-amber-400' : 'bg-sky-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Technical Information Section */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-slate-100 font-bold text-lg mb-2 group-hover:text-amber-500 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2 mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Divider */}
                    <div className="border-t border-slate-800/80 my-4" />

                    {/* Technical Grid */}
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs text-slate-400 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-amber-500/80 flex-shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-amber-500/80 flex-shrink-0" />
                        <span>{project.area.toLocaleString()} m²</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-amber-500/80 flex-shrink-0" />
                        <span>Año {project.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FolderGit className="w-4 h-4 text-amber-500/80 flex-shrink-0" />
                        <span className="truncate">{project.client}</span>
                      </div>
                    </div>

                    {/* Simulated Link to Details */}
                    <a
                      href={`#portfolio`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 hover:text-amber-400 transition-colors uppercase tracking-wider group/link"
                    >
                      Detalles del proyecto
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
