import type { ReactNode } from 'react'
import type { InteractionTarget, InteractionType } from '../game/interaction/interactionTypes'
import { portfolioData } from '../data/portfolioData'
import {
  AboutPanelContent,
  AchievementsPanelContent,
  ContactPanelContent,
  ExperiencePanelContent,
  ProjectsPanelContent,
  SkillsPanelContent,
} from './panels/PortfolioPanelContent'

type PanelContentComponent = () => ReactNode

const PANEL_CONTENT: Record<InteractionType, PanelContentComponent> = {
  about: AboutPanelContent,
  projects: ProjectsPanelContent,
  skills: SkillsPanelContent,
  experience: ExperiencePanelContent,
  achievements: AchievementsPanelContent,
  contact: ContactPanelContent,
}

// ============================================================================
// BEGIN AddPortfolio-0011
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Convertir PortfolioPanel en una shell común para contenido data-driven.
//
// Descripción:
// La shell administra overlay, encabezado, cierre y accesibilidad. Cada zona
// delega su contenido a un renderer específico conectado con portfolioData.
// ============================================================================
type PortfolioPanelProps = {
  target: InteractionTarget
  onClose: () => void
}

export function PortfolioPanel({ target, onClose }: PortfolioPanelProps) {
  const panelData = portfolioData[target.type]
  const Content = PANEL_CONTENT[target.type]

  return (
    <div className="portfolio-panel-backdrop">
      <section
        className="portfolio-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-panel-title"
        data-interaction-id={target.objectId}
      >
        <header className="portfolio-panel-header">
          <div>
            <p className="panel-label">{panelData.eyebrow}</p>
            <h2 id="portfolio-panel-title">{panelData.title}</h2>
          </div>
          <button
            className="portfolio-panel-close"
            type="button"
            onClick={onClose}
            aria-label="Cerrar panel"
          >
            X
          </button>
        </header>
        <Content />
      </section>
    </div>
  )
}
// ============================================================================
// END AddPortfolio-0011
// ============================================================================
