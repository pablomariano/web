# 🎨 Guía de Personalización del Portfolio

## 📝 Información Personal

### 1. Datos de Contacto
Actualiza la información personal en `index.html`:

```html
<!-- Sección Hero -->
<span class="hero-name">Tu Nombre Completo</span>
<h2 class="hero-subtitle">Tu Título Profesional</h2>

<!-- Sección Contacto -->
<p>tu.email@dominio.com</p>
<p>+56 9 XXXX XXXX</p>
```

### 2. Enlaces Sociales
Modifica los enlaces en la sección de contacto:

```html
<a href="https://linkedin.com/in/tu-perfil" class="social-link">
<a href="https://github.com/tu-usuario" class="social-link">
<a href="mailto:tu.email@dominio.com" class="social-link">
```

## 🎯 Contenido Profesional

### 1. Experiencia Laboral
Actualiza la timeline en la sección `#experiencia`:

```html
<div class="timeline-header">
    <h3>Tu Cargo</h3>
    <span class="timeline-company">Nombre de la Empresa</span>
    <span class="timeline-date">Año - Presente</span>
</div>
```

### 2. Habilidades Técnicas
Modifica las barras de progreso en `#habilidades`:

```html
<div class="skill-item">
    <span class="skill-name">Tecnología</span>
    <div class="skill-bar">
        <div class="skill-progress" data-width="85"></div>
    </div>
</div>
```

### 3. Proyectos
Actualiza los proyectos en `#proyectos`:

```html
<div class="project-card">
    <h3 class="project-title">Nombre del Proyecto</h3>
    <p class="project-description">Descripción del proyecto...</p>
    <div class="project-tech">
        <span class="tech-tag">Tecnología 1</span>
        <span class="tech-tag">Tecnología 2</span>
    </div>
</div>
```

## 🎨 Personalización Visual

### 1. Colores
Modifica las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #tu-color-primario;
    --primary-dark: #tu-color-primario-oscuro;
    --accent-color: #tu-color-acento;
}
```

### 2. Tipografía
Cambia la fuente en el `<head>` de `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Tu-Fuente:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Y actualiza en CSS:
```css
body {
    font-family: 'Tu-Fuente', sans-serif;
}
```

### 3. Avatar/Foto
Reemplaza el placeholder del avatar:

```html
<div class="avatar-placeholder">
    <img src="tu-foto.jpg" alt="Tu Nombre" />
</div>
```

## 🖼️ Imágenes y Media

### 1. Favicon
Genera favicons en [favicon.io](https://favicon.io) y reemplaza:
- `favicon.ico`
- `icons/apple-touch-icon.png`
- `icons/favicon-32x32.png`
- `icons/favicon-16x16.png`

### 2. Imágenes de Proyectos
Crea una carpeta `images/` y añade capturas:

```html
<div class="project-image">
    <img src="images/proyecto1.jpg" alt="Proyecto 1" />
</div>
```

### 3. Open Graph
Actualiza las meta tags para redes sociales:

```html
<meta property="og:image" content="https://tu-dominio.com/images/og-image.jpg">
<meta property="og:url" content="https://tu-dominio.com/">
```

## 📱 PWA Configuration

### 1. Manifest
Actualiza `manifest.json`:

```json
{
    "name": "Tu Nombre - Portfolio",
    "short_name": "Tu Portfolio",
    "start_url": "https://tu-dominio.com/",
    "theme_color": "#tu-color-tema"
}
```

### 2. Service Worker
Para funcionalidad offline, crea `sw.js`:

```javascript
const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
    '/',
    '/styles.css',
    '/script.js',
    '/images/tu-foto.jpg'
];
```

## 🔧 Configuración Técnica

### 1. Formulario de Contacto
Integra con un servicio de formularios:

#### Formspree:
```html
<form action="https://formspree.io/f/tu-id" method="POST">
```

#### EmailJS:
```javascript
// En script.js
emailjs.send('tu_service_id', 'tu_template_id', formData)
```

### 2. Google Analytics
Añade en el `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_TRACKING_ID');
</script>
```

### 3. SEO
Actualiza metadatos en `index.html`:

```html
<title>Tu Nombre - Tu Profesión</title>
<meta name="description" content="Tu descripción profesional...">
<meta name="keywords" content="tus,palabras,clave">
```

## 🚀 Despliegue

### 1. Netlify
1. Conecta tu repositorio de GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

### 2. Vercel
```bash
npm install -g vercel
vercel --prod
```

### 3. GitHub Pages
1. Activa GitHub Pages en configuración del repo
2. Selecciona la rama `main`
3. Tu sitio estará en `https://tu-usuario.github.io/portfolio`

## 📊 Optimización

### 1. Rendimiento
- Comprime imágenes con [TinyPNG](https://tinypng.com)
- Minifica CSS/JS con `npm run build`
- Usa WebP para imágenes modernas

### 2. SEO
- Genera sitemap.xml actualizado
- Configura Google Search Console
- Optimiza meta descriptions

### 3. Accesibilidad
- Verifica contraste de colores
- Añade alt text a imágenes
- Prueba navegación por teclado

## 🎯 Checklist de Personalización

- [ ] Información personal actualizada
- [ ] Enlaces sociales configurados
- [ ] Experiencia laboral añadida
- [ ] Habilidades técnicas actualizadas
- [ ] Proyectos personalizados
- [ ] Colores y tipografía ajustados
- [ ] Imágenes y favicon añadidos
- [ ] Formulario de contacto configurado
- [ ] SEO optimizado
- [ ] PWA configurado
- [ ] Analytics añadido
- [ ] Sitio desplegado

## 💡 Consejos Adicionales

1. **Mantén la simplicidad**: No sobrecargues con información
2. **Actualiza regularmente**: Añade nuevos proyectos y experiencias
3. **Optimiza para móvil**: Prueba en diferentes dispositivos
4. **Mide el rendimiento**: Usa Lighthouse para auditorías
5. **Backup regular**: Mantén copias de seguridad del código

¡Tu portfolio está listo para impresionar! 🚀