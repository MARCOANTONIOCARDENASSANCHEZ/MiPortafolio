import Phaser from 'phaser'
import { DEPTH_CONFIG, applyDepthSorting } from '../rendering/depthSorting'
import {
  OFFICE_ASSET_MANIFEST,
  OFFICE_OBJECT_KEYS,
  OFFICE_PALETTE,
} from './officeAssetCatalog'
import type { OfficeObjectDefinition } from './officeLayoutData'
import { OFFICE_OBJECTS } from './officeLayoutData'

export type OfficeObjectVisuals = {
  dynamic: Phaser.GameObjects.Graphics[]
  upper: Phaser.GameObjects.Graphics[]
}

function drawDesk(graphics: Phaser.GameObjects.Graphics, definition: OfficeObjectDefinition) {
  const width = definition.visualWidth
  const height = definition.visualHeight

  graphics.fillStyle(OFFICE_PALETTE.furnitureWood, 1)
  graphics.fillRoundedRect(-width / 2, -height + 18, width, height - 28, 6)
  graphics.fillStyle(OFFICE_PALETTE.furnitureWoodLight, 1)
  graphics.fillRect(-width / 2 + 10, -height + 12, width - 20, 10)
  graphics.fillStyle(OFFICE_PALETTE.furnitureDark, 1)
  graphics.fillRect(-width / 2 + 18, -16, 12, 16)
  graphics.fillRect(width / 2 - 30, -16, 12, 16)

  if (definition.asset === OFFICE_OBJECT_KEYS.projectTable) {
    graphics.fillStyle(OFFICE_PALETTE.paper, 1)
    graphics.fillRect(-width / 2 + 28, -height + 32, 28, 18)
    graphics.fillRect(-width / 2 + 64, -height + 26, 28, 18)
    graphics.fillStyle(OFFICE_PALETTE.accentGold, 1)
    graphics.fillRect(-width / 2 + 104, -height + 36, 20, 5)
  }
}

function drawPc(graphics: Phaser.GameObjects.Graphics, definition: OfficeObjectDefinition) {
  const width = definition.visualWidth
  const height = definition.visualHeight

  graphics.fillStyle(OFFICE_PALETTE.furnitureDark, 1)
  graphics.fillRoundedRect(-width / 2, -height + 8, width, height - 18, 4)
  graphics.fillStyle(OFFICE_PALETTE.accentMint, 1)
  graphics.fillRect(-width / 2 + 8, -height + 16, width - 16, height - 32)
  graphics.fillStyle(OFFICE_PALETTE.metal, 1)
  graphics.fillRect(-7, -12, 14, 12)
  graphics.fillRect(-18, -3, 36, 4)
}

function drawPhone(graphics: Phaser.GameObjects.Graphics, definition: OfficeObjectDefinition) {
  const width = definition.visualWidth
  const height = definition.visualHeight

  graphics.fillStyle(OFFICE_PALETTE.furnitureDark, 1)
  graphics.fillRoundedRect(-width / 2, -height, width, height, 4)
  graphics.fillStyle(OFFICE_PALETTE.accentMint, 1)
  graphics.fillRect(-width / 2 + 5, -height + 4, width - 10, 4)
}

function drawLamp(graphics: Phaser.GameObjects.Graphics, definition: OfficeObjectDefinition) {
  const width = definition.visualWidth
  const height = definition.visualHeight

  graphics.fillStyle(OFFICE_PALETTE.accentGold, 1)
  graphics.fillTriangle(-width / 2, -height + 18, width / 2, -height + 18, 0, -height)
  graphics.fillStyle(OFFICE_PALETTE.metal, 1)
  graphics.fillRect(-2, -height + 18, 4, height - 18)
  graphics.fillRect(-width / 2, -4, width, 4)
}

function drawChair(graphics: Phaser.GameObjects.Graphics, definition: OfficeObjectDefinition) {
  const width = definition.visualWidth
  const height = definition.visualHeight

  graphics.fillStyle(OFFICE_PALETTE.furnitureDark, 1)
  graphics.fillRoundedRect(-width / 2, -height, width, height - 22, 8)
  graphics.fillStyle(OFFICE_PALETTE.accentLilac, 1)
  graphics.fillRoundedRect(-width / 2 + 6, -height + 8, width - 12, height - 34, 6)
  graphics.fillRect(-4, -20, 8, 20)
}

