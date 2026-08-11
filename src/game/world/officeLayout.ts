export { OFFICE_OBJECTS, OFFICE_ZONES } from './officeLayoutData'
export type {
  OfficeCollisionDefinition,
  OfficeDepthMode,
  OfficeObjectDefinition,
  OfficeZoneKey,
} from './officeLayoutData'

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
// oficina con Graphics. La fuente de datos se conserva y ahora se delega a
// officeLayoutData para separar composición de renderizado.
// ==========================================================================
// ==========================================================================
// BEGIN AddPortfolio-0002
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Mantener centralizados los límites y obstáculos del World.
//
// Descripción histórica:
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
// Descripción histórica:
// AddPortfolio-0004 mantuvo aquí los obstáculos provisionales. AddPortfolio-0006
// los reemplaza por OFFICE_OBJECTS y un catálogo data-driven.
// ==========================================================================
// ==========================================================================
// BEGIN AddPortfolio-0006
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Exponer la composición de oficina sin mezclarla con su renderizado.
//
// Descripción:
// Este módulo funciona como punto estable para los consumidores históricos,
// mientras officeLayoutData contiene el catálogo completo de objetos y zonas.
// ==========================================================================
// ============================================================================
// END AddPortfolio-0006
// ============================================================================
// ==========================================================================
// END AddPortfolio-0004
// ==========================================================================
// ==========================================================================
// END AddPortfolio-0002
// ==========================================================================
// ==========================================================================
// END AddPortfolio-0001
// ==========================================================================
