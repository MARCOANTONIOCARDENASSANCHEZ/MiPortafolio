import Phaser from 'phaser'
import { applyDepthSorting } from '../rendering/depthSorting'
import { OFFICE_OBSTACLES } from './officeLayout'

const FURNITURE_COLORS = [0x34445d, 0x2d3c54, 0x3c4662, 0x384e58, 0x3b4a62]
const FURNITURE_ACCENTS = [0x70e1c1, 0xffd166, 0xb18cff, 0x70e1c1, 0xffd166]

// ============================================================================
// BEGIN AddPortfolio-0004
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Crear muebles provisionales como objetos visuales con profundidad dinámica.
//
// Descripción:
// Cada objeto mantiene su representación visual separada del cuerpo de
// Collision. El punto inferior del mueble se utiliza para que el Player pueda
// quedar detrás al acercarse desde arriba y delante al pasar hacia abajo.
// ============================================================================
export function createOfficeObjects(scene: Phaser.Scene) {
  return OFFICE_OBSTACLES.map((obstacle, index) => {
    const graphics = scene.add.graphics()
    const visualHeight = obstacle.height + 24
    const baseY = obstacle.y + obstacle.height / 2

    graphics.setPosition(obstacle.x, baseY)
    graphics.fillStyle(0x182236, 1)
    graphics.fillRoundedRect(
      -obstacle.width / 2 + 6,
      -visualHeight + 8,
      obstacle.width,
      visualHeight,
      8,
    )
    graphics.fillStyle(FURNITURE_COLORS[index] ?? FURNITURE_COLORS[0], 1)
    graphics.fillRoundedRect(
      -obstacle.width / 2,
      -visualHeight,
      obstacle.width,
      visualHeight - 10,
      8,
    )
    graphics.fillStyle(FURNITURE_ACCENTS[index] ?? FURNITURE_ACCENTS[0], 1)
    graphics.fillRect(-obstacle.width / 2 + 16, -visualHeight + 14, obstacle.width - 32, 5)
    graphics.fillStyle(0x1b2638, 1)
    graphics.fillRect(-obstacle.width / 2, -18, obstacle.width, 18)

    applyDepthSorting(graphics, baseY)
    return graphics
  })
}
// ============================================================================
// END AddPortfolio-0004
// ============================================================================
