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
export const OFFICE_OBJECTS: OfficeObjectDefinition[] = [
  {
    id: 'main-desk',
    asset: OFFICE_OBJECT_KEYS.desk,
    category: 'furniture',
    zone: OFFICE_ZONES.about,
    x: 700,
    y: 250,
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
    y: 206,
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
    y: 310,
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
    x: 1460,
    y: 748,
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
    x: 190,
    y: 270,
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
    x: 430,
    y: 500,
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
    x: 1420,
    y: 270,
    visualWidth: 180,
    visualHeight: 90,
    collision: { width: 150, height: 28 },
    depthMode: 'dynamic',
  },
  {
    id: 'experience-board',
    asset: OFFICE_OBJECT_KEYS.whiteboard,
    category: 'decoration',
    zone: OFFICE_ZONES.experience,
    x: 1150,
    y: 210,
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
    x: 1510,
    y: 258,
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
    x: 1050,
    y: 820,
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
    x: 1500,
    y: 780,
    visualWidth: 210,
    visualHeight: 94,
    collision: { width: 180, height: 36 },
    depthMode: 'dynamic',
  },
  {
    id: 'contact-table',
    asset: OFFICE_OBJECT_KEYS.coffeeTable,
    category: 'furniture',
    zone: OFFICE_ZONES.contact,
    x: 1500,
    y: 900,
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
    x: 1660,
    y: 210,
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
    x: 1760,
    y: 850,
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
    x: 260,
    y: 700,
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
    y: 1000,
    visualWidth: 100,
    visualHeight: 112,
    collision: null,
    depthMode: 'upper',
  },
]
// ============================================================================
// END AddPortfolio-0006
// ============================================================================
