'use client'

import { Code, Database, Laptop, Rocket } from 'lucide-react'

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Backend Especializado',
      description: 'Desarrollo robusto con PHP/Laravel, implementando APIs RESTful y arquitecturas escalables'
    },
    {
      icon: Database,
      title: 'Gestión de Datos',
      description: 'Diseño y optimización de bases de datos SQL, análisis de datos y reporting avanzado'
    },
    {
      icon: Laptop,
      title: 'Frontend Moderno',
      description: 'Interfaces dinámicas con React, TypeScript e Inertia.js para experiencias fluidas'
    },
    {
      icon: Rocket,
      title: 'Transformación Digital',
      description: 'Modernización de procesos empresariales y migración a tecnologías actuales'
    }
  ]

  return (
    <section id="sobre-mi" className="section-padding bg-muted bg-opacity-30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-subtitle">
            Perfil técnico enfocado en soluciones robustas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Como <span className="font-semibold text-primary">Analista Programador Computacional</span>, 
              me especializo en el desarrollo de sistemas de gestión empresarial utilizando arquitecturas MVC 
              sólidas y tecnologías modernas.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Mi experiencia abarca desde el desarrollo backend con PHP/Laravel hasta la creación de 
              interfaces modernas con React y TypeScript. Me enfoco en crear soluciones escalables, 
              mantenibles y que aporten valor real a los procesos de negocio.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['PHP/Laravel', 'React/TypeScript', 'MySQL', 'API REST', 'Git'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm font-medium border border-primary border-opacity-30 hover:bg-opacity-30 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <div 
                  key={highlight.title}
                  className="card group hover:border-primary-200 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '3+', label: 'Años de Experiencia' },
            { number: '15+', label: 'Proyectos Completados' },
            { number: '8+', label: 'Tecnologías Dominadas' },
            { number: '100%', label: 'Compromiso' }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection