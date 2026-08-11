import Phaser from 'phaser'
import { OFFICE_OBSTACLES } from '../world/officeLayout'
import type { WorldBounds } from '../world/worldConfig'

const COLLISION_TEXTURE_KEY = 'placeholder-collision'

// ============================================================================
// BEGIN AddPortfolio-0002
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Concentrar los límites externos y los obstáculos sólidos provisionales.
//
// Descripción:
// El sistema utiliza el límite invisible de Arcade Physics para el borde del
// World y un StaticGroup para algunos obstáculos. La colección puede crecer
// posteriormente con paredes, escritorios, estantes y otros objetos sólidos.
// ============================================================================
function createCollisionTexture(scene: Phaser.Scene) {
  if (scene.textures.exists(COLLISION_TEXTURE_KEY)) {
    return
  }

  const graphics = scene.add.graphics()
  graphics.fillStyle(0xffffff, 1)
  graphics.fillRect(0, 0, 2, 2)
  graphics.generateTexture(COLLISION_TEXTURE_KEY, 2, 2)
  graphics.destroy()
}

export function configureWorldBounds(scene: Phaser.Scene, bounds: WorldBounds) {
  scene.physics.world.setBounds(bounds.x, bounds.y, bounds.width, bounds.height)
}

export function createWorldCollision(
  scene: Phaser.Scene,
  player: Phaser.Physics.Arcade.Sprite,
) {
  createCollisionTexture(scene)

  const obstacles = scene.physics.add.staticGroup()

  for (const obstacleDefinition of OFFICE_OBSTACLES) {
    const obstacle = obstacles.create(
      obstacleDefinition.x,
      obstacleDefinition.y,
      COLLISION_TEXTURE_KEY,
    ) as Phaser.Physics.Arcade.Image

    obstacle.setVisible(false)

    if (obstacle.body) {
      obstacle.body.setSize(obstacleDefinition.width, obstacleDefinition.height, true)
    }
  }

  scene.physics.add.collider(player, obstacles)

  return obstacles
}
// ============================================================================
// END AddPortfolio-0002
// ============================================================================
