import Phaser from 'phaser'
import { createOfficeObjects } from './createOfficeObjects'
import { createOfficeTilemap, type OfficeTilemap } from './createOfficeTilemap'

export type OfficeWorld = {
  tilemap: OfficeTilemap
  objects: Phaser.GameObjects.Graphics[]
}

// ============================================================================
// BEGIN AddPortfolio-0004
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Construir el World visual de la OfficeScene.
//
// Descripción:
// Este punto de composición reúne Tilemap y objetos visuales sin incorporar
// Input, Camera, Collision ni futuras interacciones en el módulo del mundo.
// ============================================================================
export function createOfficeWorld(scene: Phaser.Scene): OfficeWorld {
  const tilemap = createOfficeTilemap(scene)
  const objects = createOfficeObjects(scene)

  return { tilemap, objects }
}
// ============================================================================
// END AddPortfolio-0004
// ============================================================================
