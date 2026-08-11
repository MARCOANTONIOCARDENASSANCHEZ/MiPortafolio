import { TILE_SIZE } from './worldConfig'

export const OFFICE_TILESET_TEXTURE_KEY = 'office-tileset'
export const OFFICE_TILESET_PATH = new URL(
  '../../assets/tilesets/office/office-tileset.svg',
  import.meta.url,
).href
export const OFFICE_FURNITURE_TEXTURE_KEY = 'office-furniture'
export const OFFICE_FURNITURE_PATH = new URL(
  '../../assets/sprites/objects/office/office-furniture.svg',
  import.meta.url,
).href
export const OFFICE_FURNITURE_FRAME = { width: 64, height: 64 } as const

// ============================================================================
// BEGIN AddPortfolio-0006
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Centralizar los identificadores, manifest y colores provisionales del Office.
//
// Descripción:
// Los módulos visuales consumen estas claves en lugar de repetir strings. Los
// paths actuales y futuros permanecen centralizados para evitar acoplar escenas.
// ============================================================================
export const OFFICE_TILE_KEYS = {
  floorWood: 'floorWood',
  floorCarpet: 'floorCarpet',
  wallBase: 'wallBase',
  wallTop: 'wallTop',
  wallCorner: 'wallCorner',
  doorway: 'doorway',
} as const

export const OFFICE_OBJECT_KEYS = {
  desk: 'desk',
  pc: 'pc',
  chair: 'chair',
  bookshelf: 'bookshelf',
  projectTable: 'projectTable',
  experienceDesk: 'experienceDesk',
  sofa: 'sofa',
  coffeeTable: 'coffeeTable',
  whiteboard: 'whiteboard',
  plantSmall: 'plantSmall',
  plantLarge: 'plantLarge',
  lamp: 'lamp',
  trophyShelf: 'trophyShelf',
  phone: 'phone',
  filingCabinet: 'filingCabinet',
  door: 'door',
  rug: 'rug',
} as const

export type OfficeTileKey = (typeof OFFICE_TILE_KEYS)[keyof typeof OFFICE_TILE_KEYS]
export type OfficeObjectKey = (typeof OFFICE_OBJECT_KEYS)[keyof typeof OFFICE_OBJECT_KEYS]
export type OfficeAssetKey = OfficeTileKey | OfficeObjectKey

export const OFFICE_TILE_INDEX = {
  floorWood: 0,
  floorCarpet: 1,
  wallBase: 2,
  wallTop: 3,
  wallCorner: 4,
  doorway: 5,
} as const

export const OFFICE_PALETTE = {
  floorWood: 0x8a6046,
  floorWoodLine: 0x95674c,
  floorCarpet: 0x38556b,
  wallBase: 0x80533f,
  wallTop: 0xb97a59,
  wallCorner: 0x9b654e,
  wallShadow: 0x503548,
  wallHighlight: 0xd39b6e,
  furnitureDark: 0x2d2838,
  furnitureWood: 0x6f493c,
  furnitureWoodLight: 0x9b684e,
  metal: 0x697789,
  paper: 0xe4d2b8,
  plant: 0x4d8b68,
  plantLight: 0x78b77a,
  accentMint: 0x70e1c1,
  accentGold: 0xffd166,
  accentLilac: 0xb18cff,
  shadow: 0x1a1a27,
} as const

// ============================================================================
// BEGIN AddPortfolio-0008
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Declarar el contrato del spritesheet local de Furniture y sus áreas físicas.
//
// Descripción:
// Cada objeto comparte un spritesheet propio de frames de 64 x 64 px. La
// metadata de Collision describe la zona de apoyo real, no toda la silueta.
// ============================================================================
export const OFFICE_FURNITURE_FRAME_INDEX = {
  desk: 0,
  pc: 1,
  chair: 2,
  bookshelf: 3,
  projectTable: 4,
  experienceDesk: 5,
  sofa: 6,
  coffeeTable: 7,
  whiteboard: 8,
  plantSmall: 9,
  plantLarge: 10,
  lamp: 11,
  trophyShelf: 12,
  phone: 13,
  filingCabinet: 14,
  door: 15,
  rug: 16,
} as const

const OFFICE_OBJECT_COLLISION: Record<OfficeObjectKey, 'none' | 'data'> = {
  desk: 'data',
  pc: 'none',
  chair: 'data',
  bookshelf: 'data',
  projectTable: 'data',
  experienceDesk: 'data',
  sofa: 'data',
  coffeeTable: 'data',
  whiteboard: 'none',
  plantSmall: 'data',
  plantLarge: 'data',
  lamp: 'none',
  trophyShelf: 'data',
  phone: 'none',
  filingCabinet: 'data',
  door: 'none',
  rug: 'none',
}

const OFFICE_OBJECT_DEPTH_MODE: Record<OfficeObjectKey, 'dynamic' | 'upper'> = {
  desk: 'dynamic',
  pc: 'dynamic',
  chair: 'dynamic',
  bookshelf: 'dynamic',
  projectTable: 'dynamic',
  experienceDesk: 'dynamic',
  sofa: 'dynamic',
  coffeeTable: 'dynamic',
  whiteboard: 'upper',
  plantSmall: 'dynamic',
  plantLarge: 'dynamic',
  lamp: 'dynamic',
  trophyShelf: 'dynamic',
  phone: 'dynamic',
  filingCabinet: 'dynamic',
  door: 'upper',
  rug: 'dynamic',
}
// ============================================================================
// END AddPortfolio-0008
// ============================================================================

export type OfficeAssetManifest = {
  key: OfficeAssetKey
  type: 'tile' | 'object'
  path: string
  frame?: { width: number; height: number }
  tileIndex?: number
  spriteFrame?: number
  collision: 'none' | 'data'
  depthMode: 'static' | 'dynamic' | 'upper'
  source: 'real' | 'placeholder' | 'future'
  fallback: 'procedural' | null
}

export const OFFICE_ASSET_MANIFEST: Record<OfficeAssetKey, OfficeAssetManifest> = {
  floorWood: {
    key: OFFICE_TILE_KEYS.floorWood,
    type: 'tile',
    path: 'src/assets/tilesets/office/office-tileset.svg',
    frame: { width: TILE_SIZE, height: TILE_SIZE },
    tileIndex: OFFICE_TILE_INDEX.floorWood,
    collision: 'none',
    depthMode: 'static',
    source: 'real',
    fallback: 'procedural',
  },
  floorCarpet: {
    key: OFFICE_TILE_KEYS.floorCarpet,
    type: 'tile',
    path: 'src/assets/tilesets/office/office-tileset.svg',
    frame: { width: TILE_SIZE, height: TILE_SIZE },
    tileIndex: OFFICE_TILE_INDEX.floorCarpet,
    collision: 'none',
    depthMode: 'static',
    source: 'real',
    fallback: 'procedural',
  },
  wallBase: {
    key: OFFICE_TILE_KEYS.wallBase,
    type: 'tile',
    path: 'src/assets/tilesets/office/office-tileset.svg',
    frame: { width: TILE_SIZE, height: TILE_SIZE },
    tileIndex: OFFICE_TILE_INDEX.wallBase,
    collision: 'data',
    depthMode: 'static',
    source: 'real',
    fallback: 'procedural',
  },
  wallTop: {
    key: OFFICE_TILE_KEYS.wallTop,
    type: 'tile',
    path: 'src/assets/tilesets/office/office-tileset.svg',
    frame: { width: TILE_SIZE, height: TILE_SIZE },
    tileIndex: OFFICE_TILE_INDEX.wallTop,
    collision: 'none',
    depthMode: 'upper',
    source: 'real',
    fallback: 'procedural',
  },
  wallCorner: {
    key: OFFICE_TILE_KEYS.wallCorner,
    type: 'tile',
    path: 'src/assets/tilesets/office/office-tileset.svg',
    frame: { width: TILE_SIZE, height: TILE_SIZE },
    tileIndex: OFFICE_TILE_INDEX.wallCorner,
    collision: 'none',
    depthMode: 'upper',
    source: 'real',
    fallback: 'procedural',
  },
  doorway: {
    key: OFFICE_TILE_KEYS.doorway,
    type: 'tile',
    path: 'src/assets/tilesets/office/office-tileset.svg',
    frame: { width: TILE_SIZE, height: TILE_SIZE },
    tileIndex: OFFICE_TILE_INDEX.doorway,
    collision: 'none',
    depthMode: 'static',
    source: 'real',
    fallback: 'procedural',
  },
  // ========================================================================
  // BEGIN AddPortfolio-0008
  // Autor: Marco Antonio Cárdenas Sánchez
  // Fecha: 2026-08-11
  //
  // Propósito:
  // Registrar los Furniture del spritesheet local como assets reales.
  //
  // Descripción:
  // Los objetos pendientes de arte definitivo ya no se describen como futuros;
  // todos los objetos que componen el Office World tienen un frame local y un
  // fallback procedural común si el spritesheet no se puede cargar.
  // ========================================================================
  ...Object.fromEntries(
    Object.values(OFFICE_OBJECT_KEYS).map((key) => [key, {
      key,
      type: 'object',
      path: 'src/assets/sprites/objects/office/office-furniture.svg',
      frame: OFFICE_FURNITURE_FRAME,
      spriteFrame: OFFICE_FURNITURE_FRAME_INDEX[key],
      collision: OFFICE_OBJECT_COLLISION[key],
      depthMode: OFFICE_OBJECT_DEPTH_MODE[key],
      source: 'real',
      fallback: 'procedural',
    }]),
  ) as Record<OfficeObjectKey, OfficeAssetManifest>,
  // ========================================================================
  // END AddPortfolio-0008
  // ========================================================================
}
// ============================================================================
// END AddPortfolio-0006
// ============================================================================
