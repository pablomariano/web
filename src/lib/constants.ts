import { PersonalInfo, Experience, Skill, Project } from './types'

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Pablo Andrés Mariano M.',
  title: 'Analista Programador Computacional',
  email: 'pablo.mariano@email.com',
  phone: '+56 9 XXXX XXXX',
  location: 'Chile',
  linkedin: 'https://linkedin.com/in/tu-perfil',
  github: 'https://github.com/tu-usuario'
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'r9-ingenieria',
    title: 'Desarrollador Full-Stack',
    company: 'R9 Ingeniería',
    period: '2023 - Presente',
    description: 'Desarrollo de sistemas de gestión empresarial y soluciones web personalizadas.',
    achievements: [
      'Implementación de APIs RESTful con Laravel',
      'Desarrollo de interfaces modernas con React/TypeScript',
      'Optimización de consultas SQL y rendimiento de bases de datos',
      'Integración de sistemas legacy con tecnologías modernas'
    ],
    technologies: ['PHP', 'Laravel', 'React', 'TypeScript', 'MySQL']
  },
  {
    id: 'municipalidad',
    title: 'Analista de Sistemas',
    company: 'Municipalidad',
    period: '2022 - 2023',
    description: 'Análisis, desarrollo y mantención de sistemas municipales críticos.',
    achievements: [
      'Modernización de sistemas de gestión municipal',
      'Desarrollo de reportes y dashboards analíticos',
      'Capacitación de usuarios en nuevas tecnologías',
      'Migración de datos y procesos digitales'
    ],
    technologies: ['PHP', 'SQL Server', 'JavaScript', 'Crystal Reports']
  },
  {
    id: 'meditrack',
    title: 'Proyecto de Título',
    company: 'MediTrack',
    period: '2022',
    description: 'Sistema integral de gestión médica con Laravel 12 + React 19 + TypeScript.',
    achievements: [
      'Arquitectura MVC robusta y escalable',
      'Sistema de autenticación y autorización completo',
      'Dashboard analítico con métricas en tiempo real',
      'API RESTful documentada con Swagger'
    ],
    technologies: ['Laravel 12', 'React 19', 'TypeScript', 'Inertia.js', 'MySQL']
  }
]

export const SKILLS: Skill[] = [
  // Backend
  { 
    name: 'PHP', 
    level: 95, 
    category: 'backend',
    iconName: 'php',
    color: '#777BB4'
  },
  { 
    name: 'Laravel', 
    level: 90, 
    category: 'backend',
    iconName: 'laravel',
    color: '#FF2D20'
  },
  { 
    name: 'Node.js', 
    level: 75, 
    category: 'backend',
    iconName: 'nodedotjs',
    color: '#339933'
  },
  { 
    name: 'API REST', 
    level: 90, 
    category: 'backend',
    iconName: 'fastapi',
    color: '#009688'
  },
  
  // Frontend
  { 
    name: 'React', 
    level: 85, 
    category: 'frontend',
    iconName: 'react',
    color: '#61DAFB'
  },
  { 
    name: 'TypeScript', 
    level: 80, 
    category: 'frontend',
    iconName: 'typescript',
    color: '#3178C6'
  },
  { 
    name: 'JavaScript', 
    level: 90, 
    category: 'frontend',
    iconName: 'javascript',
    color: '#F7DF1E'
  },
  { 
    name: 'Next.js', 
    level: 75, 
    category: 'frontend',
    iconName: 'nextdotjs',
    color: '#000000'
  },
  { 
    name: 'Tailwind CSS', 
    level: 85, 
    category: 'frontend',
    iconName: 'tailwindcss',
    color: '#06B6D4'
  },
  { 
    name: 'Inertia.js', 
    level: 80, 
    category: 'frontend',
    iconName: 'inertia',
    color: '#9553E9'
  },
  
  // Database
  { 
    name: 'MySQL', 
    level: 90, 
    category: 'database',
    iconName: 'mysql',
    color: '#4479A1'
  },
  { 
    name: 'SQL Server', 
    level: 85, 
    category: 'database',
    iconName: 'microsoftsqlserver',
    color: '#CC2927'
  },
  { 
    name: 'PostgreSQL', 
    level: 70, 
    category: 'database',
    iconName: 'postgresql',
    color: '#336791'
  },
  
  // Tools
  { 
    name: 'Git', 
    level: 85, 
    category: 'tools',
    iconName: 'git',
    color: '#F05032'
  },
  { 
    name: 'Docker', 
    level: 75, 
    category: 'tools',
    iconName: 'docker',
    color: '#2496ED'
  },
  { 
    name: 'Testing', 
    level: 80, 
    category: 'tools',
    iconName: 'jest',
    color: '#C21325'
  },
  { 
    name: 'Composer', 
    level: 85, 
    category: 'tools',
    iconName: 'composer',
    color: '#885630'
  }
]

export const PROJECTS: Project[] = [
  {
    id: 'meditrack',
    title: 'MediTrack',
    description: 'Sistema integral de gestión médica desarrollado como proyecto de título. Incluye gestión de pacientes, citas, historiales médicos y dashboard analítico.',
    technologies: ['Laravel 12', 'React 19', 'TypeScript', 'Inertia.js', 'MySQL', 'Tailwind CSS'],
    features: [
      'Gestión completa de pacientes y citas médicas',
      'Historiales médicos digitales seguros',
      'Dashboard analítico con métricas en tiempo real',
      'Sistema de notificaciones automáticas',
      'API RESTful documentada',
      'Autenticación y autorización por roles'
    ],
    featured: true,
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'sistema-municipal',
    title: 'Sistema de Gestión Municipal',
    description: 'Modernización del sistema de gestión municipal con nuevas funcionalidades y interfaz mejorada.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Crystal Reports'],
    features: [
      'Gestión de trámites ciudadanos',
      'Reportes automatizados',
      'Dashboard administrativo',
      'Integración con sistemas externos'
    ],
    featured: false
  },
  {
    id: 'dashboard-analitico',
    title: 'Dashboard Analítico',
    description: 'Dashboard interactivo para análisis de datos empresariales con visualizaciones dinámicas.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Laravel API'],
    features: [
      'Visualizaciones interactivas de datos',
      'Filtros dinámicos y exportación',
      'Actualizaciones en tiempo real',
      'Responsive design'
    ],
    featured: false
  }
]

export const NAVIGATION_ITEMS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' }
]