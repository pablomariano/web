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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-lg md:text-xl text-blue-100 mb-2 animate-fade-in">
                Hola, soy
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-6 animate-slide-up">
                {PERSONAL_INFO.title}
              </h2>
            </div>

            <div className="mb-8 h-16 flex items-center justify-center lg:justify-start">
              <p className="text-lg md:text-xl text-blue-100 animate-slide-in-left">
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
                className="group bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
              >
                <Mail className="mr-2 w-4 h-4" />
                Contactar
              </Button>
            </div>
          </div>

          {/* Avatar/Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center animate-float">
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
                    {PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent-300 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => scrollToSection('sobre-mi')}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}

export default HeroSection