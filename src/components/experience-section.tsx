'use client'

import { Calendar, MapPin, ChevronRight, Building2 } from 'lucide-react'
import { EXPERIENCES } from '@/lib/constants'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="section-padding bg-background">
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
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

            {/* Experience Items with Accordion */}
            <Accordion type="multiple" className="space-y-8">
              {EXPERIENCES.map((experience, index) => (
                <AccordionItem 
                  key={experience.id} 
                  value={experience.id}
                  className="relative group border-none"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Marker */}
                  <div className="timeline-marker group-hover:bg-primary group-data-[state=open]:bg-primary transition-colors duration-300" />

                  {/* Content Card */}
                  <div className="ml-12 md:ml-16">
                    <div className="card group-hover:shadow-xl group-data-[state=open]:shadow-xl group-hover:border-primary/30 group-data-[state=open]:border-primary/50 transition-all duration-300">
                      
                      {/* Accordion Trigger - Header */}
                      <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]>div>div>h3]:text-primary">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full text-left">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground mb-1 transition-colors">
                              {experience.title}
                            </h3>
                            <div className="flex items-center text-primary font-medium mb-2">
                              <Building2 className="w-4 h-4 mr-2" />
                              {experience.company}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-2" />
                              {experience.period}
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>

                      {/* Accordion Content - Details */}
                      <AccordionContent className="pt-6 pb-0">
                        {/* Description */}
                        <div className="mb-6">
                          <p className="text-muted-foreground leading-relaxed text-base">
                            {experience.description}
                          </p>
                        </div>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-4 flex items-center">
                            <ChevronRight className="w-4 h-4 text-primary mr-2" />
                            Logros principales
                          </h4>
                          <ul className="space-y-3 ml-6">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0" />
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        {experience.technologies && (
                          <div className="border-t border-border pt-6">
                            <h4 className="font-semibold text-foreground mb-4 flex items-center">
                              <div className="w-4 h-4 bg-primary/20 rounded mr-2 flex items-center justify-center">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                              </div>
                              Stack tecnológico
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech) => (
                                <span 
                                  key={tech}
                                  className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all duration-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </AccordionContent>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-primary rounded-2xl text-white">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">¿Interesado en colaborar?</h3>
              <p className="text-primary-foreground/80 mb-4">
                Estoy disponible para nuevos proyectos y oportunidades
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contacto')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
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