# Portfolio Profesional - Pablo Andrés Mariano M.

## 🚀 Analista Programador Computacional

Portfolio web profesional y moderno desarrollado con Next.js 15, TypeScript y Tailwind CSS, optimizado para despliegue en Vercel.

## ✨ Características

### 🎨 Diseño
- **Diseño moderno y minimalista** con esquema de colores azules corporativos
- **100% responsive** - optimizado para todos los dispositivos
- **Animaciones fluidas** con transiciones CSS y efectos interactivos
- **Tipografía optimizada** usando Inter font con `next/font`
- **Navegación suave** con scroll automático

### 🛠️ Stack Tecnológico
- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

### 📱 Funcionalidades
- **Server Components** para mejor rendimiento
- **Formulario de contacto** con Server Actions y validación
- **Animaciones CSS** optimizadas y accesibles
- **SEO optimizado** con metadatos dinámicos
- **PWA ready** con manifest.json
- **Modo oscuro** preparado (Tailwind CSS)

## 📋 Secciones

### 🏠 Hero/Inicio
- Presentación impactante con animación de escritura
- Call-to-action prominente
- Avatar con elementos flotantes animados
- Indicador de scroll animado

### 👨‍💻 Sobre Mí
- Perfil técnico enfocado en soluciones robustas
- Highlights de especialidades con iconos
- Estadísticas de experiencia
- Arquitectura MVC y desarrollo full-stack

### 💼 Experiencia
- Timeline interactiva con marcadores
- R9 Ingeniería - Desarrollador Full-Stack
- Municipalidad - Analista de Sistemas  
- Proyecto de Título - MediTrack
- Tecnologías utilizadas por proyecto

### 🎯 Habilidades Técnicas
- **Backend**: PHP, Laravel, Node.js, API REST
- **Frontend**: React, TypeScript, Next.js, Tailwind CSS
- **Database**: MySQL, SQL Server, PostgreSQL
- **Herramientas**: Git, Docker, Testing
- Barras de progreso animadas por categoría

### 🚀 Proyectos
- **MediTrack** (Proyecto destacado) - Laravel 12 + React 19 + TypeScript
- Sistema de Gestión Municipal
- Dashboard Analítico
- Enlaces a demos y código fuente

### 📞 Contacto
- Formulario funcional con Server Actions
- Validación client-side y server-side
- Información de contacto
- Enlaces a redes sociales
- Estados de carga y notificaciones

## 🚀 Instalación y Desarrollo

### Requisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd portfolio

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### Comandos Disponibles
```bash
# Desarrollo
npm run dev          # Servidor de desarrollo en http://localhost:3000

# Producción
npm run build        # Construir para producción
npm run start        # Ejecutar build de producción
npm run lint         # Verificar código con ESLint
npm run type-check   # Verificar tipos TypeScript
```

## 🎨 Personalización

### Colores y Temas
Los colores están definidos en `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#3b82f6',
    600: '#2563eb',
    // ...
  }
}
```

### Contenido
- Edita `src/lib/constants.ts` para cambiar información personal, experiencia y proyectos
- Modifica componentes en `src/components/` para ajustar estructura
- Personaliza estilos en `src/app/globals.css`

### Imágenes
- Añade imágenes en la carpeta `public/`
- Usa el componente `<Image>` de Next.js para optimización automática
- Formatos recomendados: WebP, AVIF

## 📊 Rendimiento y SEO

### Optimizaciones Implementadas
- **Server Components** por defecto para mejor rendimiento
- **Componente Image** de Next.js con lazy loading
- **Metadatos dinámicos** para SEO
- **Fuentes optimizadas** con `next/font`
- **Animaciones CSS** eficientes
- **Code splitting** automático de Next.js

### Métricas Objetivo
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.0s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## ♿ Accesibilidad

### Características Implementadas
- **Navegación por teclado** completa
- **Contraste adecuado** (WCAG AA)
- **Texto alternativo** para elementos visuales
- **Estructura semántica** HTML5
- **Focus visible** en elementos interactivos
- **Soporte para lectores de pantalla**

## 🌐 Compatibilidad

### Navegadores Soportados
- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🔧 Configuración del Formulario de Contacto

El formulario usa Server Actions de Next.js. Para integrarlo con servicios de email:

### Opción 1: Formspree
```typescript
// En src/lib/actions.ts
const response = await fetch('https://formspree.io/f/your-form-id', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
```

### Opción 2: SendGrid
```bash
npm install @sendgrid/mail
```

### Opción 3: Nodemailer
```bash
npm install nodemailer
```

## 🚀 Despliegue en Vercel

### Deploy Automático
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno (si las necesitas)
3. Deploy automático en cada push a main

### Deploy Manual
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Variables de Entorno (Opcionales)
```bash
# Para formulario de contacto
FORMSPREE_ENDPOINT=https://formspree.io/f/your-id
SENDGRID_API_KEY=your-api-key

# Para analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📈 SEO y Metadatos

### Implementado
- **Meta tags** dinámicos en `layout.tsx`
- **Open Graph** completo para redes sociales
- **Twitter Cards** optimizadas
- **Structured data** preparado
- **Sitemap** generado automáticamente por Next.js
- **Robots.txt** incluido

## 🔒 Seguridad

### Medidas Implementadas
- **Headers de seguridad** en `vercel.json`
- **Validación de formularios** client y server-side
- **Sanitización** de inputs
- **CSP** preparado para implementar

## 📞 Soporte y Contacto

Para preguntas, sugerencias o colaboraciones:

- **Email**: pablo.mariano@email.com
- **LinkedIn**: [Perfil de LinkedIn]
- **GitHub**: [Perfil de GitHub]

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

---

**Desarrollado con ❤️ por Pablo Andrés Mariano M.**  
*Especialista en PHP/Laravel y desarrollo full-stack*

**Stack**: Next.js 15 + TypeScript + Tailwind CSS + Vercel