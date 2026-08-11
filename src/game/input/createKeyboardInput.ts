import Phaser from 'phaser'

// ============================================================================
// BEGIN AddPortfolio-0002
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Centralizar la creación y lectura de los controles de movimiento.
//
// Descripción:
// El módulo traduce WASD y Arrow Keys a una dirección normalizada para que
// OfficeScene no tenga que conocer los detalles del teclado de Phaser.
// ============================================================================
export type MovementInput = {
  up: Phaser.Input.Keyboard.Key
  down: Phaser.Input.Keyboard.Key
  left: Phaser.Input.Keyboard.Key
  right: Phaser.Input.Keyboard.Key
  cursorUp: Phaser.Input.Keyboard.Key
  cursorDown: Phaser.Input.Keyboard.Key
  cursorLeft: Phaser.Input.Keyboard.Key
  cursorRight: Phaser.Input.Keyboard.Key
}

export function createKeyboardInput(scene: Phaser.Scene): MovementInput {
  const keyboard = scene.input.keyboard

  if (!keyboard) {
    throw new Error('El plugin de teclado de Phaser no está disponible.')
  }

  const cursorKeys = keyboard.createCursorKeys()

  return {
    up: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
    down: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
    left: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
    right: keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
    cursorUp: cursorKeys.up,
    cursorDown: cursorKeys.down,
    cursorLeft: cursorKeys.left,
    cursorRight: cursorKeys.right,
  }
}

export function readMovementDirection(input: MovementInput): Phaser.Math.Vector2 {
  const direction = new Phaser.Math.Vector2(
    Number(input.left.isDown || input.cursorLeft.isDown) * -1 + Number(input.right.isDown || input.cursorRight.isDown),
    Number(input.up.isDown || input.cursorUp.isDown) * -1 + Number(input.down.isDown || input.cursorDown.isDown),
  )

  if (direction.lengthSq() > 0) {
    direction.normalize()
  }

  return direction
}
// ============================================================================
// END AddPortfolio-0002
// ============================================================================
