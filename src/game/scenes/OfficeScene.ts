import Phaser from 'phaser'
import { createPlayer } from '../entities/createPlayer'
import { createOfficeLayout, ROOM_BOUNDS } from '../world/officeLayout'

// ============================================================================
// BEGIN AddPortfolio-0001
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Implementar la escena inicial de la oficina explorable.
//
// Descripción:
// La escena compone el mundo visual, configura sus límites, crea el Player,
// registra WASD y las flechas, y transforma la entrada del teclado en
// movimiento mediante Arcade Physics.
// ============================================================================
type DirectionKeys = {
  up: Phaser.Input.Keyboard.Key
  down: Phaser.Input.Keyboard.Key
  left: Phaser.Input.Keyboard.Key
  right: Phaser.Input.Keyboard.Key
}

export class OfficeScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite
  private cursorKeys!: Phaser.Types.Input.Keyboard.CursorKeys
  private wasdKeys!: DirectionKeys

  constructor() {
    super('OfficeScene')
  }

  create() {
    createOfficeLayout(this)
    this.physics.world.setBounds(
      ROOM_BOUNDS.x,
      ROOM_BOUNDS.y,
      ROOM_BOUNDS.width,
      ROOM_BOUNDS.height,
    )

    this.player = createPlayer(this, 480, 300)
    this.cursorKeys = this.input.keyboard!.createCursorKeys()
    this.wasdKeys = {
      up: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      down: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      left: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      right: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D),
    }

    this.add
      .text(ROOM_BOUNDS.x + 18, ROOM_BOUNDS.y + ROOM_BOUNDS.height - 30, 'WASD / ARROWS  MOVE', {
        color: '#93a8c1',
        fontFamily: 'monospace',
        fontSize: '11px',
      })
      .setDepth(2)
  }

  update() {
    const left = this.cursorKeys.left.isDown || this.wasdKeys.left.isDown
    const right = this.cursorKeys.right.isDown || this.wasdKeys.right.isDown
    const up = this.cursorKeys.up.isDown || this.wasdKeys.up.isDown
    const down = this.cursorKeys.down.isDown || this.wasdKeys.down.isDown

    let velocityX = 0
    let velocityY = 0

    if (left) velocityX -= 1
    if (right) velocityX += 1
    if (up) velocityY -= 1
    if (down) velocityY += 1

    if (velocityX !== 0 && velocityY !== 0) {
      const diagonalScale = 1 / Math.sqrt(2)
      velocityX *= diagonalScale
      velocityY *= diagonalScale
    }

    this.player.setVelocity(velocityX * 150, velocityY * 150)
    this.player.setDepth(this.player.y)
  }
}
// ============================================================================
// END AddPortfolio-0001
// ============================================================================
