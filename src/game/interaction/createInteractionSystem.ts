import Phaser from 'phaser'
import { DEPTH_CONFIG } from '../rendering/depthSorting'
import type { Player } from '../entities/playerVisual'
import { OFFICE_OBJECTS } from '../world/officeLayoutData'
import type { OfficeObjectDefinition } from '../world/officeLayoutData'
import type { InteractionBridge } from './interactionBridge'
import type { InteractionDefinition, InteractionTarget } from './interactionTypes'

type InteractiveObjectDefinition = OfficeObjectDefinition & {
  interaction: InteractionDefinition
}

export type InteractionSystem = {
  update: () => void
}

function isInteractiveObject(
  definition: OfficeObjectDefinition,
): definition is InteractiveObjectDefinition {
  return definition.interaction !== undefined
}

function findNearestInteractiveObject(
  player: Player,
  objects: InteractiveObjectDefinition[],
) {
  let nearest: InteractiveObjectDefinition | null = null
  let nearestDistance = Number.POSITIVE_INFINITY

  for (const object of objects) {
    const distance = Phaser.Math.Distance.Between(player.x, player.y, object.x, object.y)

    if (distance <= object.interaction.range && distance < nearestDistance) {
      nearest = object
      nearestDistance = distance
    }
  }

  return nearest
}

// ============================================================================
// BEGIN AddPortfolio-0010
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Detectar el objeto interactivo más cercano y procesar una pulsación discreta.
//
// Descripción:
// Interaction Range es independiente de Collision. El sistema solo muestra el
// prompt cuando el Player está cerca y emite un target al presionar E una vez.
// ============================================================================
export function createInteractionSystem(
  scene: Phaser.Scene,
  player: Player,
  bridge: InteractionBridge,
): InteractionSystem {
  const keyboard = scene.input.keyboard

  if (!keyboard) {
    throw new Error('El plugin de teclado de Phaser no está disponible.')
  }

  const interactiveObjects = OFFICE_OBJECTS.filter(isInteractiveObject)
  const interactionKey = keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E)
  const prompt = scene.add
    .text(0, 0, '[E] INTERACTUAR', {
      color: '#f7f2df',
      backgroundColor: '#172033',
      fontFamily: 'monospace',
      fontSize: '11px',
      padding: { x: 8, y: 5 },
    })
    .setOrigin(0.5, 1)
    .setDepth(DEPTH_CONFIG.upperLayer + 100)
    .setVisible(false)

  return {
    update() {
      const nearest = findNearestInteractiveObject(player, interactiveObjects)

      if (!nearest) {
        prompt.setVisible(false)
        return
      }

      prompt
        .setPosition(player.x, player.y - 46)
        .setVisible(true)

      if (Phaser.Input.Keyboard.JustDown(interactionKey)) {
        const target: InteractionTarget = {
          objectId: nearest.id,
          type: nearest.interaction.type,
          label: nearest.interaction.label,
        }
        bridge.openPanel(target)
      }
    },
  }
}
// ============================================================================
// END AddPortfolio-0010
// ============================================================================
