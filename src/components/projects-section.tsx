'use client'

import { useState } from 'react'
import { ExternalLink, Github, Star, ChevronRight } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const featuredProjects = PROJECTS.filter(project => project.featured)
  const otherProjects = PROJECTS.filter(project => !project.featured)

  const ProjectCard = ({ project, featured = false }: { project: typeof PROJECTS[0], featured?: boolean }) => {
    const isSelected = selectedProject === project.id
    
    return (
      <div 
        className={`card group cursor-pointer transition-all duration-300 ${
          featured ? 'md:col-span-2 lg:col-span-1' : ''
        } ${isSelected ? 'ring-2 ring-primary-500 shadow-xl' : 'hover:shadow-xl hover:border-primary-200'}`}
        onClick={() => setSelectedProject(isSelected ? null : project.id)}
      >
        {/* Project Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              {featured && (
                <div className="ml-2 flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                </div>
              )}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <ChevronRight 
            className={`w-5 h-5 text-gray-400 ml-4 transition-transform duration-300 ${
              isSelected ? 'rotate-90' : 'group-hover:translate-x-1'
            }`} 
          />
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech}
                className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium border border-primary-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                +{project.technologies.length - 4} más
              </span>
            )}
          </div>
        </div>

        {/* Expanded Content */}
        {isSelected && (
          <div className="border-t border-gray-200 pt-4 mt-4 animate-slide-up">
            {/* All Technologies */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Tecnologías completas:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">Características principales:</h4>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <ChevronRight className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
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
        )}
      </div>
    )
  }

  return (
    <section id="proyectos" className="section-padding bg-white">
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Star className="w-6 h-6 text-yellow-500 fill-current mr-2" />
              Proyecto Destacado
            </h3>
            <div className="grid gap-8">
              {featuredProjects.map((project, index) => (
                <div key={project.id} style={{ animationDelay: `${index * 200}ms` }}>
                  <ProjectCard project={project} featured />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Otros Proyectos
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <div key={project.id} style={{ animationDelay: `${(index + featuredProjects.length) * 200}ms` }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
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