function drawBookshelf(graphics: Phaser.GameObjects.Graphics, definition: OfficeObjectDefinition) {
  const width = definition.visualWidth
  const height = definition.visualHeight

  graphics.fillStyle(OFFICE_PALETTE.furnitureWood, 1)
  graphics.fillRect(-width / 2, -height, width, height)
  graphics.fillStyle(OFFICE_PALETTE.furnitureWoodLight, 1)
  graphics.fillRect(-width / 2 + 7, -height + 8, width - 14, 6)

  for (let row = 0; row < 3; row += 1) {
    const rowY = -height + 28 + row * 34
    graphics.fillStyle(OFFICE_PALETTE.furnitureDark, 1)
    graphics.fillRect(-width / 2 + 8, rowY, width - 16, 5)
    graphics.fillStyle(row % 2 === 0 ? OFFICE_PALETTE.accentMint : OFFICE_PALETTE.accentGold, 1)
    graphics.fillRect(-width / 2 + 16, rowY - 22, 10, 20)
    graphics.fillStyle(OFFICE_PALETTE.accentLilac, 1)
    graphics.fillRect(-width / 2 + 32, rowY - 18, 8, 16)
  }
}

function drawSofa(graphics: Phaser.GameObjects.Graphics, definition: OfficeObjectDefinition) {
  const width = definition.visualWidth
  const height = definition.visualHeight

  graphics.fillStyle(OFFICE_PALETTE.furnitureDark, 1)
  graphics.fillRoundedRect(-width / 2, -height + 10, width, height - 10, 10)
  graphics.fillStyle(OFFICE_PALETTE.accentLilac, 1)
  graphics.fillRoundedRect(-width / 2 + 12, -height + 22, width - 24, height - 32, 8)
  graphics.fillStyle(OFFICE_PALETTE.furnitureDark, 1)
  graphics.fillRect(-width / 2 - 4, -height + 18, 12, height - 18)
  graphics.fillRect(width / 2 - 8, -height + 18, 12, height - 18)
}

function drawWhiteboard(graphics: Phaser.GameObjects.Graphics, definition: OfficeObjectDefinition) {
  const width = definition.visualWidth
  const height = definition.visualHeight

  graphics.fillStyle(OFFICE_PALETTE.furnitureDark, 1)
  graphics.fillRect(-width / 2, -height, width, height - 10)
  graphics.fillStyle(OFFICE_PALETTE.paper, 1)
  graphics.fillRect(-width / 2 + 8, -height + 8, width - 16, height - 28)
  graphics.fillStyle(OFFICE_PALETTE.accentMint, 1)
  graphics.fillRect(-width / 2 + 18, -height + 24, width - 72, 5)
  graphics.fillStyle(OFFICE_PALETTE.accentGold, 1)
  graphics.fillRect(-width / 2 + 18, -height + 39, width - 48, 5)
}

function drawPlant(graphics: Phaser.GameObjects.Graphics, definition: OfficeObjectDefinition) {
  const width = definition.visualWidth
  const height = definition.visualHeight

  graphics.fillStyle(OFFICE_PALETTE.furnitureDark, 1)
  graphics.fillRoundedRect(-width / 4, -24, width / 2, 24, 5)
  graphics.fillStyle(OFFICE_PALETTE.plant, 1)
  graphics.fillCircle(-width / 4, -height + 30, width / 4)
  graphics.fillCircle(width / 8, -height + 22, width / 3)
  graphics.fillStyle(OFFICE_PALETTE.plantLight, 1)
  graphics.fillCircle(width / 4, -height + 42, width / 4)
  graphics.fillCircle(-width / 8, -height + 48, width / 5)
}

function drawFilingCabinet(graphics: Phaser.GameObjects.Graphics, definition: OfficeObjectDefinition) {
  const width = definition.visualWidth
  const height = definition.visualHeight

  graphics.fillStyle(OFFICE_PALETTE.metal, 1)
  graphics.fillRoundedRect(-width / 2, -height, width, height, 5)
  graphics.fillStyle(OFFICE_PALETTE.furnitureDark, 1)

  for (let row = 0; row < 3; row += 1) {
    graphics.strokeRect(-width / 2 + 8, -height + 12 + row * 28, width - 16, 20)
    graphics.fillRect(-4, -height + 20 + row * 28, 8, 3)
  }
}

function drawTrophyShelf(graphics: Phaser.GameObjects.Graphics, definition: OfficeObjectDefinition) {
  drawBookshelf(graphics, definition)
  graphics.fillStyle(OFFICE_PALETTE.accentGold, 1)
  graphics.fillCircle(-25, -heightForTrophy(definition) + 24, 8)
  graphics.fillCircle(8, -heightForTrophy(definition) + 24, 8)
}

