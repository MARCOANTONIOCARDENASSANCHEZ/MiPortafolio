import { TILE_SIZE } from './worldConfig'

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
// paths son contratos futuros y no se cargan mientras solo existan placeholders.
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
  floorWoodLine: 0xa77857,
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

export type OfficeAssetManifest = {
  key: OfficeAssetKey
  type: 'tile' | 'object'
  path: string
  frame?: { width: number; height: number }
  tileIndex?: number
  collision: 'none' | 'data'
  depthMode: 'static' | 'dynamic' | 'upper'
  source: 'placeholder' | 'future'
}

export const OFFICE_ASSET_MANIFEST: Record<OfficeAssetKey, OfficeAssetManifest> = {
  floorWood: {
    key: OFFICE_TILE_KEYS.floorWood,
    type: 'tile',
    path: 'src/assets/tilesets/office/office-tileset.png',
    frame: { width: TILE_SIZE, height: TILE_SIZE },
    tileIndex: OFFICE_TILE_INDEX.floorWood,
    collision: 'none',
    depthMode: 'static',
    source: 'placeholder',
  },
  floorCarpet: {
    key: OFFICE_TILE_KEYS.floorCarpet,
    type: 'tile',
    path: 'src/assets/tilesets/office/office-tileset.png',
    frame: { width: TILE_SIZE, height: TILE_SIZE },
    tileIndex: OFFICE_TILE_INDEX.floorCarpet,
    collision: 'none',
    depthMode: 'static',
    source: 'placeholder',
  },
  wallBase: {
    key: OFFICE_TILE_KEYS.wallBase,
    type: 'tile',
    path: 'src/assets/tilesets/office/office-tileset.png',
    frame: { width: TILE_SIZE, height: TILE_SIZE },
    tileIndex: OFFICE_TILE_INDEX.wallBase,
    collision: 'data',
    depthMode: 'static',
    source: 'placeholder',
  },
  wallTop: {
    key: OFFICE_TILE_KEYS.wallTop,
    type: 'tile',
    path: 'src/assets/tilesets/office/office-tileset.png',
    frame: { width: TILE_SIZE, height: TILE_SIZE },
    tileIndex: OFFICE_TILE_INDEX.wallTop,
    collision: 'none',
    depthMode: 'upper',
    source: 'placeholder',
  },
  wallCorner: {
    key: OFFICE_TILE_KEYS.wallCorner,
    type: 'tile',
    path: 'src/assets/tilesets/office/office-tileset.png',
    frame: { width: TILE_SIZE, height: TILE_SIZE },
    tileIndex: OFFICE_TILE_INDEX.wallCorner,
    collision: 'none',
    depthMode: 'upper',
    source: 'placeholder',
  },
  doorway: {
    key: OFFICE_TILE_KEYS.doorway,
    type: 'tile',
    path: 'src/assets/tilesets/office/office-tileset.png',
    frame: { width: TILE_SIZE, height: TILE_SIZE },
    tileIndex: OFFICE_TILE_INDEX.doorway,
    collision: 'none',
    depthMode: 'static',
    source: 'placeholder',
  },
  ...Object.fromEntries(
    Object.values(OFFICE_OBJECT_KEYS).map((key) => [key, {
      key,
      type: 'object',
      path: `src/assets/sprites/objects/${key}.png`,
      collision: 'data',
      depthMode: 'dynamic',
      source: 'future',
    }]),
  ) as Record<OfficeObjectKey, OfficeAssetManifest>,
}
// ============================================================================
// END AddPortfolio-0006
// ============================================================================
