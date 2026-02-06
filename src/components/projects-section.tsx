'use client'

import { ExternalLink, Github, Star, ChevronRight } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ProjectsSection = () => {
  const featuredProjects = PROJECTS.filter(project => project.featured)
  const otherProjects = PROJECTS.filter(project => !project.featured)

  const ProjectCard = ({ project, featured = false }: { project: typeof PROJECTS[0], featured?: boolean }) => {
    return (
      <AccordionItem 
        value={project.id}
        className={`group border-none ${featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
      >
        <div className="card group-hover:shadow-xl group-data-[state=open]:shadow-xl group-hover:border-primary/30 group-data-[state=open]:border-primary/50 transition-all duration-300">
          
          {/* Accordion Trigger - Project Header */}
          <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]>div>div>h3]:text-primary">
            <div className="flex items-start justify-between w-full text-left">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-foreground transition-colors">
                    {project.title}
                  </h3>
                  {featured && (
                    <div className="ml-2 flex items-center">
                      <Star className="w-4 h-4 text-accent fill-current" />
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies Preview */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      +{project.technologies.length - 4} más
                    </span>
                  )}
                </div>
              </div>
            </div>
          </AccordionTrigger>

          {/* Accordion Content - Expanded Details */}
          <AccordionContent className="pt-6 pb-0">
            {/* All Technologies */}
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <div className="w-4 h-4 bg-primary/20 rounded mr-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                Stack tecnológico completo
              </h4>
              <div className="flex flex-wrap gap-2 ml-6">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <ChevronRight className="w-4 h-4 text-primary mr-2" />
                Características principales
              </h4>
              <ul className="space-y-3 ml-6">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="border-t border-border pt-6">
              <div className="flex gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </a>
                )}
              </div>
            </div>
          </AccordionContent>
        </div>
      </AccordionItem>
    )
  }

  return (
    <section id="proyectos" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">
            Algunos de mis trabajos más representativos
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Star className="w-6 h-6 text-accent fill-current mr-2" />
              Proyecto Destacado
            </h3>
            <Accordion type="multiple" className="space-y-8">
              {featuredProjects.map((project, index) => (
                <div key={project.id} style={{ animationDelay: `${index * 200}ms` }}>
                  <ProjectCard project={project} featured />
                </div>
              ))}
            </Accordion>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Otros Proyectos
            </h3>
            <Accordion type="multiple" className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <div key={project.id} style={{ animationDelay: `${(index + featuredProjects.length) * 200}ms` }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </Accordion>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Me especializo en crear soluciones web robustas y escalables. 
              Desde APIs hasta interfaces de usuario, puedo ayudarte a llevar tu idea al siguiente nivel.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contacto')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn btn-primary text-lg px-8 py-4"
            >
              Trabajemos Juntos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection