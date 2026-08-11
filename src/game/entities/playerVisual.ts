import Phaser from 'phaser'
import { applyDepthSorting } from '../rendering/depthSorting'

// ============================================================================
// BEGIN AddPortfolio-0005
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Encapsular la representación Sprite, dirección, Animation y Shadow del Player.
//
// Descripción:
// El placeholder se genera localmente con Graphics solo para producir texturas
// reemplazables. El Player visible siempre es un Arcade Sprite y la lógica de
// movimiento, Camera, Collision y Depth sorting permanece desacoplada.
// ============================================================================
const PLAYER_TEXTURE_PREFIX = 'placeholder-player'
const PLAYER_ANIMATION_PREFIX = 'player'

export const PLAYER_DIRECTIONS = {
  down: 'down',
  up: 'up',
  left: 'left',
  right: 'right',
} as const

export type PlayerDirection = (typeof PLAYER_DIRECTIONS)[keyof typeof PLAYER_DIRECTIONS]
export type PlayerAnimationState = 'idle' | 'walk'

export const PLAYER_VISUAL_SIZE = {
  width: 36,
  height: 48,
  feetOffset: 22,
}

export type Player = Phaser.Physics.Arcade.Sprite & {
  direction: PlayerDirection
  animationState: PlayerAnimationState
  shadow: Phaser.GameObjects.Ellipse
}

export function getPlayerDirection(
  movement: Phaser.Math.Vector2,
  current: PlayerDirection,
): PlayerDirection {
  if (movement.lengthSq() === 0) {
    return current
  }

  if (Math.abs(movement.x) > Math.abs(movement.y)) {
    return movement.x < 0 ? PLAYER_DIRECTIONS.left : PLAYER_DIRECTIONS.right
  }

  return movement.y < 0 ? PLAYER_DIRECTIONS.up : PLAYER_DIRECTIONS.down
}

function textureKey(direction: PlayerDirection, step: 'idle' | 'walk') {
  return `${PLAYER_TEXTURE_PREFIX}-${direction}-${step}`
}

function animationKey(direction: PlayerDirection, state: PlayerAnimationState) {
  return `${PLAYER_ANIMATION_PREFIX}-${state}-${direction}`
}

function drawPlaceholderPlayer(
  graphics: Phaser.GameObjects.Graphics,
  direction: PlayerDirection,
  step: 'idle' | 'walk',
) {
  const walking = step === 'walk'
  const footOffset = walking ? 2 : 0
  const facingRight = direction === PLAYER_DIRECTIONS.right
  const horizontal = direction === PLAYER_DIRECTIONS.left || facingRight

  graphics.fillStyle(0x172033, 1)
  graphics.fillRoundedRect(4, 4, 28, 40, 8)

  if (direction === PLAYER_DIRECTIONS.down) {
    graphics.fillStyle(0xf5c9a9, 1)
    graphics.fillCircle(18, 15, 8)
    graphics.fillStyle(0x172033, 1)
    graphics.fillRect(10, 6, 16, 5)
    graphics.fillStyle(0x172033, 1)
    graphics.fillRect(13, 14, 2, 3)
    graphics.fillRect(21, 14, 2, 3)
  } else if (direction === PLAYER_DIRECTIONS.up) {
    graphics.fillStyle(0x172033, 1)
    graphics.fillCircle(18, 14, 9)
    graphics.fillStyle(0x70e1c1, 1)
    graphics.fillRect(9, 22, 18, 15)
    graphics.fillStyle(0xb18cff, 1)
    graphics.fillRect(15, 25, 6, 6)
  } else {
    const faceX = facingRight ? 22 : 14
    const eyeX = facingRight ? 25 : 11
    graphics.fillStyle(0xf5c9a9, 1)
    graphics.fillCircle(faceX, 15, 8)
    graphics.fillStyle(0x172033, 1)
    graphics.fillRect(facingRight ? 14 : 8, 7, 12, 5)
    graphics.fillRect(eyeX, 14, 2, 3)
    graphics.fillStyle(0x70e1c1, 1)
    graphics.fillRect(9, 23, 18, 14)
    graphics.fillStyle(0xffd166, 1)
    graphics.fillRect(facingRight ? 25 : 7, 26, 4, 8)
  }

  if (!horizontal) {
    graphics.fillStyle(0xffd166, 1)
    graphics.fillRect(8, 24, 20, 10)
  }

  graphics.fillStyle(0x172033, 1)
  graphics.fillRect(9 - footOffset, 36, 7, 7)
  graphics.fillRect(20 + footOffset, 36, 7, 7)
}

function createPlaceholderTextures(scene: Phaser.Scene) {
  for (const direction of Object.values(PLAYER_DIRECTIONS)) {
    for (const step of ['idle', 'walk'] as const) {
      const key = textureKey(direction, step)

      if (scene.textures.exists(key)) {
        continue
      }

      const graphics = scene.add.graphics()
      drawPlaceholderPlayer(graphics, direction, step)
      graphics.generateTexture(key, PLAYER_VISUAL_SIZE.width, PLAYER_VISUAL_SIZE.height)
      graphics.destroy()
    }
  }
}

function createPlayerAnimations(scene: Phaser.Scene) {
  for (const direction of Object.values(PLAYER_DIRECTIONS)) {
    const idleKey = animationKey(direction, 'idle')
    const walkKey = animationKey(direction, 'walk')

    if (!scene.anims.exists(idleKey)) {
      scene.anims.create({
        key: idleKey,
        frames: [{ key: textureKey(direction, 'idle'), frame: 0 }],
        frameRate: 1,
        repeat: -1,
      })
    }

    if (!scene.anims.exists(walkKey)) {
      scene.anims.create({
        key: walkKey,
        frames: [
          { key: textureKey(direction, 'idle'), frame: 0 },
          { key: textureKey(direction, 'walk'), frame: 0 },
        ],
        frameRate: 6,
        repeat: -1,
      })
    }
  }
}

function updatePlayerShadow(player: Player) {
  const baseY = player.y + PLAYER_VISUAL_SIZE.feetOffset
  player.shadow.setPosition(player.x, baseY)
  applyDepthSorting(player.shadow, baseY - 1)
}

export function createPlayerVisual(scene: Phaser.Scene, x: number, y: number): Player {
  createPlaceholderTextures(scene)
  createPlayerAnimations(scene)

  const player = scene.physics.add.sprite(
    x,
    y,
    textureKey(PLAYER_DIRECTIONS.down, 'idle'),
  ) as Player

  player.direction = PLAYER_DIRECTIONS.down
  player.animationState = 'idle'
  player.shadow = scene.add.ellipse(x, y + PLAYER_VISUAL_SIZE.feetOffset, 28, 9, 0x0b1220, 0.42)
  player.shadow.setScale(1, 0.65)
  updatePlayerVisual(player, player.direction, false)

  return player
}

export function updatePlayerVisual(
  player: Player,
  direction: PlayerDirection,
  moving: boolean,
) {
  player.direction = direction
  player.animationState = moving ? 'walk' : 'idle'

  const nextAnimation = animationKey(player.direction, player.animationState)

  if (player.anims.currentAnim?.key !== nextAnimation) {
    player.anims.play(nextAnimation, true)
  }

  applyDepthSorting(player, player.y + PLAYER_VISUAL_SIZE.feetOffset)
  updatePlayerShadow(player)
}
// ============================================================================
// END AddPortfolio-0005
// ============================================================================
