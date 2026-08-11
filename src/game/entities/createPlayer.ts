import Phaser from 'phaser'
import { createPlayerVisual, type Player, PLAYER_VISUAL_SIZE } from './playerVisual'

// ============================================================================
// BEGIN AddPortfolio-0001
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Crear el Player provisional y su textura generada en memoria.
//
// Descripción histórica:
// La implementación inicial encapsulaba aquí la creación del gráfico y del
// sprite físico. AddPortfolio-0005 conserva este módulo para Physics y mueve
// la representación visual a playerVisual.
// ============================================================================
export function createPlayer(scene: Phaser.Scene, x: number, y: number): Player {
  // ========================================================================
  // BEGIN AddPortfolio-0005
  // Autor: Marco Antonio Cárdenas Sánchez
  // Fecha: 2026-08-11
  //
  // Propósito:
  // Crear el Sprite visual reemplazable antes de configurar su Physics body.
  //
  // Descripción:
  // Player queda representado por un Arcade Sprite, mientras el placeholder y
  // las Animation states se mantienen fuera de esta función física.
  // ========================================================================
  const player = createPlayerVisual(scene, x, y)
  // ========================================================================
  // END AddPortfolio-0005
  // ========================================================================

  // ========================================================================
  // BEGIN AddPortfolio-0004
  // Autor: Marco Antonio Cárdenas Sánchez
  // Fecha: 2026-08-11
  //
  // Propósito:
  // Aplicar al Player la estrategia común de profundidad dinámica.
  //
  // Descripción histórica:
  // AddPortfolio-0004 trasladó el depth fijo a la estrategia común. En esta
  // versión la asignación se realiza en playerVisual junto con la Shadow.
  // ========================================================================
  // ========================================================================
  // END AddPortfolio-0004
  // ========================================================================
  player.setCollideWorldBounds(true)
  player.setDrag(900, 900)
  player.setMaxVelocity(150, 150)

  if (player.body) {
    player.body.setSize(18, 12)
    player.body.setOffset(9, PLAYER_VISUAL_SIZE.height - 17)
  }

  return player
}
// ==========================================================================
// END AddPortfolio-0001
// ==========================================================================
