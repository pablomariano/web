'use server'

import { ContactFormData } from './types'

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        success: false,
        message: 'Todos los campos son obligatorios'
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Por favor ingresa un email válido'
      }
    }

    // Here you would typically send the email using a service like:
    // - Nodemailer
    // - SendGrid
    // - Resend
    // - Formspree
    
    // For now, we'll simulate a successful submission
    console.log('Contact form submitted:', data)
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return {
      success: true,
      message: '¡Mensaje enviado correctamente! Te contactaré pronto.'
    }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return {
      success: false,
      message: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.'
    }
  }
}