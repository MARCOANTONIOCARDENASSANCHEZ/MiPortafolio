import Phaser from 'phaser'
import {
  OFFICE_FURNITURE_FRAME,
  OFFICE_FURNITURE_PATH,
  OFFICE_FURNITURE_TEXTURE_KEY,
  OFFICE_TILESET_PATH,
  OFFICE_TILESET_TEXTURE_KEY,
} from './officeAssetCatalog'

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
  preloadOfficeFurniture(scene)
}
// ============================================================================
// END AddPortfolio-0007
// ============================================================================

// ============================================================================
// BEGIN AddPortfolio-0008
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Cargar el spritesheet local de Furniture sin llenar OfficeScene de llamadas.
//
// Descripción:
// Todos los objetos visuales comparten un único archivo y frames de 64 x 64 px.
// No se crea un AssetManager genérico ni se carga funcionalidad interactiva.
// ============================================================================
function preloadOfficeFurniture(scene: Phaser.Scene) {
  scene.load.spritesheet(OFFICE_FURNITURE_TEXTURE_KEY, OFFICE_FURNITURE_PATH, {
    frameWidth: OFFICE_FURNITURE_FRAME.width,
    frameHeight: OFFICE_FURNITURE_FRAME.height,
  })
}
// ============================================================================
// END AddPortfolio-0008
// ============================================================================
