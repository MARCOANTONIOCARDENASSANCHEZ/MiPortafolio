// ============================================================================
// BEGIN AddPortfolio-0004
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Centralizar las dimensiones lógicas que comparten World y Tilemap.
//
// Descripción:
// TILE_SIZE es la unidad base para el mapa provisional y WORLD_BOUNDS mantiene
// el World mayor que el viewport sin dispersar valores mágicos por las capas.
// ============================================================================
export const TILE_SIZE = 32

export type WorldBounds = {
  x: number
  y: number
  width: number
  height: number
}

export const TILEMAP_SIZE = {
  // ========================================================================
  // BEGIN AddPortfolio-0009
  // Autor: Marco Antonio Cárdenas Sánchez
  // Fecha: 2026-08-11
  //
  // Propósito:
  // Mantener una oficina compacta alrededor de sus áreas funcionales.
  //
  // Descripción:
  // El World conserva espacio suficiente para circular, pero evita que el
  // viewport muestre grandes regiones vacías alrededor del Furniture.
  // ========================================================================
  width: 48,
  height: 25,
  // ========================================================================
  // END AddPortfolio-0009
  // ========================================================================
}

export const WORLD_BOUNDS: WorldBounds = {
  x: 48,
  y: 48,
  width: TILE_SIZE * TILEMAP_SIZE.width,
  height: TILE_SIZE * TILEMAP_SIZE.height,
}
// ============================================================================
// END AddPortfolio-0004
// ============================================================================
