import type {
  Achievement,
  ProjectData,
  SkillGroup,
} from '../../data/portfolioData'
import { portfolioData } from '../../data/portfolioData'

function Tags({ items }: { items: string[] }) {
  return (
    <div className="portfolio-panel-tags">
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  )
}

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <article className="portfolio-project-card">
      <div className="portfolio-content-row">
        <h3>{project.name}</h3>
        <span className="portfolio-status">{project.status}</span>
      </div>
      <p>{project.description}</p>
      <p className="portfolio-detail-label">Rol</p>
      <p>{project.role}</p>
      <p className="portfolio-detail-label">Highlights</p>
      <ul>
        {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ul>
      <Tags items={project.technologies} />
      {(project.repositoryUrl || project.demoUrl) && (
        <div className="portfolio-link-row">
          {project.repositoryUrl && <a href={project.repositoryUrl}>GitHub</a>}
          {project.demoUrl && <a href={project.demoUrl}>Demo</a>}
        </div>
      )}
    </article>
  )
}

function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <article className="portfolio-skill-group">
      <h3>{group.name}</h3>
      <p>{group.description}</p>
      <Tags items={group.technologies} />
    </article>
  )
}

function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <article className="portfolio-achievement-card">
      <span className="portfolio-achievement-mark">+</span>
      <div>
        <h3>{achievement.title}</h3>
        <p>{achievement.description}</p>
      </div>
    </article>
  )
}

// ============================================================================
// BEGIN AddPortfolio-0011
// Autor: Marco Antonio Cárdenas Sánchez
// Fecha: 2026-08-11
//
// Propósito:
// Renderizar el contenido específico de cada sección desde portfolioData.
//
// Descripción:
// Estos contenidos no conocen el overlay ni el ciclo de vida de Phaser; solo
// presentan datos tipados y permiten que PortfolioPanel sea una shell común.
// ============================================================================
export function AboutPanelContent() {
  const data = portfolioData.about

  return (
    <div className="portfolio-content-stack">
      <p className="portfolio-lead">{data.summary}</p>
      <div className="portfolio-profile-grid">
        <div>
          <span>Nombre</span>
          <strong>{data.name}</strong>
        </div>
        <div>
          <span>Experiencia</span>
          <strong>{data.experience}</strong>
        </div>
      </div>
      <div>
        <p className="portfolio-detail-label">Título</p>
        <p>{data.professionalTitle}</p>
      </div>
      <div>
        <p className="portfolio-detail-label">Enfoque principal</p>
        <p>{data.focus}</p>
      </div>
      <Tags items={data.technologies} />
    </div>
  )
}

export function ProjectsPanelContent() {
  const data = portfolioData.projects

  return (
    <div className="portfolio-content-stack">
      {data.projects.map((project) => <ProjectCard key={project.name} project={project} />)}
      <p className="portfolio-empty-note">{data.futureMessage}</p>
    </div>
  )
}

export function SkillsPanelContent() {
  return (
    <div className="portfolio-skill-grid">
      {portfolioData.skills.groups.map((group) => <SkillGroupCard key={group.name} group={group} />)}
    </div>
  )
}

export function ExperiencePanelContent() {
  const data = portfolioData.experience

  return (
    <div className="portfolio-content-stack">
      <p className="portfolio-lead">{data.summary}</p>
      <ul className="portfolio-fact-list">
        {data.facts.map((fact) => <li key={fact}>{fact}</li>)}
      </ul>
      {data.entries.length === 0 && (
        <p className="portfolio-empty-note">El detalle de empresas, puestos y fechas está en preparación.</p>
      )}
    </div>
  )
}

export function AchievementsPanelContent() {
  return (
    <div className="portfolio-content-stack">
      {portfolioData.achievements.items.map((achievement) => (
        <AchievementCard key={achievement.title} achievement={achievement} />
      ))}
    </div>
  )
}

export function ContactPanelContent() {
  const data = portfolioData.contact
  const channels = Object.values(data.channels).filter(
    (channel): channel is NonNullable<typeof channel> => channel !== undefined,
  )

  return (
    <div className="portfolio-content-stack">
      <p className="portfolio-lead">{data.summary}</p>
      {channels.length > 0 ? (
        <div className="portfolio-contact-list">
          {channels.map((channel) => (
            <div key={channel.label}>
              <span>{channel.label}</span>
              {channel.url ? <a href={channel.url}>{channel.value}</a> : <strong>{channel.value}</strong>}
            </div>
          ))}
        </div>
      ) : (
        <p className="portfolio-empty-note">{data.pendingMessage}</p>
      )}
    </div>
  )
}
// ============================================================================
// END AddPortfolio-0011
// ============================================================================
