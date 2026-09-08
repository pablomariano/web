'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    const desktop = matchMedia('(min-width: 901px)')
    const closeOnDesktop = ({ matches }: MediaQueryListEvent) => {
      if (matches) setIsOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen)
    return () => document.body.classList.remove('nav-open')
  }, [isOpen])

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="Pablo Mariano, inicio">
          PAM<span>/</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav className={`site-nav${isOpen ? ' is-open' : ''}`} id="nav-menu" aria-label="Principal">
          <a href="#trabajo" onClick={() => setIsOpen(false)}>Proyectos</a>
          <a href="#perfil" onClick={() => setIsOpen(false)}>Perfil</a>
          <a href="#experiencia" onClick={() => setIsOpen(false)}>Experiencia</a>
          <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
        </nav>

        <p className="location"><span aria-hidden="true" /> Chile · Remoto</p>
      </div>
      <div className="scroll-progress" aria-hidden="true" />
    </header>
  )
}
