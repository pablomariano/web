import Navigation from '@/components/navigation'

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navigation />

      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Analista programador · Full-stack</p>
              <h1 id="hero-title">Construyo sistemas que hacen <em>simple</em> lo complejo.</h1>
              <p className="hero-intro">Transformo procesos operativos en productos digitales claros, mantenibles y listos para crecer.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#trabajo">Explorar proyectos <span aria-hidden="true">↘</span></a>
                <a className="button button-secondary" href="mailto:pablo.mariano@email.com">Escribirme <span aria-hidden="true">↗</span></a>
              </div>
            </div>

            <div className="hero-object" role="img" aria-label="Representación de un sistema digital construido por Pablo">
              <div className="object-orbit" aria-hidden="true" />
              <div className="system-card">
                <div className="system-card-top"><span>system.log</span><span className="live-dot">online</span></div>
                <p className="system-command"><span>&gt;</span> diseñar_una_solución()</p>
                <ul>
                  <li><span>01</span> Backend sólido</li>
                  <li><span>02</span> Interfaces claras</li>
                  <li><span>03</span> Producto mantenible</li>
                </ul>
                <div className="system-card-footer"><span>Laravel</span><span>React</span><span>TypeScript</span></div>
              </div>
            </div>
          </div>

          <a className="scroll-cue" href="#trabajo">Trabajo seleccionado <span aria-hidden="true">↓</span></a>
        </section>

        <section className="work section" id="trabajo" aria-labelledby="work-title">
          <div className="section-heading reveal">
            <p className="section-index">01 / Trabajo seleccionado</p>
            <h2 id="work-title">Menos promesas.<br />Más producto.</h2>
            <p>Casos que combinan lógica de negocio, datos e interfaces pensadas para el uso diario.</p>
          </div>

          <article className="featured-case">
            <div className="project-stage reveal">
              <div className="app-window" role="img" aria-label="Vista conceptual del panel de gestión médica MediTrack">
                <div className="window-bar"><span /><span /><span /><small>meditrack / dashboard</small></div>
                <div className="app-layout">
                  <aside aria-hidden="true"><b>M</b><i /><i /><i /><i /></aside>
                  <div className="app-content">
                    <div className="app-title"><span /><i /></div>
                    <div className="app-stats"><i /><i /><i /></div>
                    <div className="app-chart"><span /><span /><span /><span /><span /><span /><span /></div>
                    <div className="app-list"><i /><i /><i /></div>
                  </div>
                </div>
              </div>
              <span className="stage-label">Producto / Salud</span>
            </div>

            <div className="case-story">
              <p className="case-number">Caso 01</p>
              <h3>MediTrack</h3>
              <p className="case-lead">Un sistema integral para centralizar pacientes, citas, historiales y reportes médicos.</p>

              <div className="case-detail reveal">
                <span>Problema</span>
                <p>La información clínica y administrativa vivía en procesos separados, dificultando el seguimiento diario.</p>
              </div>
              <div className="case-detail reveal">
                <span>Enfoque</span>
                <p>Arquitectura MVC, roles claros y una interfaz que prioriza las tareas frecuentes del equipo.</p>
              </div>
              <div className="case-detail reveal">
                <span>Resultado</span>
                <p>Una operación unificada para gestionar el recorrido completo de cada paciente.</p>
              </div>

              <ul className="tag-list" aria-label="Tecnologías utilizadas">
                <li>Laravel</li><li>React</li><li>TypeScript</li><li>Inertia.js</li><li>MySQL</li>
              </ul>
              <p className="case-note">Detalles y demostración disponibles a solicitud.</p>
            </div>
          </article>

          <div className="project-grid">
            <article className="project-card reveal">
              <div className="project-art municipal-art" aria-hidden="true">
                <div className="municipal-building"><i /><i /><i /><i /><i /></div>
              </div>
              <div className="project-card-body">
                <p>02 · Gestión pública</p>
                <h3>Sistema de Gestión Municipal</h3>
                <span>Trámites y procesos administrativos en una plataforma centralizada.</span>
                <ul className="tag-list"><li>PHP</li><li>Laravel</li><li>MySQL</li></ul>
              </div>
            </article>

            <article className="project-card reveal">
              <div className="project-art analytics-art" aria-hidden="true">
                <div className="data-lines"><i /><i /><i /><i /><i /></div>
              </div>
              <div className="project-card-body">
                <p>03 · Datos</p>
                <h3>Dashboard Analítico</h3>
                <span>Reportes operativos convertidos en información fácil de interpretar.</span>
                <ul className="tag-list"><li>React</li><li>Laravel</li><li>PostgreSQL</li></ul>
              </div>
            </article>
          </div>
        </section>

        <section className="profile section" id="perfil" aria-labelledby="profile-title">
          <div className="section-heading reveal">
            <p className="section-index">02 / Perfil</p>
            <h2 id="profile-title">Tecnología al servicio de la operación.</h2>
          </div>

          <div className="profile-grid">
            <p className="profile-intro reveal">Trabajo entre producto y código: entiendo el proceso, reduzco la fricción y construyo una solución que el equipo pueda mantener.</p>
            <div className="capability-list">
              <article className="capability reveal"><span>01</span><h3>Backend</h3><p>APIs, reglas de negocio y datos consistentes.</p></article>
              <article className="capability reveal"><span>02</span><h3>Frontend</h3><p>Interfaces rápidas, accesibles y predecibles.</p></article>
              <article className="capability reveal"><span>03</span><h3>Modernización</h3><p>Evolución gradual de sistemas y procesos existentes.</p></article>
            </div>
          </div>
        </section>

        <section className="experience section" id="experiencia" aria-labelledby="experience-title">
          <div className="section-heading reveal">
            <p className="section-index">03 / Experiencia</p>
            <h2 id="experience-title">Experiencia aplicada.</h2>
          </div>

          <ol className="experience-list">
            <li className="reveal">
              <time dateTime="2023">2023—Hoy</time>
              <div><h3>Desarrollador Full-Stack</h3><p>R9 Ingeniería</p></div>
              <p>Sistemas de gestión, APIs e integración de tecnología moderna con plataformas existentes.</p>
            </li>
            <li className="reveal">
              <time dateTime="2022">2022—2023</time>
              <div><h3>Analista de Sistemas</h3><p>Municipalidad</p></div>
              <p>Digitalización de procesos, reportes analíticos y acompañamiento técnico a equipos.</p>
            </li>
            <li className="reveal">
              <time dateTime="2022">2022</time>
              <div><h3>Proyecto de Título</h3><p>MediTrack</p></div>
              <p>Diseño y desarrollo completo de un sistema de gestión para centros médicos.</p>
            </li>
          </ol>

          <div className="stack reveal">
            <p>Stack de trabajo</p>
            <div><span>PHP</span><span>Laravel</span><span>React</span><span>TypeScript</span><span>SQL</span><span>Docker</span><span>Git</span></div>
          </div>
        </section>

        <section className="contact section" id="contacto" aria-labelledby="contact-title">
          <p className="section-index reveal">04 / Contacto</p>
          <div className="contact-grid">
            <h2 id="contact-title" className="reveal">¿Tienes un sistema que necesita orden?</h2>
            <div className="contact-copy reveal">
              <p>Cuéntame qué proceso quieres mejorar y conversemos sobre una solución simple.</p>
              <a className="button button-light" href="mailto:pablo.mariano@email.com?subject=Conversemos%20sobre%20un%20proyecto">
                Escribir a Pablo <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#inicio" aria-label="Volver al inicio">PAM<span>/</span></a>
        <p>© 2026 Pablo Andrés Mariano M.</p>
        <a href="#inicio">Volver arriba <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  )
}
