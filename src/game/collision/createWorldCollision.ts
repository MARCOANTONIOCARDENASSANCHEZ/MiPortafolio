import Phaser from 'phaser'
import { OFFICE_OBJECTS } from '../world/officeLayoutData'
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
// World y un StaticGroup para obstáculos. La colección puede crecer mediante
// OFFICE_OBJECTS sin duplicar la composición visual.
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
  // ========================================================================
  // BEGIN AddPortfolio-0006
  // Autor: Marco Antonio Cárdenas Sánchez
  // Fecha: 2026-08-11
  //
  // Propósito:
  // Crear Collision usando el área inferior declarada por cada Office Object.
  //
  // Descripción:
  // El body se centra en y - collision.height / 2 porque y representa baseY.
  // Así los muebles pueden tener volumen visual superior sin bloquearlo todo.
  // ========================================================================
  createCollisionTexture(scene)

  const obstacles = scene.physics.add.staticGroup()

  for (const objectDefinition of OFFICE_OBJECTS) {
    if (!objectDefinition.collision) {
      continue
    }

    const obstacle = obstacles.create(
      objectDefinition.x,
      objectDefinition.y - objectDefinition.collision.height / 2,
      COLLISION_TEXTURE_KEY,
    ) as Phaser.Physics.Arcade.Image

    obstacle.setVisible(false)

    if (obstacle.body) {
      obstacle.body.setSize(
        objectDefinition.collision.width,
        objectDefinition.collision.height,
        true,
      )
    }
  }

  scene.physics.add.collider(player, obstacles)

  return obstacles
  // ========================================================================
  // END AddPortfolio-0006
  // ========================================================================
}
// ============================================================================
// END AddPortfolio-0002
// ============================================================================
