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
export const ROOM_BOUNDS = {
  x: 44,
  y: 44,
  width: 872,
  height: 452,
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
  { x: 130, y: 140, width: 226, height: 74, color: 0x34445d, accent: 0x70e1c1 },
  { x: 610, y: 128, width: 188, height: 92, color: 0x2d3c54, accent: 0xffd166 },
  { x: 210, y: 348, width: 190, height: 64, color: 0x34445d, accent: 0xb18cff },
]

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
  graphics.fillRect(0, 0, 960, 540)
  graphics.fillStyle(0x26364c, 1)
  graphics.fillRect(ROOM_BOUNDS.x, ROOM_BOUNDS.y, ROOM_BOUNDS.width, ROOM_BOUNDS.height)

  graphics.lineStyle(3, 0x526984, 1)
  graphics.strokeRect(ROOM_BOUNDS.x, ROOM_BOUNDS.y, ROOM_BOUNDS.width, ROOM_BOUNDS.height)
  graphics.lineStyle(1, 0x354b66, 0.45)

  for (let x = ROOM_BOUNDS.x + 28; x < ROOM_BOUNDS.x + ROOM_BOUNDS.width; x += 32) {
    graphics.lineBetween(x, ROOM_BOUNDS.y + 2, x, ROOM_BOUNDS.y + ROOM_BOUNDS.height - 2)
  }

  for (let y = ROOM_BOUNDS.y + 28; y < ROOM_BOUNDS.y + ROOM_BOUNDS.height; y += 32) {
    graphics.lineBetween(ROOM_BOUNDS.x + 2, y, ROOM_BOUNDS.x + ROOM_BOUNDS.width - 2, y)
  }

  for (const prop of OFFICE_PROPS) {
    drawProp(graphics, prop)
  }

  graphics.fillStyle(0x70e1c1, 0.16)
  graphics.fillRoundedRect(470, 112, 145, 54, 8)
  graphics.lineStyle(2, 0x70e1c1, 0.7)
  graphics.strokeRoundedRect(470, 112, 145, 54, 8)

  graphics.fillStyle(0xffd166, 1)
  graphics.fillCircle(850, 390, 18)
  graphics.fillStyle(0x6bd3a9, 1)
  graphics.fillTriangle(850, 375, 836, 350, 850, 367)
  graphics.fillTriangle(850, 375, 864, 350, 850, 367)
  graphics.fillTriangle(850, 375, 850, 343, 850, 367)

  scene.add
    .text(492, 126, 'PROJECTS', {
      color: '#a8f5df',
      fontFamily: 'monospace',
      fontSize: '13px',
      fontStyle: 'bold',
    })
    .setDepth(2)

  scene.add
    .text(68, 62, 'OFFICE // 01', {
      color: '#93a8c1',
      fontFamily: 'monospace',
      fontSize: '12px',
    })
    .setDepth(2)
}
// ============================================================================
// END AddPortfolio-0001
// ============================================================================
