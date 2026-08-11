import Phaser from 'phaser'
import { DEPTH_CONFIG } from '../rendering/depthSorting'
import {
  OFFICE_ASSET_MANIFEST,
  OFFICE_PALETTE,
  OFFICE_TILE_KEYS,
  OFFICE_TILESET_TEXTURE_KEY,
  OFFICE_TILE_INDEX,
} from './officeAssetCatalog'
import { TILE_SIZE, TILEMAP_SIZE, WORLD_BOUNDS } from './worldConfig'

const PLACEHOLDER_TILESET_TEXTURE_KEY = 'placeholder-tileset'
const TILESET_NAME = 'office-placeholder'
const TILESET_TILE_COUNT = 6

export type OfficeTilemap = {
  map: Phaser.Tilemaps.Tilemap
  ground: Phaser.Tilemaps.TilemapLayer
  walls: Phaser.Tilemaps.TilemapLayer
  wallUpper: Phaser.Tilemaps.TilemapLayer
  decoration: Phaser.Tilemaps.TilemapLayer
}

// ==========================================================================
// BEGIN AddPortfolio-0004
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito histórico:
// Crear un Tilemap provisional con capas separadas para el World.
//
// Descripción histórica:
// AddPortfolio-0004 generaba un tileset mínimo y las capas Ground, Walls y
// Decoration. AddPortfolio-0006 conservó esa base y añadió catálogo, alfombra,
// separación Wall Base / Wall Upper y una composición más reconocible.
// ==========================================================================
// ==========================================================================
// BEGIN AddPortfolio-0006
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Construir las capas Tilemap de la oficina provisional.
//
// Descripción:
// Los tiles se generan localmente para validar repetición, escala y capas sin
// cargar archivos inexistentes. El contrato de capas puede reemplazarse por un
// mapa JSON de Tiled sin cambiar Player, Camera, Collision o React.
// ==========================================================================
function createPlaceholderTileset(scene: Phaser.Scene) {
  if (scene.textures.exists(PLACEHOLDER_TILESET_TEXTURE_KEY)) {
    return
  }

  const graphics = scene.add.graphics()

  graphics.fillStyle(OFFICE_PALETTE.floorWood, 1)
  graphics.fillRect(0, 0, TILE_SIZE, TILE_SIZE)
  graphics.lineStyle(1, OFFICE_PALETTE.floorWoodLine, 0.45)
  graphics.lineBetween(0, TILE_SIZE - 5, TILE_SIZE, TILE_SIZE - 5)

  graphics.fillStyle(OFFICE_PALETTE.floorCarpet, 1)
  graphics.fillRect(TILE_SIZE, 0, TILE_SIZE, TILE_SIZE)
  graphics.lineStyle(1, OFFICE_PALETTE.accentMint, 0.35)
  graphics.strokeRect(TILE_SIZE + 3, 3, TILE_SIZE - 6, TILE_SIZE - 6)

  graphics.fillStyle(OFFICE_PALETTE.wallBase, 1)
  graphics.fillRect(TILE_SIZE * 2, 0, TILE_SIZE, TILE_SIZE)
  graphics.fillStyle(OFFICE_PALETTE.wallShadow, 1)
  graphics.fillRect(TILE_SIZE * 2, 19, TILE_SIZE, 13)

  graphics.fillStyle(OFFICE_PALETTE.wallTop, 1)
  graphics.fillRect(TILE_SIZE * 3, 0, TILE_SIZE, TILE_SIZE)
  graphics.fillStyle(OFFICE_PALETTE.wallHighlight, 1)
  graphics.fillRect(TILE_SIZE * 3, 0, TILE_SIZE, 7)
  graphics.fillStyle(OFFICE_PALETTE.wallShadow, 1)
  graphics.fillRect(TILE_SIZE * 3, 25, TILE_SIZE, 7)

  graphics.fillStyle(OFFICE_PALETTE.wallCorner, 1)
  graphics.fillRect(TILE_SIZE * 4, 0, TILE_SIZE, TILE_SIZE)
  graphics.fillStyle(OFFICE_PALETTE.wallHighlight, 1)
  graphics.fillRect(TILE_SIZE * 4, 0, TILE_SIZE, 7)
  graphics.fillStyle(OFFICE_PALETTE.wallShadow, 1)
  graphics.fillRect(TILE_SIZE * 4 + 20, 7, 12, TILE_SIZE - 7)

  graphics.fillStyle(OFFICE_PALETTE.furnitureWoodLight, 1)
  graphics.fillRect(TILE_SIZE * 5, 0, TILE_SIZE, TILE_SIZE)
  graphics.fillStyle(OFFICE_PALETTE.wallShadow, 1)
  graphics.fillRect(TILE_SIZE * 5 + 4, 4, TILE_SIZE - 8, TILE_SIZE - 4)
  graphics.fillStyle(OFFICE_PALETTE.accentGold, 1)
  graphics.fillRect(TILE_SIZE * 5 + 10, 9, 12, 4)

  graphics.generateTexture(
    PLACEHOLDER_TILESET_TEXTURE_KEY,
    TILE_SIZE * TILESET_TILE_COUNT,
    TILE_SIZE,
  )
  graphics.destroy()
}

