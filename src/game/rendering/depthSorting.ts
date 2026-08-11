// ============================================================================
// BEGIN AddPortfolio-0004
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Centralizar el cálculo de profundidad visual para elementos dinámicos.
//
// Descripción:
// Los objetos con volumen se ordenan por su punto de apoyo vertical. Ground y
// otras capas estáticas mantienen una profundidad fija y no pasan por aquí.
// ============================================================================
export const DEPTH_CONFIG = {
  ground: 0,
  walls: 20,
  decoration: 30,
  dynamicBase: 1000,
  upperLayer: 1900,
}

// ============================================================================
// BEGIN AddPortfolio-0006
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Extender la configuración central con depths fijos de la oficina.
//
// Descripción:
// Las capas estáticas y los elementos superiores usan valores centralizados;
// los objetos dinámicos continúan calculándose desde baseY.
// ============================================================================
// La configuración se mantiene en un único objeto para evitar depths mágicos.
// ============================================================================
// END AddPortfolio-0006
// ============================================================================

export type DepthSortableObject = {
  y: number
  setDepth: (value: number) => unknown
}

export function applyDepthSorting(object: DepthSortableObject, baseY = object.y) {
  object.setDepth(DEPTH_CONFIG.dynamicBase + Math.round(baseY))
}
// ============================================================================
// END AddPortfolio-0004
// ============================================================================
