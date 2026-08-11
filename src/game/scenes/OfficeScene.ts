import Phaser from 'phaser'
import { configureCamera } from '../camera/configureCamera'
import { configureWorldBounds, createWorldCollision } from '../collision/createWorldCollision'
import { createPlayer } from '../entities/createPlayer'
import { updatePlayerMovement } from '../entities/playerMovement'
import { createKeyboardInput, readMovementDirection, type MovementInput } from '../input/createKeyboardInput'
import { createOfficeLayout, WORLD_BOUNDS } from '../world/officeLayout'

// ============================================================================
// BEGIN AddPortfolio-0001
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Implementar la escena inicial de la oficina explorable.
//
// Descripción histórica:
// En AddPortfolio-0001 la escena componía directamente el mundo visual,
// registraba WASD y las flechas, y transformaba la entrada en movimiento.
// AddPortfolio-0002 conserva esa responsabilidad histórica mediante módulos.
// ============================================================================
// ============================================================================
// BEGIN AddPortfolio-0002
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Orquestar los sistemas concretos del World sin concentrar su implementación.
//
// Descripción:
// OfficeScene conserva el ciclo de vida de la escena y conecta World, Player,
// Input, Collision y Camera mediante sus módulos especializados.
// ============================================================================
export class OfficeScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite
  private movementInput!: MovementInput

  constructor() {
    super('OfficeScene')
  }

  create() {
    createOfficeLayout(this)
    configureWorldBounds(this, WORLD_BOUNDS)

    this.player = createPlayer(this, 960, 540)
    this.movementInput = createKeyboardInput(this)
    createWorldCollision(this, this.player)
    configureCamera(this, this.player, WORLD_BOUNDS)

    this.add
      .text(WORLD_BOUNDS.x + 18, WORLD_BOUNDS.y + WORLD_BOUNDS.height - 30, 'WASD / ARROWS  MOVE', {
        color: '#93a8c1',
        fontFamily: 'monospace',
        fontSize: '11px',
      })
      .setDepth(2)
  }

  update() {
    updatePlayerMovement(this.player, readMovementDirection(this.movementInput))
  }
}
// ============================================================================
// END AddPortfolio-0002
// ============================================================================
// ============================================================================
// END AddPortfolio-0001
// ============================================================================
