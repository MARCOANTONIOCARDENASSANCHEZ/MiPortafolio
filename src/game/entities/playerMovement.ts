import Phaser from 'phaser'

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
  player: Phaser.Physics.Arcade.Sprite,
  direction: Phaser.Math.Vector2,
) {
  player.setVelocity(direction.x * PLAYER_SPEED, direction.y * PLAYER_SPEED)
  player.setDepth(player.y)
}
// ============================================================================
// END AddPortfolio-0002
// ============================================================================
