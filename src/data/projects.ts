export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Obras Civiles' | 'Estructuras Metálicas' | 'Montajes' | 'Galpones';
  image: string;
  client: string;
  location: string;
  area: number; // Superficie construida en m²
  year: number;
  status: 'Completado' | 'En Ejecución' | 'Diseño';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Planta Concentradora Minera',
    category: 'Montajes',
    client: 'Minera Alta Cumbres',
    location: 'Calama, Región de Antofagasta',
    year: 2024,
    area: 8500,
    status: 'Completado',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800&auto=format&fit=crop',
    description: 'Montaje de equipos mecánicos pesados, alineación láser de molinos de bolas de alta potencia e instalación de piping estructural de acero.',
  },
  {
    id: '2',
    title: 'Centro de Distribución Logístico',
    category: 'Galpones',
    client: 'Logística Transandina SpA',
    location: 'Quilicura, Región Metropolitana',
    year: 2025,
    area: 12000,
    status: 'Completado',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    description: 'Construcción integral de nave industrial de 12.000 m² utilizando pórticos de acero de alma llena, cubiertas con aislación térmica y pavimentos de alta resistencia sin juntas.',
  },
  {
    id: '3',
    title: 'Fundaciones de Chancador Primario',
    category: 'Obras Civiles',
    client: 'Consorcio Vial Andes',
    location: 'Copiapó, Región de Atacama',
    year: 2026,
    area: 1500,
    status: 'En Ejecución',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop',
    description: 'Excavación masiva en roca y vaciado masivo de hormigón armado de alta densidad con control de temperatura, diseñado para soportar las vibraciones mecánicas del chancador primario.',
  },
  {
    id: '4',
    title: 'Edificio de Procesos Químicos',
    category: 'Estructuras Metálicas',
    client: 'Celulosa del Sur S.A.',
    location: 'Concepción, Región del Biobío',
    year: 2023,
    area: 3400,
    status: 'Completado',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    description: 'Fabricación y montaje de estructuras de acero pesado de más de 800 toneladas métricas. Soldadura de penetración completa calificada bajo estándares AWS D1.1.',
  },
  {
    id: '5',
    title: 'Tinglados Modulares para Terminal Portuario',
    category: 'Galpones',
    client: 'Puerto Valparaíso',
    location: 'Valparaíso, Región de Valparaíso',
    year: 2026,
    area: 4500,
    status: 'Diseño',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    description: 'Ingeniería conceptual y de detalle para galpones modulares autosoportantes para el resguardo de contenedores y maquinaria portuaria, con alta resistencia a la corrosión marina.',
  },
];
