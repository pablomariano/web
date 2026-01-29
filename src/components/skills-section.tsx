'use client'

import { useState, useEffect, useRef } from 'react'
import { Server, Monitor, Database, Settings } from 'lucide-react'
import { SKILLS } from '@/lib/constants'
import type { Skill } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills with staggered delay
          SKILLS.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => new Set([...prev, skill.name]))
            }, index * 100)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  const categoryConfig = {
    backend: {
      title: 'Backend',
      icon: Server,
      color: 'from-blue-500 to-blue-600'
    },
    frontend: {
      title: 'Frontend',
      icon: Monitor,
      color: 'from-green-500 to-green-600'
    },
    database: {
      title: 'Base de Datos',
      icon: Database,
      color: 'from-purple-500 to-purple-600'
    },
    tools: {
      title: 'Herramientas',
      icon: Settings,
      color: 'from-orange-500 to-orange-600'
    }
  }

  const SkillBar = ({ skill }: { skill: Skill }) => {
    const isAnimated = animatedSkills.has(skill.name)
    
    return (
      <div className="mb-6 last:mb-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
          <span className="text-sm text-gray-500">{skill.level}%</span>
        </div>
        <Progress 
          value={isAnimated ? skill.level : 0} 
          className="h-3"
        />
      </div>
    )
  }

  return (
    <section id="habilidades" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">
            Tecnologías y herramientas que domino
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categoryConfig).map(([category, config], categoryIndex) => {
            const categorySkills = skillsByCategory[category] || []
            const IconComponent = config.icon
            
            return (
              <Card 
                key={category}
                className="group hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${config.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="group-hover:text-primary transition-colors">
                      {config.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {categorySkills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Enfoque en Calidad y Mejores Prácticas
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Mi experiencia se basa en la implementación de arquitecturas sólidas, código limpio, 
              testing automatizado y metodologías ágiles. Siempre busco mantenerme actualizado 
              con las últimas tendencias y mejores prácticas del desarrollo de software.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: 'Arquitectura MVC',
                  description: 'Separación clara de responsabilidades'
                },
                {
                  title: 'Testing',
                  description: 'Pruebas unitarias e integración'
                },
                {
                  title: 'Código Limpio',
                  description: 'Principios SOLID y buenas prácticas'
                }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection