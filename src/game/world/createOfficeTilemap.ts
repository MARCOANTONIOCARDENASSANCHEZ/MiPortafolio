import Phaser from 'phaser'
import { TILE_SIZE, TILEMAP_SIZE, WORLD_BOUNDS } from './worldConfig'

const TILESET_TEXTURE_KEY = 'placeholder-tileset'
const TILESET_NAME = 'office-placeholder'

const TILE_INDEX = {
  ground: 0,
  wall: 1,
  decoration: 2,
}

export type OfficeTilemap = {
  map: Phaser.Tilemaps.Tilemap
  ground: Phaser.Tilemaps.TilemapLayer
  walls: Phaser.Tilemaps.TilemapLayer
  decoration: Phaser.Tilemaps.TilemapLayer
}

// ============================================================================
// BEGIN AddPortfolio-0004
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Crear un Tilemap provisional con capas separadas para el World.
//
// Descripción:
// La matriz y el tileset se generan localmente para validar la integración sin
// assets externos. La forma de creación es compatible con la futura sustitución
// por un Tilemap JSON exportado desde Tiled.
// ============================================================================
function createPlaceholderTileset(scene: Phaser.Scene) {
  if (scene.textures.exists(TILESET_TEXTURE_KEY)) {
    return
  }

  const graphics = scene.add.graphics()

  graphics.fillStyle(0x26364c, 1)
  graphics.fillRect(0, 0, TILE_SIZE, TILE_SIZE)
  graphics.lineStyle(1, 0x354b66, 0.45)
  graphics.strokeRect(0, 0, TILE_SIZE, TILE_SIZE)

  graphics.fillStyle(0x526984, 1)
  graphics.fillRect(TILE_SIZE, 0, TILE_SIZE, TILE_SIZE)
  graphics.fillStyle(0x354b66, 1)
  graphics.fillRect(TILE_SIZE + 2, 4, TILE_SIZE - 4, 8)
  graphics.fillRect(TILE_SIZE + 2, 20, TILE_SIZE - 4, 8)

  graphics.fillStyle(0x30445a, 1)
  graphics.fillRect(TILE_SIZE * 2, 0, TILE_SIZE, TILE_SIZE)
  graphics.fillStyle(0x70e1c1, 1)
  graphics.fillCircle(TILE_SIZE * 2 + 16, 16, 5)

  graphics.fillStyle(0x1d2b40, 1)
  graphics.fillRect(TILE_SIZE * 3, 0, TILE_SIZE, TILE_SIZE)
  graphics.fillStyle(0xffd166, 1)
  graphics.fillRect(TILE_SIZE * 3 + 12, 7, 8, 18)

  graphics.generateTexture(TILESET_TEXTURE_KEY, TILE_SIZE * 4, TILE_SIZE)
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
  createPlaceholderTileset(scene)

  const map = scene.make.tilemap({
    width: TILEMAP_SIZE.width,
    height: TILEMAP_SIZE.height,
    tileWidth: TILE_SIZE,
    tileHeight: TILE_SIZE,
  })
  const tileset = map.addTilesetImage(
    TILESET_NAME,
    TILESET_TEXTURE_KEY,
    TILE_SIZE,
    TILE_SIZE,
  )

  if (!tileset) {
    throw new Error('No se pudo crear el tileset provisional del World.')
  }

  const ground = requireLayer(
    map.createBlankLayer(
      'Ground',
      tileset,
      WORLD_BOUNDS.x,
      WORLD_BOUNDS.y,
      TILEMAP_SIZE.width,
      TILEMAP_SIZE.height,
      TILE_SIZE,
      TILE_SIZE,
    ),
    'Ground',
  )
  const walls = requireLayer(
    map.createBlankLayer(
      'Walls',
      tileset,
      WORLD_BOUNDS.x,
      WORLD_BOUNDS.y,
      TILEMAP_SIZE.width,
      TILEMAP_SIZE.height,
      TILE_SIZE,
      TILE_SIZE,
    ),
    'Walls',
  )
  const decoration = requireLayer(
    map.createBlankLayer(
      'Decoration',
      tileset,
      WORLD_BOUNDS.x,
      WORLD_BOUNDS.y,
      TILEMAP_SIZE.width,
      TILEMAP_SIZE.height,
      TILE_SIZE,
      TILE_SIZE,
    ),
    'Decoration',
  )

  ground.fill(TILE_INDEX.ground)

  for (let tileX = 0; tileX < TILEMAP_SIZE.width; tileX += 1) {
    walls.putTileAt(TILE_INDEX.wall, tileX, 0)
    walls.putTileAt(TILE_INDEX.wall, tileX, TILEMAP_SIZE.height - 1)
  }

  for (let tileY = 1; tileY < TILEMAP_SIZE.height - 1; tileY += 1) {
    walls.putTileAt(TILE_INDEX.wall, 0, tileY)
    walls.putTileAt(TILE_INDEX.wall, TILEMAP_SIZE.width - 1, tileY)
  }

  decoration.putTileAt(TILE_INDEX.decoration, 5, 5)
  decoration.putTileAt(TILE_INDEX.decoration, 50, 23)
  decoration.putTileAt(TILE_INDEX.decoration, 48, 6)

  ground.setDepth(0)
  walls.setDepth(20)
  decoration.setDepth(30)

  return { map, ground, walls, decoration }
}
// ============================================================================
// END AddPortfolio-0004
// ============================================================================
