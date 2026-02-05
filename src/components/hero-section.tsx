'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Download, Mail } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/constants'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  const fullText = 'Desarrollando soluciones robustas con tecnologías modernas'

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    if (isTyping && displayText.length < fullText.length) {
      timeoutId = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1))
      }, 100)
    } else if (displayText.length === fullText.length) {
      setIsTyping(false)
    }

    return () => clearTimeout(timeoutId)
  }, [displayText, isTyping, fullText])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen min-h-[100svh] flex items-center justify-center bg-gradient-primary"
    >

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-2 animate-fade-in">
                Hola, soy
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-slide-up">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/80 mb-6 animate-slide-up">
                {PERSONAL_INFO.title}
              </h2>
            </div>

            <div className="mb-8 h-16 flex items-center justify-center lg:justify-start">
              <p className="text-lg md:text-xl text-primary-foreground/80 animate-slide-in-left">
                {displayText}
                <span className={`ml-1 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}>|</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <Button
                onClick={() => scrollToSection('proyectos')}
                size="lg"
                className="group"
              >
                Ver Proyectos
                <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('contacto')}
                variant="outline"
                size="lg"
                className="group bg-primary-foreground/10 border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary"
              >
                <Mail className="mr-2 w-4 h-4" />
                Contactar
              </Button>
            </div>
          </div>

          {/* Avatar/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
              <div className="text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-bold">
                {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('sobre-mi')}
          className="flex flex-col items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}

export default HeroSection