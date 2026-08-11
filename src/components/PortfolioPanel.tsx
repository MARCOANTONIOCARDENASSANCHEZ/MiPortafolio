import type { InteractionTarget, InteractionType } from '../game/interaction/interactionTypes'

type PanelContent = {
  eyebrow: string
  title: string
  summary: string
  items: string[]
}

const PANEL_CONTENT: Record<InteractionType, PanelContent> = {
  about: {
    eyebrow: 'ABOUT / PLAYER PROFILE',
    title: 'El desarrollador detrás de la oficina',
    summary: 'Un espacio provisional para presentar trayectoria, enfoque y forma de construir productos digitales.',
    items: ['Frontend', 'Sistemas visuales', 'Experiencias web'],
  },
  projects: {
    eyebrow: 'PROJECTS / WORKSHOP',
    title: 'Proyectos en construcción',
    summary: 'Esta estación reservará el espacio para explorar proyectos seleccionados del portafolio.',
    items: ['Casos de estudio', 'Decisiones técnicas', 'Resultados'],
  },
  skills: {
    eyebrow: 'SKILLS / TOOLKIT',
    title: 'Herramientas y habilidades',
    summary: 'El whiteboard representa el punto donde se conectarán tecnologías, prácticas y áreas de especialidad.',
    items: ['React + TypeScript', 'Phaser', 'Diseño de interfaces'],
  },
  experience: {
    eyebrow: 'EXPERIENCE / LOGBOOK',
    title: 'Experiencia profesional',
    summary: 'Una estación provisional para organizar historial, responsabilidades y aprendizajes relevantes.',
    items: ['Trabajo colaborativo', 'Sistemas escalables', 'Entrega de producto'],
  },
  achievements: {
    eyebrow: 'ACHIEVEMENTS / TROPHY ROOM',
    title: 'Logros y reconocimientos',
    summary: 'El estante marca un espacio para hitos profesionales, certificaciones y reconocimientos futuros.',
    items: ['Hitos', 'Reconocimientos', 'Aprendizaje continuo'],
  },
  contact: {
    eyebrow: 'CONTACT / SAFE LOUNGE',
    title: 'Conectemos',
    summary: 'La zona lounge será el punto de contacto del portafolio cuando se conecten los canales correspondientes.',
    items: ['Colaboraciones', 'Consultas profesionales', 'Nuevas oportunidades'],
  },
}

// ============================================================================
// BEGIN AddPortfolio-0010
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Mostrar el panel provisional correspondiente al target seleccionado.
//
// Descripción:
// React controla exclusivamente esta ventana. El contenido es estático y no
// agrega funcionalidades de Projects, Skills, Experience o Contact todavía.
// ============================================================================
type PortfolioPanelProps = {
  target: InteractionTarget
  onClose: () => void
}

export function PortfolioPanel({ target, onClose }: PortfolioPanelProps) {
  const content = PANEL_CONTENT[target.type]

  return (
    <div className="portfolio-panel-backdrop">
      <section
        className="portfolio-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-panel-title"
        data-interaction-id={target.objectId}
      >
        <button
          className="portfolio-panel-close"
          type="button"
          onClick={onClose}
          aria-label="Cerrar panel"
        >
          X
        </button>
        <p className="panel-label">{content.eyebrow}</p>
        <h2 id="portfolio-panel-title">{content.title}</h2>
        <p className="portfolio-panel-summary">{content.summary}</p>
        <ul>
          {content.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="portfolio-panel-hint">{target.label} / PROVISIONAL PANEL</p>
      </section>
    </div>
  )
}
// ============================================================================
// END AddPortfolio-0010
// ============================================================================
