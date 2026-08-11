import Phaser from 'phaser'
import { configureCamera } from '../camera/configureCamera'
import { configureWorldBounds, createWorldCollision } from '../collision/createWorldCollision'
import { createPlayer } from '../entities/createPlayer'
import { updatePlayerMovement } from '../entities/playerMovement'
import type { Player } from '../entities/playerVisual'
import { createKeyboardInput, readMovementDirection, type MovementInput } from '../input/createKeyboardInput'
import { INTERACTION_BRIDGE_REGISTRY_KEY, type InteractionBridge } from '../interaction/interactionBridge'
import { createInteractionSystem, type InteractionSystem } from '../interaction/createInteractionSystem'
import { createOfficeWorld } from '../world/createOfficeWorld'
import { preloadOfficeAssets } from '../world/loadOfficeAssets'
import { WORLD_BOUNDS } from '../world/worldConfig'

// ============================================================================
// BEGIN AddPortfolio-0009
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Centralizar la posición inicial limpia del Player dentro de la composición.
//
// Descripción:
// El punto queda ligeramente debajo del centro funcional, separado de los
// obstáculos y sin modificar la escala, el body ni el movimiento del Player.
// ============================================================================
const PLAYER_START_POSITION = {
  x: 820,
  y: 540,
} as const
// ============================================================================
// END AddPortfolio-0009
// ============================================================================

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
  // ========================================================================
  // BEGIN AddPortfolio-0005
  // Autor: Marco Antonio Cárdenas Sánchez
  // Fecha: 2026-08-11
  //
  // Propósito:
  // Mantener en la escena el tipo visual enriquecido del Player.
  //
  // Descripción:
  // La escena continúa orquestando el Player sin conocer la implementación de
  // Direction, Animation o Shadow.
  // ========================================================================
  private player!: Player
  // ========================================================================
  // END AddPortfolio-0005
  // ========================================================================
  private movementInput!: MovementInput
  // ========================================================================
  // BEGIN AddPortfolio-0010
  // Autor: Marco Antonio Cárdenas Sánchez
  // Fecha: 2026-08-11
  //
  // Propósito:
  // Mantener el InteractionSystem como responsabilidad orquestada de la escena.
  //
  // Descripción:
  // La implementación del sistema vive fuera de OfficeScene y se actualiza en
  // el ciclo existente sin alterar Player Movement.
  // ========================================================================
  private interactionSystem!: InteractionSystem
  // ========================================================================
  // END AddPortfolio-0010
  // ========================================================================

  constructor() {
    super('OfficeScene')
  }

  // ========================================================================
  // BEGIN AddPortfolio-0007
  // Autor: Marco Antonio Cárdenas Sánchez
  // Fecha: 2026-08-11
  //
  // Propósito:
  // Cargar el tileset real antes de construir el Office World.
  //
  // Descripción:
  // La carga se mantiene mínima y específica de OfficeScene; el fallback se
  // resuelve dentro de createOfficeTilemap cuando el archivo no está disponible.
  // ========================================================================
  preload() {
    preloadOfficeAssets(this)
  }
  // ========================================================================
  // END AddPortfolio-0007
  // ========================================================================

  create() {
    // ========================================================================
    // BEGIN AddPortfolio-0004
    // Autor: Marco Antonio Cárdenas Sánchez
    // Fecha: 2026-08-11
    //
    // Propósito:
    // Conectar el World visual basado en Tilemap con la escena existente.
    //
    // Descripción:
    // OfficeScene delega la creación de capas y Furniture a createOfficeWorld,
    // manteniendo su papel de orquestador y sin duplicar renderizado.
    // ========================================================================
    createOfficeWorld(this)
    // ========================================================================
    // END AddPortfolio-0004
    // ========================================================================
    configureWorldBounds(this, WORLD_BOUNDS)

    // ========================================================================
    // BEGIN AddPortfolio-0009
    // Autor: Marco Antonio Cárdenas Sánchez
    // Fecha: 2026-08-11
    //
    // Propósito:
    // Iniciar la primera vista sobre el núcleo habitado de la oficina.
    //
    // Descripción:
    // El Player conserva su escala y comportamiento; solo cambia su punto de
    // aparición para mantener espacio visual alrededor del núcleo funcional.
    // ========================================================================
    this.player = createPlayer(
      this,
      PLAYER_START_POSITION.x,
      PLAYER_START_POSITION.y,
    )
    // ========================================================================
    // END AddPortfolio-0009
    // ========================================================================
    // ========================================================================
    // BEGIN AddPortfolio-0010
    // Autor: Marco Antonio Cárdenas Sánchez
    // Fecha: 2026-08-11
    //
    // Propósito:
    // Conectar InteractionSystem con el Player y el bridge de esta instancia.
    //
    // Descripción:
    // La escena solo orquesta el sistema. Los rangos, targets y selección viven
    // en módulos data-driven sin alterar Collision ni Depth sorting.
    // ========================================================================
    const interactionBridge = this.registry.get(
      INTERACTION_BRIDGE_REGISTRY_KEY,
    ) as InteractionBridge | undefined

    if (!interactionBridge) {
      throw new Error('No se encontró el bridge de InteractionSystem.')
    }

    this.interactionSystem = createInteractionSystem(
      this,
      this.player,
      interactionBridge,
    )
    // ========================================================================
    // END AddPortfolio-0010
    // ========================================================================
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
    this.interactionSystem.update()
  }
}
// ============================================================================
// END AddPortfolio-0002
// ============================================================================
// ============================================================================
// END AddPortfolio-0001
// ============================================================================