function heightForTrophy(definition: OfficeObjectDefinition) {
  return definition.visualHeight
}

function drawGenericObject(graphics: Phaser.GameObjects.Graphics, definition: OfficeObjectDefinition) {
  graphics.fillStyle(OFFICE_PALETTE.furnitureWood, 1)
  graphics.fillRoundedRect(
    -definition.visualWidth / 2,
    -definition.visualHeight,
    definition.visualWidth,
    definition.visualHeight,
    7,
  )
  graphics.fillStyle(OFFICE_PALETTE.accentGold, 1)
  graphics.fillRect(-definition.visualWidth / 2 + 12, -definition.visualHeight + 12, definition.visualWidth - 24, 5)
}

function drawOfficeObject(graphics: Phaser.GameObjects.Graphics, definition: OfficeObjectDefinition) {
  switch (definition.asset) {
    case OFFICE_OBJECT_KEYS.desk:
    case OFFICE_OBJECT_KEYS.experienceDesk:
    case OFFICE_OBJECT_KEYS.projectTable:
      drawDesk(graphics, definition)
      break
    case OFFICE_OBJECT_KEYS.pc:
      drawPc(graphics, definition)
      break
    case OFFICE_OBJECT_KEYS.phone:
      drawPhone(graphics, definition)
      break
    case OFFICE_OBJECT_KEYS.lamp:
      drawLamp(graphics, definition)
      break
    case OFFICE_OBJECT_KEYS.chair:
      drawChair(graphics, definition)
      break
    case OFFICE_OBJECT_KEYS.bookshelf:
      drawBookshelf(graphics, definition)
      break
    case OFFICE_OBJECT_KEYS.sofa:
      drawSofa(graphics, definition)
      break
    case OFFICE_OBJECT_KEYS.whiteboard:
      drawWhiteboard(graphics, definition)
      break
    case OFFICE_OBJECT_KEYS.plantSmall:
    case OFFICE_OBJECT_KEYS.plantLarge:
      drawPlant(graphics, definition)
      break
    case OFFICE_OBJECT_KEYS.filingCabinet:
      drawFilingCabinet(graphics, definition)
      break
    case OFFICE_OBJECT_KEYS.trophyShelf:
      drawTrophyShelf(graphics, definition)
      break
    default:
      drawGenericObject(graphics, definition)
  }
}

// ==========================================================================
// BEGIN AddPortfolio-0004
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Crear Furniture provisional a partir del catálogo y layout de la oficina.
//
// Descripción histórica:
// AddPortfolio-0004 generaba Furniture genérico desde una lista de obstáculos.
// AddPortfolio-0006 conserva la responsabilidad y cambia la fuente a objetos
// data-driven con categorías, zonas y manifest.
// ==========================================================================
// ==========================================================================
// BEGIN AddPortfolio-0006
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Crear Furniture provisional a partir del catálogo y layout de la oficina.
//
// Descripción:
// Cada visual usa el punto inferior como baseY. La Collision se crea en otro
// módulo desde la misma definición, y los objetos upper utilizan una capa fija.
// ============================================================================
export function createOfficeObjects(scene: Phaser.Scene): OfficeObjectVisuals {
  const dynamic: Phaser.GameObjects.Graphics[] = []
  const upper: Phaser.GameObjects.Graphics[] = []

  for (const definition of OFFICE_OBJECTS) {
    const asset = OFFICE_ASSET_MANIFEST[definition.asset]

    if (asset.type !== 'object') {
      continue
    }

    const graphics = scene.add.graphics()
    graphics.setPosition(definition.x, definition.y)
    graphics.fillStyle(OFFICE_PALETTE.shadow, 0.38)
    graphics.fillRoundedRect(
      -definition.visualWidth / 2 + 6,
      -16,
      definition.visualWidth,
      16,
      6,
    )
    drawOfficeObject(graphics, definition)

    if (definition.depthMode === 'upper') {
      graphics.setDepth(DEPTH_CONFIG.upperLayer)
      upper.push(graphics)
    } else {
      applyDepthSorting(graphics, definition.y)
      dynamic.push(graphics)
    }
  }

  return { dynamic, upper }
}
// ==========================================================================
// END AddPortfolio-0006
// ==========================================================================
// ==========================================================================
// END AddPortfolio-0004
// ==========================================================================
