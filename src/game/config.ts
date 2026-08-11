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

export function createGameConfig(parent: HTMLElement): Phaser.Types.Core.GameConfig {
  return {
    type: Phaser.AUTO,
    parent,
    width: GAME_SIZE.width,
    height: GAME_SIZE.height,
    backgroundColor: '#101827',
    pixelArt: true,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { x: 0, y: 0 },
      },
    },
    scene: [OfficeScene],
  }
}
// ============================================================================
// END AddPortfolio-0001
// ============================================================================
