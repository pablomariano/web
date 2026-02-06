'use client'

import { useState, useEffect, useRef } from 'react'
import { SKILLS } from '@/lib/constants'
import type { Skill } from '@/lib/types'
import * as SimpleIcons from 'simple-icons'

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getIconSvg = (iconName: string) => {
    try {
      const icon = (SimpleIcons as any)[`si${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`]
      return icon?.svg || null
    } catch (error) {
      console.warn(`Icon ${iconName} not found in simple-icons`)
      return null
    }
  }

  const SkillIcon = ({ skill, index }: { skill: Skill; index: number }) => {
    const iconSvg = getIconSvg(skill.iconName)
    
    if (!iconSvg) return null

    return (
      <div 
        className="skill-icon-container flex-shrink-0 mx-4 group"
        style={{ 
          animationDelay: `${index * 0.1}s`
        }}
      >
        <div className="skill-icon-wrapper relative">
          <div 
            className="skill-icon w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
            style={{ 
              backgroundColor: `${skill.color}15`,
              border: `2px solid ${skill.color}30`
            }}
          >
            <div 
              className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
              style={{ color: skill.color }}
              dangerouslySetInnerHTML={{ __html: iconSvg }}
            />
          </div>
          <div className="skill-name absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs md:text-sm font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {skill.name}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="habilidades" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">
            Tecnologías y herramientas que domino
          </p>
        </div>

        {/* Carrusel de iconos */}
        <div className="skills-carousel-container relative overflow-hidden">
          <div className="skills-carousel flex items-center animate-carousel">
            {/* Primera ronda de iconos */}
            {SKILLS.map((skill, index) => (
              <SkillIcon key={`first-${skill.name}`} skill={skill} index={index} />
            ))}
            {/* Segunda ronda para efecto infinito */}
            {SKILLS.map((skill, index) => (
              <SkillIcon key={`second-${skill.name}`} skill={skill} index={index} />
            ))}
          </div>
          
          {/* Gradientes laterales para efecto fade */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-muted/30 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-muted/30 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Información adicional simplificada */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Especializado en desarrollo full-stack con enfoque en arquitecturas sólidas, 
              código limpio y mejores prácticas de desarrollo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection