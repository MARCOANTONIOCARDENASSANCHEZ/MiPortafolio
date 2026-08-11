import { useEffect, useRef } from 'react'
import Phaser from 'phaser'
import { createGameConfig } from './config'
import type { InteractionBridge } from './interaction/interactionBridge'
import type { InteractionTarget } from './interaction/interactionTypes'

// ============================================================================
// BEGIN AddPortfolio-0001
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Integrar la instancia de Phaser dentro del árbol de React.
//
// Descripción:
// Este adaptador entrega un elemento DOM a Phaser, controla el ciclo de vida
// de Phaser.Game y garantiza su destrucción cuando el componente se desmonta.
// ============================================================================
type PhaserGameProps = {
  onInteractionOpen: (target: InteractionTarget) => void
}

// ============================================================================
// BEGIN AddPortfolio-0010
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Mantener Phaser montado mientras entrega interacciones puntuales a React.
//
// Descripción:
// El callback se conserva en un ref para que React pueda cambiar el panel sin
// recrear Phaser.Game. El bridge se crea una sola vez por instancia montada.
// ============================================================================
export function PhaserGame({ onInteractionOpen }: PhaserGameProps) {
  const gameContainerRef = useRef<HTMLDivElement>(null)
  const onInteractionOpenRef = useRef(onInteractionOpen)

  useEffect(() => {
    onInteractionOpenRef.current = onInteractionOpen
  }, [onInteractionOpen])

  useEffect(() => {
    const parent = gameContainerRef.current

    if (!parent) {
      return
    }

    const interactionBridge: InteractionBridge = {
      openPanel: (target) => onInteractionOpenRef.current(target),
    }
    const game = new Phaser.Game(createGameConfig(parent, interactionBridge))

    return () => {
      game.destroy(true)
    }
  }, [])

  return <div ref={gameContainerRef} className="phaser-container" aria-label="Mundo interactivo del portafolio" />
}
// ============================================================================
// END AddPortfolio-0010
// ============================================================================
// ============================================================================
// END AddPortfolio-0001
// ============================================================================
