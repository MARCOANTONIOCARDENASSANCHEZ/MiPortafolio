import Phaser from 'phaser'
import { OfficeScene } from './scenes/OfficeScene'
import {
  INTERACTION_BRIDGE_REGISTRY_KEY,
  type InteractionBridge,
} from './interaction/interactionBridge'

// ============================================================================
// BEGIN AddPortfolio-0001
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Centralizar la configuración inicial de Phaser y el registro de escenas.
//
// Descripción:
// Define el tamaño lógico del mundo, la escala responsive, el renderer y
// Arcade Physics sin gravedad para la escena actual del portafolio.
// ============================================================================
export const GAME_SIZE = {
  width: 960,
  height: 540,
}

// ==========================================================================
// BEGIN AddPortfolio-0004
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Centralizar las opciones de renderizado pixel-art del juego.
//
// Descripción:
// Phaser desactiva el filtrado y redondea la Camera para conservar la nitidez
// de los tiles y sprites al escalar el Canvas dentro de React.
// ==========================================================================
export const RENDER_CONFIG = {
  pixelArt: true,
  antialias: false,
  roundPixels: true,
}
// ==========================================================================
// END AddPortfolio-0004
// ==========================================================================

// ============================================================================
// BEGIN AddPortfolio-0009
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Centralizar la visibilidad opcional de los cuerpos físicos de desarrollo.
//
// Descripción:
// El portafolio no muestra rectángulos de Collision en ejecución normal. El
// flag permite reactivar todos los overlays físicos desde un único lugar.
// ============================================================================
export const DEBUG_CONFIG = {
  physics: false,
} as const
// ============================================================================
// END AddPortfolio-0009
// ============================================================================

// ============================================================================
// BEGIN AddPortfolio-0010
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Entregar a la escena un bridge perteneciente a la instancia de PhaserGame.
//
// Descripción:
// El registro de Phaser transporta una referencia tipada durante preBoot. No
// se crea un EventBus global ni se reinicia Phaser cuando cambia React.
// ============================================================================
export function createGameConfig(
  parent: HTMLElement,
  interactionBridge: InteractionBridge,
): Phaser.Types.Core.GameConfig {
  return {
    type: Phaser.AUTO,
    parent,
    width: GAME_SIZE.width,
    height: GAME_SIZE.height,
    backgroundColor: '#101827',
    // ========================================================================
    // BEGIN AddPortfolio-0004
    // Autor: Marco Antonio Cárdenas Sánchez
    // Fecha: 2026-08-11
    //
    // Propósito:
    // Aplicar la configuración pixel-art al renderer y al Canvas.
    //
    // Descripción:
    // Estos valores mantienen nítidos los tiles y sprites al adaptarse al
    // contenedor responsive de React.
    // ========================================================================
    pixelArt: RENDER_CONFIG.pixelArt,
    roundPixels: RENDER_CONFIG.roundPixels,
    render: {
      antialias: RENDER_CONFIG.antialias,
      roundPixels: RENDER_CONFIG.roundPixels,
    },
    // ========================================================================
    // END AddPortfolio-0004
    // ========================================================================
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: 'arcade',
      arcade: {
        // ==================================================================
        // BEGIN AddPortfolio-0002
        // Autor: Marco Antonio Cárdenas Sánchez
        // Fecha: 2026-08-11
        //
        // Propósito:
        // Mantener la visualización de Physics disponible para desarrollo.
        //
        // Descripción:
        // Los cuerpos dinámicos y estáticos ayudan a verificar límites y
        // obstáculos cuando DEBUG_CONFIG.physics se activa explícitamente.
        // ==================================================================
        debug: DEBUG_CONFIG.physics,
        debugShowBody: DEBUG_CONFIG.physics,
        debugShowStaticBody: DEBUG_CONFIG.physics,
        // ==================================================================
        // END AddPortfolio-0002
        // ==================================================================
        gravity: { x: 0, y: 0 },
      },
    },
    callbacks: {
      preBoot: (game) => {
        game.registry.set(INTERACTION_BRIDGE_REGISTRY_KEY, interactionBridge)
      },
    },
    scene: [OfficeScene],
  }
}
// ============================================================================
// END AddPortfolio-0010
// ============================================================================
// ============================================================================
// END AddPortfolio-0001
// ============================================================================
