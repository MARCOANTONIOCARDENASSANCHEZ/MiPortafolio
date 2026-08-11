import Phaser from 'phaser'
import type { WorldBounds } from '../world/officeLayout'

// ============================================================================
// BEGIN AddPortfolio-0002
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Configurar una Camera top-down que siga al Player dentro del World.
//
// Descripción:
// Los valores de zoom y lerp viven en este módulo para poder ajustarse sin
// repartir parámetros por OfficeScene. Los límites evitan que el viewport
// muestre espacio fuera del mundo.
// ============================================================================
export const CAMERA_CONFIG = {
  zoom: 1,
  lerpX: 0.12,
  lerpY: 0.12,
}

export function configureCamera(
  scene: Phaser.Scene,
  target: Phaser.GameObjects.GameObject,
  bounds: WorldBounds,
) {
  return scene.cameras.main
    .setBounds(bounds.x, bounds.y, bounds.width, bounds.height)
    .setZoom(CAMERA_CONFIG.zoom)
    .startFollow(target, true, CAMERA_CONFIG.lerpX, CAMERA_CONFIG.lerpY)
}
// ============================================================================
// END AddPortfolio-0002
// ============================================================================
