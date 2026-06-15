# RAFCON | Portal Corporativo Industrial

Este repositorio contiene la interfaz corporativa moderna de **RAFCON**, empresa líder en soluciones de infraestructura, ingeniería, estructuras metálicas y montajes industriales en Chile. El portal está diseñado y maquetado bajo estándares premium, adaptado a dispositivos móviles de forma nativa (mobile-first), con un enfoque visual robusto e industrial.

## 🛠️ Stack Tecnológico

El proyecto está construido utilizando tecnologías modernas de vanguardia en desarrollo frontend:

*   **Framework principal:** [React 19](https://react.dev/) — Aprovechando características nativas como la integración directa de acciones en formularios y hooks de estado de carga asíncrona.
*   **Estilos y Maquetación:** [TailwindCSS v4](https://tailwindcss.com/) — Utilizando la nueva sintaxis de compilación rápida y la configuración unificada mediante la directiva `@theme`.
*   **Herramienta de Construcción:** [Vite](https://vite.dev/) — Para un entorno de desarrollo rápido y builds de producción optimizados.
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) — Tipado estricto en toda la lógica de negocio y base de datos simulada.
*   **Iconografía:** [Lucide React](https://lucide.dev/) — Librería de iconos vectoriales limpios e interactivos.

---

## 🎨 Paleta de Colores e Identidad Industrial

El diseño utiliza una paleta cromática sobria y técnica que refleja la robustez y solidez de las faenas industriales:

*   **Fondo Dominante:** `bg-slate-950` (`#030712`) / `bg-slate-900` (`#0f172a`) — Aporta un aspecto tecnológico, moderno y reduce el cansancio visual.
*   **Acento Principal (Maquinaria Pesada):** `brand-amber` (`#f59e0b`) — Utilizado estratégicamente en botones, bordes interactivos, badges y títulos principales.
*   **Texto de Alta Legibilidad:** `brand-text` (`#f8fafc`) — Garantiza un contraste óptimo bajo estándares de accesibilidad.
*   **Favicon e Identidad:** Integración directa de un isotipo vectorial (SVG inline) en la pestaña del navegador junto con un título SEO optimizado.

---

## 🏢 Estructura de Secciones (Single Page Application)

El portal está estructurado como una aplicación de página única (SPA) con secciones consecutivas interconectadas por enlaces de anclaje:

1.  **Menú de Navegación (Navbar):** Cabecera fija (`fixed top-0`) con efecto de desenfoque de fondo (`backdrop-blur-md`), enlaces con indicador activo deslizante y botón con icono de casco de seguridad (`HardHat`) para cotizar presupuestos.
2.  **Sección de Inicio (Hero):** Pantalla completa con imagen de faena de construcción en alta resolución, capa de contraste degradada, títulos potentes de impacto comercial, botones interactivos con zoom y una barra inferior con indicadores clave (*Cero Accidentes*, *Equipos Calificados* y *Cobertura Nacional*).
3.  **Sección Nosotros (About):** Diseño responsivo asimétrico. A la izquierda, declaración de trayectoria corporativa con iconos y detalle de la **Misión** y **Valores** de la empresa. A la derecha, un grid de tarjetas oscuras animadas que muestra estadísticas en tiempo real (`+12 Años de Experiencia`, `+150 Proyectos`, `100% Tasa de Seguridad`).
4.  **Sección Servicios (Services):** Panel técnico que organiza las 4 áreas principales de RAFCON:
    *   **Obras Civiles** (Excavaciones, cimientos, bases pesadas).
    *   **Estructuras Metálicas** (Vigas, columnas, soldadura certificada AWS).
    *   **Montajes Industriales** (Izaje de equipos, piping, alineación láser).
    *   **Galpones y Tinglados** (Diseño modular de naves, cubiertas y cierres).
5.  **Sección Portafolio (Portfolio):** Galería con filtrado interactivo controlado por estado (`useState`). Cuenta con simulación de transiciones mediante esqueletos pulsantes (`animate-pulse`) e incluye tarjetas de proyectos reales desarrollados en Chile con campos detallados de superficie, año, ubicación y cliente.
6.  **Sección Contacto (Contact):** Formulario avanzado de cotizaciones que utiliza la acción asíncrona de React 19 (`useActionState`) para gestionar el envío, ofreciendo retroalimentación visual al usuario en tiempo real (barra de carga, manejo de validaciones y tarjeta de éxito final). A la derecha se despliegan bloques con información de contacto directa y horarios.
7.  **Pie de Página (Footer):** Estructura responsiva de tres columnas que incluye resumen corporativo, enlaces rápidos a servicios, datos de contacto (teléfono, email, dirección física en Chile) y derechos de autor vigentes al año **2026**.

---

## 📂 Archivos Principales del Proyecto

*   [`src/App.tsx`](src/App.tsx) — Punto de entrada de la estructura SPA y montaje de secciones.
*   [`src/index.css`](src/index.css) — Archivo de estilos globales donde se inyectan las directivas y variables corporativas en `@theme` de TailwindCSS v4.
*   [`src/data/projects.ts`](src/data/projects.ts) — Base de datos tipada con los proyectos industriales ejecutados en Chile.
*   [`src/components/Common/Navbar.tsx`](src/components/Common/Navbar.tsx) y [`Footer.tsx`](src/components/Common/Footer.tsx) — Componentes transversales del portal.
*   [`src/views/`](src/views/) — Directorio contenedor de todas las vistas modulares (`Home`, `About`, `Services`, `Portfolio`, `Contact`).
*   [`index.html`](index.html) — Estructura HTML raíz, título SEO y favicon dinámico.

---

## 🚀 Instrucciones para Ejecución

### Requisitos Previos

Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).

### 1. Instalar Dependencias

Para instalar todos los módulos requeridos por el portal, ejecute:

```bash
npm install
```

### 2. Iniciar el Servidor de Desarrollo

Inicie la aplicación localmente en modo desarrollo:

```bash
npm run dev
```

El servidor estará disponible en la dirección local indicada por la terminal (usualmente `http://localhost:5173`).

### 3. Compilar para Producción

Para generar los archivos optimizados y empaquetados listos para subir a producción (carpeta `dist/`), ejecute:

```bash
npm run build
```