function requireLayer(
  layer: Phaser.Tilemaps.TilemapLayer | null,
  name: string,
) {
  if (!layer) {
    throw new Error(`No se pudo crear la capa de Tilemap ${name}.`)
  }

  return layer
}

export function createOfficeTilemap(scene: Phaser.Scene): OfficeTilemap {
  // ========================================================================
  // BEGIN AddPortfolio-0007
  // Autor: Marco Antonio Cárdenas Sánchez
  // Fecha: 2026-08-11
  //
  // Propósito:
  // Preferir el tileset real local y conservar un fallback único.
  //
  // Descripción:
  // El manifest declara si el asset tiene fallback procedural. La escena no
  // carga paths inexistentes y el Tilemap mantiene su contrato de capas.
  // ========================================================================
  const floorAsset = OFFICE_ASSET_MANIFEST[OFFICE_TILE_KEYS.floorWood]
  const hasRealTileset = scene.textures.exists(OFFICE_TILESET_TEXTURE_KEY)

  if (!hasRealTileset && floorAsset.fallback !== 'procedural') {
    throw new Error('El tileset del Office World no tiene fallback disponible.')
  }

  if (!hasRealTileset) {
    console.warn('Office Tileset no disponible; se usa el fallback procedural.')
    createPlaceholderTileset(scene)
  }

  const tilesetKey = hasRealTileset
    ? OFFICE_TILESET_TEXTURE_KEY
    : PLACEHOLDER_TILESET_TEXTURE_KEY
  const tilesetName = hasRealTileset ? OFFICE_TILESET_TEXTURE_KEY : TILESET_NAME
  // ========================================================================
  // END AddPortfolio-0007
  // ========================================================================

  const map = scene.make.tilemap({
    width: TILEMAP_SIZE.width,
    height: TILEMAP_SIZE.height,
    tileWidth: TILE_SIZE,
    tileHeight: TILE_SIZE,
  })
  const tileset = map.addTilesetImage(
    tilesetName,
    tilesetKey,
    TILE_SIZE,
    TILE_SIZE,
  )

  if (!tileset) {
    throw new Error('No se pudo crear el tileset provisional del World.')
  }

  const createLayer = (name: string) => requireLayer(
    map.createBlankLayer(
      name,
      tileset,
      WORLD_BOUNDS.x,
      WORLD_BOUNDS.y,
      TILEMAP_SIZE.width,
      TILEMAP_SIZE.height,
      TILE_SIZE,
      TILE_SIZE,
    ),
    name,
  )

  const ground = createLayer('Ground')
  const walls = createLayer('Walls')
  const wallUpper = createLayer('WallUpper')
  const decoration = createLayer('Decoration')

  ground.fill(OFFICE_TILE_INDEX.floorWood)
  ground.fill(OFFICE_TILE_INDEX.floorCarpet, 17, 12, 13, 5)
  ground.fill(OFFICE_TILE_INDEX.floorCarpet, 41, 22, 10, 4)

  for (let tileX = 0; tileX < TILEMAP_SIZE.width; tileX += 1) {
    walls.putTileAt(OFFICE_TILE_INDEX.wallBase, tileX, 0)
    walls.putTileAt(OFFICE_TILE_INDEX.wallBase, tileX, TILEMAP_SIZE.height - 1)
    wallUpper.putTileAt(OFFICE_TILE_INDEX.wallTop, tileX, 0)
  }

  for (let tileY = 1; tileY < TILEMAP_SIZE.height - 1; tileY += 1) {
    walls.putTileAt(OFFICE_TILE_INDEX.wallBase, 0, tileY)
    walls.putTileAt(OFFICE_TILE_INDEX.wallBase, TILEMAP_SIZE.width - 1, tileY)
  }

  walls.putTileAt(OFFICE_TILE_INDEX.wallCorner, 0, 0)
  walls.putTileAt(OFFICE_TILE_INDEX.wallCorner, TILEMAP_SIZE.width - 1, 0)
  wallUpper.putTileAt(OFFICE_TILE_INDEX.wallCorner, 0, 0)
  wallUpper.putTileAt(OFFICE_TILE_INDEX.wallCorner, TILEMAP_SIZE.width - 1, 0)
  decoration.putTileAt(OFFICE_TILE_INDEX.doorway, 28, TILEMAP_SIZE.height - 1)

  ground.setDepth(DEPTH_CONFIG.ground)
  walls.setDepth(DEPTH_CONFIG.walls)
  decoration.setDepth(DEPTH_CONFIG.decoration)
  wallUpper.setDepth(DEPTH_CONFIG.upperLayer)

  return { map, ground, walls, wallUpper, decoration }
}
// ==========================================================================
// END AddPortfolio-0006
// ==========================================================================
// ==========================================================================
// END AddPortfolio-0004
// ==========================================================================
