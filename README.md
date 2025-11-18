# Colegio Privado de Ciencias Isaac Newton - Sitio Web Institucional

Sitio web moderno, responsivo y animado para el Colegio Privado de Ciencias Isaac Newton, desarrollado con React 18, Vite, Tailwind CSS y Framer Motion.

## 🚀 Características

- **7 páginas independientes navegables**: Inicio, Nosotros, Niveles Educativos, Nuestra Comunidad, Campus, Admisión y Contacto
- **Diseño responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- **Animaciones fluidas**: Implementadas con Framer Motion para una experiencia visual atractiva
- **Formulario de contacto funcional**: Con validación usando React Hook Form
- **Navegación intuitiva**: Header con menú responsive y footer completo
- **Botón flotante de WhatsApp**: Para contacto directo
- **Colores institucionales**: Azul oscuro (#013055), Verde azulado (#007a75) y Amarillo dorado (#fccc00)
- **Tipografías personalizadas**: Anton para títulos y Montserrat para texto

## 🛠️ Tecnologías Utilizadas

- **React 18.3.1**: Biblioteca principal para la construcción de la interfaz
- **Vite 6.3.5**: Build tool rápido y moderno
- **React Router DOM 7.1.3**: Navegación entre páginas
- **Tailwind CSS 4.0.0**: Framework de CSS utility-first
- **Framer Motion 12.0.0**: Biblioteca de animaciones
- **React Hook Form 7.54.2**: Manejo de formularios
- **Lucide React 0.468.0**: Iconos modernos
- **shadcn/ui**: Componentes UI de alta calidad

## 📋 Requisitos Previos

- Node.js 18.x o superior
- npm, pnpm o yarn

## 🔧 Instalación

1. **Clonar o extraer el proyecto**

```bash
cd colegio-isaac-newton
```

2. **Instalar dependencias**

Con pnpm (recomendado):
```bash
pnpm install
```

Con npm:
```bash
npm install
```

Con yarn:
```bash
yarn install
```

## 🚀 Uso

### Modo Desarrollo

Para iniciar el servidor de desarrollo:

Con pnpm:
```bash
pnpm run dev
```

Con npm:
```bash
npm run dev
```

Con yarn:
```bash
yarn dev
```

El sitio estará disponible en `http://localhost:5173/`

### Construcción para Producción

Para generar la versión optimizada para producción:

Con pnpm:
```bash
pnpm run build
```

Con npm:
```bash
npm run build
```

Con yarn:
```bash
yarn build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### Vista Previa de Producción

Para previsualizar la versión de producción:

Con pnpm:
```bash
pnpm run preview
```

Con npm:
```bash
npm run preview
```

Con yarn:
```bash
yarn preview
```

## 📁 Estructura del Proyecto

```
colegio-isaac-newton/
├── public/
│   └── logo-vertical-azul.png    # Logo institucional
├── src/
│   ├── components/
│   │   ├── Header.jsx            # Componente de encabezado
│   │   ├── Footer.jsx            # Componente de pie de página
│   │   └── WhatsAppButton.jsx    # Botón flotante de WhatsApp
│   ├── pages/
│   │   ├── Inicio.jsx            # Página de inicio
│   │   ├── Nosotros.jsx          # Página sobre nosotros
│   │   ├── Niveles.jsx           # Página de niveles educativos
│   │   ├── Comunidad.jsx         # Página de comunidad
│   │   ├── Campus.jsx            # Página de campus
│   │   ├── Admision.jsx          # Página de admisión
│   │   └── Contacto.jsx          # Página de contacto
│   ├── data/
│   │   └── publicaciones.js      # Datos de publicaciones/noticias
│   ├── App.jsx                   # Componente principal
│   ├── App.css                   # Estilos globales
│   └── main.jsx                  # Punto de entrada
├── index.html                    # HTML principal
├── package.json                  # Dependencias y scripts
├── vite.config.js                # Configuración de Vite
└── README.md                     # Este archivo
```

## 🎨 Personalización

### Colores Institucionales

Los colores están definidos en `src/App.css`:

```css
--azul-oscuro: #013055;
--verde-azulado: #007a75;
--amarillo-dorado: #fccc00;
```

### Tipografías

- **Títulos**: Anton (Google Fonts)
- **Texto**: Montserrat (Google Fonts)

### Logo

El logo se encuentra en `public/logo-vertical-azul.png`. Para cambiarlo, reemplaza este archivo manteniendo el mismo nombre o actualiza las referencias en los componentes.

### Contenido

Para modificar el contenido de las páginas, edita los archivos correspondientes en `src/pages/`.

## 📱 Páginas Incluidas

1. **Inicio**: Hero section, propuesta pedagógica, campus, reconocimientos, talleres y partners
2. **Nosotros**: Historia, misión, visión, valores, fundador y metodología
3. **Niveles Educativos**: Inicial, Primaria y Secundaria con características de cada nivel
4. **Nuestra Comunidad**: Publicaciones, directivos, docentes y alumnos destacados
5. **Campus**: Información de ambos campus con tarjetas flip y mapa
6. **Admisión**: Proceso, requisitos, becas y fechas importantes
7. **Contacto**: Formulario funcional, información de contacto y mapa

## 🌐 Despliegue

El proyecto puede ser desplegado en cualquier servicio de hosting estático:

- **Vercel**: `vercel deploy`
- **Netlify**: Arrastra la carpeta `dist` a Netlify
- **GitHub Pages**: Configura el workflow de GitHub Actions
- **Cloudflare Pages**: Conecta tu repositorio

## 📞 Soporte

Para preguntas o soporte técnico, contacta a:
- Email: info@isaacnewton.edu.pe
- Teléfono: (076) 123-456

## 📄 Licencia

© 2025 Colegio Privado de Ciencias Isaac Newton. Todos los derechos reservados.

---

Desarrollado con ❤️ para el Colegio Isaac Newton

