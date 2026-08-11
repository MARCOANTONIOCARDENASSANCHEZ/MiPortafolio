import { useEffect, useState } from 'react'
import { PhaserGame } from './game'
import type { InteractionTarget } from './game/interaction/interactionTypes'
import { PortfolioPanel } from './components/PortfolioPanel'
import './App.css'

// ============================================================================
// BEGIN AddPortfolio-0001
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Presentar la interfaz React inicial del portafolio y alojar el mundo Phaser.
//
// Descripción:
// Esta composición mantiene en React la cabecera, los paneles y las
// indicaciones de la interfaz, mientras Phaser se encarga exclusivamente del
// canvas interactivo de la oficina.
// ============================================================================
function App() {
  // ========================================================================
  // BEGIN AddPortfolio-0010
  // Autor: Marco Antonio Cárdenas Sánchez
  // Fecha: 2026-08-11
  //
  // Propósito:
  // Mantener en React el panel activo sin desmontar PhaserGame.
  //
  // Descripción:
  // Phaser entrega un InteractionTarget por el bridge. React solo administra
  // activePanel, su cierre y Escape; el juego continúa montado.
  // ========================================================================
  const [activePanel, setActivePanel] = useState<InteractionTarget | null>(null)

  useEffect(() => {
    if (!activePanel) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActivePanel(null)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [activePanel])
  // ========================================================================
  // END AddPortfolio-0010
  // ========================================================================

  return (
    <main className="portfolio-shell">
      <header className="portfolio-header">
        <div>
          <p className="eyebrow">PLAYER PROFILE / PORTFOLIO</p>
          <h1>Welcome to my office</h1>
          <p className="intro">Explora el mundo, conoce mis proyectos y encuentra la próxima misión.</p>
        </div>
        <div className="status-badge">
          <span className="status-dot" />
          <span>ONLINE</span>
          <strong>LVL. 01</strong>
        </div>
      </header>

      <section className="game-card" aria-label="Oficina interactiva">
        <div className="game-card-header">
          <span>WORLD MAP</span>
          <span className="coordinates">ROOM_01 / SAFE ZONE</span>
        </div>
        <div className="game-frame">
          <PhaserGame onInteractionOpen={(target) => setActivePanel(target)} />
        </div>
        <div className="game-card-footer">
          <span><kbd>W A S D</kbd> o <kbd>ARROWS</kbd> para moverte</span>
          <span className="footer-note">Más zonas desbloqueándose...</span>
        </div>
      </section>

      <section className="portfolio-panels" aria-label="Resumen del portafolio">
        <article>
          <p className="panel-label">CHARACTER CLASS</p>
          <h2>Frontend Adventurer</h2>
          <p>Interfaces, sistemas visuales y experiencias web con personalidad.</p>
        </article>
        <article>
          <p className="panel-label">ACTIVE QUEST</p>
          <h2>Construir mundos digitales</h2>
          <p>La oficina es el punto de partida. Las zonas ya tienen paneles provisionales.</p>
        </article>
      </section>
      {activePanel && (
        <PortfolioPanel
          target={activePanel}
          onClose={() => setActivePanel(null)}
        />
      )}
    </main>
  )
}

export default App
// ============================================================================
// END AddPortfolio-0001
// ============================================================================
