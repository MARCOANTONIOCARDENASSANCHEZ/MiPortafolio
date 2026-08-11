import Phaser from 'phaser'
import { createOfficeObjects } from './createOfficeObjects'
import { createOfficeTilemap, type OfficeTilemap } from './createOfficeTilemap'

export type OfficeWorld = {
  tilemap: OfficeTilemap
  objects: Phaser.GameObjects.Graphics[]
  upperObjects: Phaser.GameObjects.Graphics[]
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
// ============================================================================
// BEGIN AddPortfolio-0006
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Exponer las capas dinámicas y superiores de la composición de oficina.
//
// Descripción:
// OfficeWorld conserva el contrato visual histórico y ahora separa los objetos
// dinámicos de los elementos upper para que cada capa mantenga su Depth.
// ============================================================================
export function createOfficeWorld(scene: Phaser.Scene): OfficeWorld {
  const tilemap = createOfficeTilemap(scene)
  const visuals = createOfficeObjects(scene)

  return {
    tilemap,
    objects: visuals.dynamic,
    upperObjects: visuals.upper,
  }
}
// ============================================================================
// END AddPortfolio-0006
// ============================================================================
// ============================================================================
// END AddPortfolio-0004
// ============================================================================
