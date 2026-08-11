// ============================================================================
// BEGIN AddPortfolio-0010
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Compartir los tipos de interacción entre Phaser, el bridge y React.
//
// Descripción:
// InteractionType limita las zonas que pueden abrir un panel provisional y
// evita repetir strings sin tipado entre el mundo y la interfaz.
// ============================================================================
export const INTERACTION_TYPES = {
  about: 'about',
  projects: 'projects',
  skills: 'skills',
  experience: 'experience',
  achievements: 'achievements',
  contact: 'contact',
} as const

export type InteractionType = (typeof INTERACTION_TYPES)[keyof typeof INTERACTION_TYPES]

export type InteractionDefinition = {
  type: InteractionType
  label: string
  range: number
}

export type InteractionTarget = {
  objectId: string
  type: InteractionType
  label: string
}
// ============================================================================
// END AddPortfolio-0010
// ============================================================================
