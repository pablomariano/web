'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/constants'
import { submitContactForm } from '@/lib/actions'
import type { ContactFormData, ContactFormState } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formState, setFormState] = useState<ContactFormState>({
    status: 'idle'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setFormState({ status: 'loading' })
    
    try {
      const result = await submitContactForm(formData)
      
      if (result.success) {
        setFormState({ 
          status: 'success', 
          message: result.message 
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setFormState({ 
          status: 'error', 
          message: result.message 
        })
      }
    } catch (error) {
      setFormState({ 
        status: 'error', 
        message: 'Hubo un error inesperado. Por favor intenta nuevamente.' 
      })
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone}`,
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: PERSONAL_INFO.location,
      href: '#',
      color: 'text-red-600'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: PERSONAL_INFO.linkedin,
      color: 'text-blue-700 hover:text-blue-800'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: PERSONAL_INFO.github,
      color: 'text-gray-700 hover:text-gray-900'
    }
  ]

  return (
    <section id="contacto" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Estoy disponible para nuevos proyectos y oportunidades de colaboración. 
                No dudes en contactarme para discutir cómo puedo ayudarte a llevar tu idea al siguiente nivel.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 ${contact.color} bg-gray-50 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{contact.label}</div>
                      <div className="text-gray-600">{contact.value}</div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Sígueme en:</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-md hover:scale-110 ${social.color}`}
                      title={social.label}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                Envíame un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>

            {/* Status Messages */}
            {formState.status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-800">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-sm">{formState.message}</span>
              </div>
            )}

            {formState.status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-800">
                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-sm">{formState.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Tu nombre completo"
                  disabled={formState.status === 'loading'}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="tu@email.com"
                  disabled={formState.status === 'loading'}
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto *
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="¿En qué puedo ayudarte?"
                  disabled={formState.status === 'loading'}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  disabled={formState.status === 'loading'}
                  className="resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={formState.status === 'loading'}
                className="w-full text-lg py-6"
                size="lg"
              >
                {formState.status === 'loading' ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensaje
                  </div>
                )}
              </Button>
            </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection