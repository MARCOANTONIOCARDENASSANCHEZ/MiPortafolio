import type { OfficeObjectKey } from './officeAssetCatalog'
import { OFFICE_OBJECT_KEYS } from './officeAssetCatalog'

export const OFFICE_ZONES = {
  about: 'About',
  projects: 'Projects',
  skills: 'Skills',
  experience: 'Experience',
  achievements: 'Achievements',
  contact: 'Contact',
} as const

export type OfficeZoneKey = (typeof OFFICE_ZONES)[keyof typeof OFFICE_ZONES]

export type OfficeCollisionDefinition = {
  width: number
  height: number
} | null

export type OfficeDepthMode = 'dynamic' | 'upper'

export type OfficeObjectDefinition = {
  id: string
  asset: OfficeObjectKey
  category: 'furniture' | 'device' | 'decoration'
  zone: OfficeZoneKey
  x: number
  y: number
  visualWidth: number
  visualHeight: number
  collision: OfficeCollisionDefinition
  depthMode: OfficeDepthMode
}

// ============================================================================
// BEGIN AddPortfolio-0006
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Definir una composición data-driven para la oficina provisional.
//
// Descripción:
// x e y representan el punto de apoyo inferior del objeto. La definición
// describe visual, categoría, zona semántica, Collision y Depth sin acoplar
// coordenadas a OfficeScene ni activar interacciones.
// ============================================================================
// ============================================================================
// BEGIN AddPortfolio-0009
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Compactar la composición del Office World sin separar sus zonas en salas.
//
// Descripción:
// Las coordenadas agrupan Furniture por función, conservan rutas de circulación
// y mantienen x/y como fuente data-driven de baseY y Collision.
// ============================================================================
export const OFFICE_OBJECTS: OfficeObjectDefinition[] = [
  {
    id: 'main-desk',
    asset: OFFICE_OBJECT_KEYS.desk,
    category: 'furniture',
    zone: OFFICE_ZONES.about,
    x: 700,
    y: 290,
    visualWidth: 190,
    visualHeight: 94,
    collision: { width: 160, height: 28 },
    depthMode: 'dynamic',
  },
  {
    id: 'main-pc',
    asset: OFFICE_OBJECT_KEYS.pc,
    category: 'device',
    zone: OFFICE_ZONES.about,
    x: 700,
    y: 246,
    visualWidth: 54,
    visualHeight: 54,
    collision: null,
    depthMode: 'dynamic',
  },
  {
    id: 'main-chair',
    asset: OFFICE_OBJECT_KEYS.chair,
    category: 'furniture',
    zone: OFFICE_ZONES.about,
    x: 700,
    y: 360,
    visualWidth: 48,
    visualHeight: 58,
    collision: { width: 34, height: 22 },
    depthMode: 'dynamic',
  },
  {
    id: 'contact-phone',
    asset: OFFICE_OBJECT_KEYS.phone,
    category: 'device',
    zone: OFFICE_ZONES.contact,
    x: 1120,
    y: 630,
    visualWidth: 28,
    visualHeight: 18,
    collision: null,
    depthMode: 'dynamic',
  },
  {
    id: 'skills-bookshelf',
    asset: OFFICE_OBJECT_KEYS.bookshelf,
    category: 'furniture',
    zone: OFFICE_ZONES.skills,
    x: 250,
    y: 290,
    visualWidth: 104,
    visualHeight: 150,
    collision: { width: 82, height: 28 },
    depthMode: 'dynamic',
  },
  {
    id: 'projects-table',
    asset: OFFICE_OBJECT_KEYS.projectTable,
    category: 'furniture',
    zone: OFFICE_ZONES.projects,
    x: 440,
    y: 470,
    visualWidth: 220,
    visualHeight: 86,
    collision: { width: 190, height: 30 },
    depthMode: 'dynamic',
  },
  {
    id: 'experience-desk',
    asset: OFFICE_OBJECT_KEYS.experienceDesk,
    category: 'furniture',
    zone: OFFICE_ZONES.experience,
    x: 1080,
    y: 310,
    visualWidth: 180,
    visualHeight: 90,
    collision: { width: 150, height: 28 },
    depthMode: 'dynamic',
  },
  {
    id: 'skills-board',
    asset: OFFICE_OBJECT_KEYS.whiteboard,
    category: 'decoration',
    zone: OFFICE_ZONES.skills,
    x: 410,
    y: 230,
    visualWidth: 150,
    visualHeight: 82,
    collision: null,
    depthMode: 'upper',
  },
  {
    id: 'experience-lamp',
    asset: OFFICE_OBJECT_KEYS.lamp,
    category: 'decoration',
    zone: OFFICE_ZONES.experience,
    x: 1250,
    y: 285,
    visualWidth: 34,
    visualHeight: 72,
    collision: null,
    depthMode: 'dynamic',
  },
  {
    id: 'achievements-shelf',
    asset: OFFICE_OBJECT_KEYS.trophyShelf,
    category: 'furniture',
    zone: OFFICE_ZONES.achievements,
    x: 790,
    y: 690,
    visualWidth: 180,
    visualHeight: 110,
    collision: { width: 156, height: 28 },
    depthMode: 'dynamic',
  },
  {
    id: 'contact-sofa',
    asset: OFFICE_OBJECT_KEYS.sofa,
    category: 'furniture',
    zone: OFFICE_ZONES.contact,
    x: 1240,
    y: 650,
    visualWidth: 184,
    visualHeight: 82,
    collision: { width: 180, height: 36 },
    depthMode: 'dynamic',
  },
  // ========================================================================
  // BEGIN AddPortfolio-0008
  // Autor: Marco Antonio Cárdenas Sánchez
  // Fecha: 2026-08-11
  //
  // Propósito:
  // Completar visualmente la pequeña zona de descanso de Contact.
  //
  // Descripción:
  // El rug es decorativo, no agrega Collision ni interacción y permanece
  // debajo del coffeeTable por su orden de baseY dentro de la composición.
  // ========================================================================
  {
    id: 'contact-rug',
    asset: OFFICE_OBJECT_KEYS.rug,
    category: 'decoration',
    zone: OFFICE_ZONES.contact,
    x: 1240,
    y: 760,
    visualWidth: 150,
    visualHeight: 52,
    collision: null,
    depthMode: 'dynamic',
  },
  // ========================================================================
  // END AddPortfolio-0008
  // ========================================================================
  {
    id: 'contact-table',
    asset: OFFICE_OBJECT_KEYS.coffeeTable,
    category: 'furniture',
    zone: OFFICE_ZONES.contact,
    x: 1240,
    y: 780,
    visualWidth: 120,
    visualHeight: 48,
    collision: { width: 100, height: 20 },
    depthMode: 'dynamic',
  },
  {
    id: 'plant-north',
    asset: OFFICE_OBJECT_KEYS.plantLarge,
    category: 'decoration',
    zone: OFFICE_ZONES.experience,
    x: 1330,
    y: 300,
    visualWidth: 64,
    visualHeight: 112,
    collision: { width: 28, height: 22 },
    depthMode: 'dynamic',
  },
  {
    id: 'plant-south',
    asset: OFFICE_OBJECT_KEYS.plantSmall,
    category: 'decoration',
    zone: OFFICE_ZONES.contact,
    x: 1380,
    y: 720,
    visualWidth: 48,
    visualHeight: 82,
    collision: { width: 24, height: 18 },
    depthMode: 'dynamic',
  },
  {
    id: 'projects-filing',
    asset: OFFICE_OBJECT_KEYS.filingCabinet,
    category: 'furniture',
    zone: OFFICE_ZONES.projects,
    x: 320,
    y: 560,
    visualWidth: 72,
    visualHeight: 110,
    collision: { width: 56, height: 28 },
    depthMode: 'dynamic',
  },
  {
    id: 'office-door',
    asset: OFFICE_OBJECT_KEYS.door,
    category: 'decoration',
    zone: OFFICE_ZONES.contact,
    x: 944,
    y: 800,
    visualWidth: 88,
    visualHeight: 100,
    collision: null,
    depthMode: 'upper',
  },
]
// ============================================================================
// END AddPortfolio-0009
// ============================================================================
// ============================================================================
// END AddPortfolio-0006
// ============================================================================
