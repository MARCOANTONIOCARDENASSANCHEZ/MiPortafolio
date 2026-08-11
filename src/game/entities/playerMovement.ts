import Phaser from 'phaser'
import { getPlayerDirection } from './playerVisual'
import { updatePlayerVisual, type Player } from './playerVisual'

// ============================================================================
// BEGIN AddPortfolio-0002
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Mantener el movimiento del Player separado de la escena.
//
// Descripción:
// La velocidad se expresa en píxeles por segundo mediante Arcade Physics,
// haciendo que el movimiento sea independiente del frame rate y permitiendo
// sustituir la textura por un Sprite animado sin cambiar esta lógica.
// ============================================================================
export const PLAYER_SPEED = 150

export function updatePlayerMovement(
  player: Player,
  direction: Phaser.Math.Vector2,
) {
  player.setVelocity(direction.x * PLAYER_SPEED, direction.y * PLAYER_SPEED)
  // ========================================================================
  // BEGIN AddPortfolio-0004
  // Autor: Marco Antonio Cárdenas Sánchez
  // Fecha: 2026-08-11
  //
  // Propósito histórico:
  // Mantener el orden visual común durante el movimiento del Player.
  //
  // Descripción histórica:
  // AddPortfolio-0004 centralizó el Depth sorting. AddPortfolio-0005 conserva
  // esa integración dentro del nuevo flujo visual del Player.
  // ========================================================================
  // ========================================================================
  // BEGIN AddPortfolio-0005
  // Autor: Marco Antonio Cárdenas Sánchez
  // Fecha: 2026-08-11
  //
  // Propósito:
  // Actualizar Direction, Animation y Shadow desde el movimiento real.
  //
  // Descripción:
  // El Player conserva la última dirección cuando direction está detenido y
  // cambia entre idle y walk sin duplicar lógica en OfficeScene.
  // ========================================================================
  updatePlayerVisual(
    player,
    getPlayerDirection(direction, player.direction),
    direction.lengthSq() > 0,
  )
  // ========================================================================
  // END AddPortfolio-0005
  // ========================================================================
  // ========================================================================
  // END AddPortfolio-0004
  // ========================================================================
}
// ============================================================================
// END AddPortfolio-0002
// ============================================================================
