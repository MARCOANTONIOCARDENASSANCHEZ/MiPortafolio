import Phaser from 'phaser'
import { OfficeScene } from './scenes/OfficeScene'

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

export function createGameConfig(parent: HTMLElement): Phaser.Types.Core.GameConfig {
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
        // Habilitar la visualización de Physics únicamente durante desarrollo.
        //
        // Descripción:
        // Los cuerpos dinámicos y estáticos ayudan a verificar límites y
        // obstáculos sin exponer información de depuración en producción.
        // ==================================================================
        debug: import.meta.env.DEV,
        debugShowBody: import.meta.env.DEV,
        debugShowStaticBody: import.meta.env.DEV,
        // ==================================================================
        // END AddPortfolio-0002
        // ==================================================================
        gravity: { x: 0, y: 0 },
      },
    },
    scene: [OfficeScene],
  }
}
// ============================================================================
// END AddPortfolio-0001
// ============================================================================
