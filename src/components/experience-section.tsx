'use client'

import { Calendar, MapPin, ChevronRight } from 'lucide-react'
import { EXPERIENCES } from '@/lib/constants'

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Experiencia Profesional</h2>
          <p className="section-subtitle">
            Mi trayectoria en el desarrollo de software
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary-200" />

            {/* Experience Items */}
            <div className="space-y-12">
              {EXPERIENCES.map((experience, index) => (
                <div 
                  key={experience.id} 
                  className="relative group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Marker */}
                  <div className="timeline-marker group-hover:bg-primary-700 transition-colors duration-300" />

                  {/* Content Card */}
                  <div className="ml-12 md:ml-16">
                    <div className="card group-hover:shadow-xl group-hover:border-primary-200 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                            {experience.title}
                          </h3>
                          <div className="flex items-center text-primary-600 font-medium mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            {experience.company}
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4 mr-1" />
                          {experience.period}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Logros principales:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                              <ChevronRight className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      {experience.technologies && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Tecnologías utilizadas:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium border border-primary-200 hover:bg-primary-100 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-primary rounded-2xl text-white">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">¿Interesado en colaborar?</h3>
              <p className="text-blue-100 mb-4">
                Estoy disponible para nuevos proyectos y oportunidades
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contacto')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn bg-white text-primary-600 hover:bg-gray-100 font-semibold"
              >
                Hablemos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection