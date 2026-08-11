import type { InteractionType } from '../game/interaction/interactionTypes'

export type PanelHeading = {
  eyebrow: string
  title: string
}

export type AboutPanelData = PanelHeading & {
  name: string
  professionalTitle: string
  summary: string
  experience: string
  focus: string
  technologies: string[]
}

export type ProjectData = {
  name: string
  description: string
  technologies: string[]
  status: string
  role: string
  highlights: string[]
  repositoryUrl?: string
  demoUrl?: string
}

export type ProjectsPanelData = PanelHeading & {
  projects: ProjectData[]
  futureMessage: string
}

export type SkillGroup = {
  name: string
  description: string
  technologies: string[]
}

export type SkillsPanelData = PanelHeading & {
  groups: SkillGroup[]
}

export type ExperienceEntry = {
  company: string
  role: string
  startDate: string
  endDate: string
  description: string
  technologies: string[]
}

export type ExperiencePanelData = PanelHeading & {
  summary: string
  facts: string[]
  entries: ExperienceEntry[]
}

export type Achievement = {
  title: string
  description: string
}

export type AchievementsPanelData = PanelHeading & {
  items: Achievement[]
}

export type ContactChannel = {
  label: string
  value: string
  url?: string
}

export type ContactChannels = {
  email?: ContactChannel
  github?: ContactChannel
  linkedin?: ContactChannel
  cv?: ContactChannel
}

export type ContactPanelData = PanelHeading & {
  summary: string
  channels: ContactChannels
  pendingMessage: string
}

export type PortfolioData = {
  about: AboutPanelData
  projects: ProjectsPanelData
  skills: SkillsPanelData
  experience: ExperiencePanelData
  achievements: AchievementsPanelData
  contact: ContactPanelData
}

// ============================================================================
// BEGIN AddPortfolio-0011
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Centralizar el contenido profesional base que consumen los paneles React.
//
// Descripción:
// Los datos confirmados viven fuera de la UI. URLs, CV y trayectoria laboral
// detallada permanecen opcionales hasta contar con información real.
// ============================================================================
export const portfolioData: PortfolioData = {
  about: {
    eyebrow: 'ABOUT / PLAYER PROFILE',
    title: 'Perfil profesional',
    name: 'Marco Antonio Cárdenas Sánchez',
    professionalTitle: 'Software Engineer / Full Stack Developer',
    summary: 'Ingeniero en Sistemas con experiencia en desarrollo de software, arquitectura de soluciones y construcción de sistemas web.',
    experience: '7+ años de experiencia profesional',
    focus: 'Desarrollo de software, arquitectura de soluciones y sistemas web.',
    technologies: ['C#', '.NET', 'React', 'TypeScript', 'JavaScript', 'SQL', 'SQL Server', 'Git', 'Docker'],
  },
  projects: {
    eyebrow: 'PROJECTS / WORKSHOP',
    title: 'Proyectos seleccionados',
    projects: [
      {
        name: 'VegaSystem',
        description: 'SaaS multi-tenant configurable orientado inicialmente a barberías.',
        technologies: ['React', 'TypeScript', 'C#', '.NET'],
        status: 'En evolución',
        role: 'Proyecto destacado del portafolio',
        highlights: [
          'Gestión de citas, clientes, servicios y horarios.',
          'Arquitectura modular para una configuración por negocio.',
          'Integración de pagos y WhatsApp contemplada dentro del alcance del producto.',
        ],
      },
    ],
    futureMessage: 'Más proyectos se incorporarán cuando exista información pública confirmada.',
  },
  skills: {
    eyebrow: 'SKILLS / TOOLKIT',
    title: 'Tecnologías y enfoque',
    groups: [
      {
        name: 'Frontend',
        description: 'Construcción de interfaces y experiencias web.',
        technologies: ['React', 'TypeScript', 'JavaScript'],
      },
      {
        name: 'Backend',
        description: 'Desarrollo de software y servicios con el ecosistema .NET.',
        technologies: ['C#', '.NET'],
      },
      {
        name: 'Database',
        description: 'Modelado y trabajo con datos relacionales.',
        technologies: ['SQL', 'SQL Server'],
      },
      {
        name: 'DevOps / Tools',
        description: 'Herramientas para versionado y entornos reproducibles.',
        technologies: ['Git', 'Docker'],
      },
      {
        name: 'Architecture',
        description: 'Diseño de soluciones y sistemas web modulares.',
        technologies: ['Arquitectura de soluciones', 'Sistemas web'],
      },
    ],
  },
  experience: {
    eyebrow: 'EXPERIENCE / LOGBOOK',
    title: 'Experiencia profesional',
    summary: 'Experiencia construyendo software, sistemas web y soluciones con C#/.NET y bases de datos.',
    facts: [
      '7+ años de experiencia profesional en desarrollo de software.',
      'Experiencia construyendo sistemas completos.',
      'Trabajo con C#/.NET, bases de datos y desarrollo web.',
      'Participación en arquitectura de soluciones.',
    ],
    entries: [],
  },
  achievements: {
    eyebrow: 'ACHIEVEMENTS / MILESTONES',
    title: 'Hitos profesionales',
    items: [
      {
        title: '7+ años en desarrollo de software',
        description: 'Trayectoria profesional sostenida construyendo soluciones de software.',
      },
      {
        title: 'Proyectos completos de software',
        description: 'Participación en la construcción de sistemas desde su definición hasta su evolución.',
      },
      {
        title: 'VegaSystem como SaaS configurable',
        description: 'Diseño de un producto multi-tenant con una base modular orientada a negocios.',
      },
    ],
  },
  contact: {
    eyebrow: 'CONTACT / SAFE LOUNGE',
    title: 'Contacto profesional',
    summary: 'Los canales públicos de contacto se configurarán cuando estén listos para publicarse.',
    channels: {},
    pendingMessage: 'Email, GitHub, LinkedIn y CV: pendientes de configurar.',
  },
}

export function getPanelData(type: InteractionType) {
  return portfolioData[type]
}
// ============================================================================
// END AddPortfolio-0011
// ============================================================================
