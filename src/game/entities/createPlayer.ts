import Phaser from 'phaser'
import { applyDepthSorting } from '../rendering/depthSorting'

// ============================================================================
// BEGIN AddPortfolio-0001
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Crear el Player provisional y su textura generada en memoria.
//
// Descripción:
// El módulo encapsula la creación del sprite físico, sus límites, arrastre,
// velocidad máxima y cuerpo de colisión para que los assets reales puedan
// incorporarse sin trasladar esta responsabilidad a OfficeScene.
// ============================================================================
const PLAYER_TEXTURE_KEY = 'placeholder-player'

function createPlayerTexture(scene: Phaser.Scene) {
  if (scene.textures.exists(PLAYER_TEXTURE_KEY)) {
    return
  }

  const graphics = scene.add.graphics()

  graphics.fillStyle(0x172033, 1)
  graphics.fillRoundedRect(3, 3, 26, 36, 7)
  graphics.fillStyle(0x70e1c1, 1)
  graphics.fillRoundedRect(7, 7, 18, 18, 5)
  graphics.fillStyle(0xf5c9a9, 1)
  graphics.fillCircle(16, 15, 6)
  graphics.fillStyle(0xffd166, 1)
  graphics.fillRect(6, 25, 20, 9)
  graphics.fillStyle(0x172033, 1)
  graphics.fillRect(8, 34, 6, 4)
  graphics.fillRect(18, 34, 6, 4)
  graphics.generateTexture(PLAYER_TEXTURE_KEY, 32, 40)
  graphics.destroy()
}

export function createPlayer(scene: Phaser.Scene, x: number, y: number) {
  createPlayerTexture(scene)

  const player = scene.physics.add.sprite(x, y, PLAYER_TEXTURE_KEY)
  // ========================================================================
  // BEGIN AddPortfolio-0004
  // Autor: Marco Antonio Cárdenas Sánchez
  // Fecha: 2026-08-11
  //
  // Propósito:
  // Aplicar al Player la estrategia común de profundidad dinámica.
  //
  // Descripción:
  // La lógica visual deja de depender de un depth fijo y queda preparada para
  // convivir con muebles y futuros objetos dinámicos del World.
  // ========================================================================
  applyDepthSorting(player)
  // ========================================================================
  // END AddPortfolio-0004
  // ========================================================================
  player.setCollideWorldBounds(true)
  player.setDrag(900, 900)
  player.setMaxVelocity(150, 150)

  if (player.body) {
    player.body.setSize(20, 18)
    player.body.setOffset(6, 19)
  }

  return player
}
// ============================================================================
// END AddPortfolio-0001
// ============================================================================
