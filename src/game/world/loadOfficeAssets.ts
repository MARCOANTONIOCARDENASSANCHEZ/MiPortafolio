import Phaser from 'phaser'
import { OFFICE_TILESET_PATH, OFFICE_TILESET_TEXTURE_KEY } from './officeAssetCatalog'

// ============================================================================
// BEGIN AddPortfolio-0007
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Cargar el primer asset real del Office World antes de crear el Tilemap.
//
// Descripción:
// La carga está limitada al tileset base propio del proyecto. Si el archivo no
// puede cargarse, createOfficeTilemap conserva un fallback procedural único.
// ============================================================================
export function preloadOfficeAssets(scene: Phaser.Scene) {
  scene.load.image(OFFICE_TILESET_TEXTURE_KEY, OFFICE_TILESET_PATH)
}
// ============================================================================
// END AddPortfolio-0007
// ============================================================================
