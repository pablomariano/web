export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies?: string[]
}

export interface Skill {
  name: string
  level: number
  category: 'backend' | 'frontend' | 'tools' | 'database'
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  features: string[]
  demoUrl?: string
  githubUrl?: string
  imageUrl?: string
  featured: boolean
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}