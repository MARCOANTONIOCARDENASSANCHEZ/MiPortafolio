import { useEffect, useRef } from 'react'
import Phaser from 'phaser'
import { createGameConfig } from './config'

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
export function PhaserGame() {
  const gameContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const parent = gameContainerRef.current

    if (!parent) {
      return
    }

    const game = new Phaser.Game(createGameConfig(parent))

    return () => {
      game.destroy(true)
    }
  }, [])

  return <div ref={gameContainerRef} className="phaser-container" aria-label="Mundo interactivo del portafolio" />
}
// ============================================================================
// END AddPortfolio-0001
// ============================================================================
