import type { InteractionTarget } from './interactionTypes'

// ============================================================================
// BEGIN AddPortfolio-0010
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Transportar una interacción puntual desde la escena Phaser hacia React.
//
// Descripción:
// El bridge pertenece a una instancia de PhaserGame. No utiliza EventBus,
// window events ni estado global; React recibe únicamente el target seleccionado.
// ============================================================================
export type InteractionBridge = {
  openPanel: (target: InteractionTarget) => void
}

export const INTERACTION_BRIDGE_REGISTRY_KEY = 'portfolio-interaction-bridge'
// ============================================================================
// END AddPortfolio-0010
// ============================================================================
