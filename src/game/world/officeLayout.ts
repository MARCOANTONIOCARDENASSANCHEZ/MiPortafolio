// ==========================================================================
// BEGIN AddPortfolio-0001
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Definir la información visual y geométrica de la oficina provisional.
//
// Descripción histórica:
// AddPortfolio-0001 utilizaba este módulo para dibujar directamente la
// oficina con Graphics. La información de obstáculos se conserva y ahora se
// consume desde los módulos de World y Collision.
// ==========================================================================
// ==========================================================================
// BEGIN AddPortfolio-0002
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Mantener centralizados los límites y obstáculos del World.
//
// Descripción:
// AddPortfolio-0002 convirtió estos datos en la fuente compartida de los
// cuerpos estáticos y de la composición visual provisional.
// ==========================================================================
// ==========================================================================
// BEGIN AddPortfolio-0004
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Preparar los datos de oficina para Tilemap, Furniture y Collision.
//
// Descripción:
// El tamaño del World y el TILE_SIZE viven en worldConfig. Este archivo solo
// mantiene definiciones de objetos, evitando mezclar datos con renderizado,
// profundidad o cuerpos físicos.
// ==========================================================================
export type OfficeObstacle = {
  x: number
  y: number
  width: number
  height: number
}

const OFFICE_PROPS = [
  { x: 180, y: 170, width: 300, height: 92 },
  { x: 1440, y: 160, width: 290, height: 108 },
  { x: 190, y: 760, width: 270, height: 82 },
  { x: 1450, y: 750, width: 250, height: 86 },
  { x: 800, y: 390, width: 320, height: 76 },
] as const

export const OFFICE_OBSTACLES: OfficeObstacle[] = OFFICE_PROPS.map(({ x, y, width, height }) => ({
  x: x + width / 2,
  y: y + height / 2,
  width,
  height,
}))

// ==========================================================================
// END AddPortfolio-0004
// ==========================================================================
// ==========================================================================
// END AddPortfolio-0002
// ==========================================================================
// ==========================================================================
// END AddPortfolio-0001
// ==========================================================================
