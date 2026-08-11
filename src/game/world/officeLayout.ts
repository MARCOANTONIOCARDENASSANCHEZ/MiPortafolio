import Phaser from 'phaser'

// ============================================================================
// BEGIN AddPortfolio-0001
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Dibujar una oficina provisional sin depender de assets externos.
//
// Descripción:
// Este módulo concentra los límites visuales de la sala, el suelo, la
// cuadrícula, los elementos decorativos y las etiquetas de la oficina para
// facilitar su sustitución posterior por sprites u objetos del mundo.
// ============================================================================
// ============================================================================
// BEGIN AddPortfolio-0002
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Convertir el layout provisional en un World mayor que el viewport.
//
// Descripción:
// Mantiene la oficina generada con Graphics, pero centraliza las dimensiones
// del mundo y las definiciones visuales que también utilizará Collision.
// ============================================================================
export type WorldBounds = {
  x: number
  y: number
  width: number
  height: number
}

export type OfficeObstacle = {
  x: number
  y: number
  width: number
  height: number
}

export const WORLD_BOUNDS: WorldBounds = {
  x: 48,
  y: 48,
  width: 1824,
  height: 984,
}

type OfficeProp = {
  x: number
  y: number
  width: number
  height: number
  color: number
  accent?: number
}

const OFFICE_PROPS: OfficeProp[] = [
  { x: 180, y: 170, width: 300, height: 92, color: 0x34445d, accent: 0x70e1c1 },
  { x: 1440, y: 160, width: 290, height: 108, color: 0x2d3c54, accent: 0xffd166 },
  { x: 190, y: 760, width: 270, height: 82, color: 0x34445d, accent: 0xb18cff },
  { x: 1450, y: 750, width: 250, height: 86, color: 0x34445d, accent: 0x70e1c1 },
  { x: 800, y: 390, width: 320, height: 76, color: 0x2d3c54, accent: 0xffd166 },
]

export const OFFICE_OBSTACLES: OfficeObstacle[] = OFFICE_PROPS.map(({ x, y, width, height }) => ({
  x: x + width / 2,
  y: y + height / 2,
  width,
  height,
}))

function drawProp(graphics: Phaser.GameObjects.Graphics, prop: OfficeProp) {
  graphics.fillStyle(0x182236, 1)
  graphics.fillRoundedRect(prop.x + 5, prop.y + 7, prop.width, prop.height, 8)
  graphics.fillStyle(prop.color, 1)
  graphics.fillRoundedRect(prop.x, prop.y, prop.width, prop.height, 8)

  if (prop.accent) {
    graphics.fillStyle(prop.accent, 1)
    graphics.fillRect(prop.x + 16, prop.y + 14, prop.width - 32, 5)
  }
}

export function createOfficeLayout(scene: Phaser.Scene) {
  const graphics = scene.add.graphics()

  graphics.fillStyle(0x182236, 1)
  graphics.fillRect(0, 0, 1920, 1080)
  graphics.fillStyle(0x26364c, 1)
  graphics.fillRect(WORLD_BOUNDS.x, WORLD_BOUNDS.y, WORLD_BOUNDS.width, WORLD_BOUNDS.height)

  graphics.lineStyle(3, 0x526984, 1)
  graphics.strokeRect(WORLD_BOUNDS.x, WORLD_BOUNDS.y, WORLD_BOUNDS.width, WORLD_BOUNDS.height)
  graphics.lineStyle(1, 0x354b66, 0.45)

  for (let x = WORLD_BOUNDS.x + 32; x < WORLD_BOUNDS.x + WORLD_BOUNDS.width; x += 64) {
    graphics.lineBetween(x, WORLD_BOUNDS.y + 2, x, WORLD_BOUNDS.y + WORLD_BOUNDS.height - 2)
  }

  for (let y = WORLD_BOUNDS.y + 32; y < WORLD_BOUNDS.y + WORLD_BOUNDS.height; y += 64) {
    graphics.lineBetween(WORLD_BOUNDS.x + 2, y, WORLD_BOUNDS.x + WORLD_BOUNDS.width - 2, y)
  }

  for (const prop of OFFICE_PROPS) {
    drawProp(graphics, prop)
  }

  graphics.fillStyle(0x70e1c1, 0.16)
  graphics.fillRoundedRect(840, 180, 240, 60, 8)
  graphics.lineStyle(2, 0x70e1c1, 0.7)
  graphics.strokeRoundedRect(840, 180, 240, 60, 8)

  graphics.fillStyle(0xffd166, 1)
  graphics.fillCircle(1730, 560, 24)
  graphics.fillStyle(0x6bd3a9, 1)
  graphics.fillTriangle(1730, 542, 1710, 510, 1730, 532)
  graphics.fillTriangle(1730, 542, 1750, 510, 1730, 532)
  graphics.fillTriangle(1730, 542, 1730, 500, 1730, 532)

  scene.add
    .text(870, 196, 'PROJECTS', {
      color: '#a8f5df',
      fontFamily: 'monospace',
      fontSize: '13px',
      fontStyle: 'bold',
    })
    .setDepth(2)

  scene.add
    .text(72, 68, 'OFFICE // 01', {
      color: '#93a8c1',
      fontFamily: 'monospace',
      fontSize: '12px',
    })
    .setDepth(2)
}
// ============================================================================
// END AddPortfolio-0002
// ============================================================================
// ============================================================================
// END AddPortfolio-0001
// ============================================================================
