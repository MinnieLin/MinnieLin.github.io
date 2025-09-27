import { getProjects } from '../lib/mdx'
import { Project } from '../types/project'
import { ButtonPop } from '../components/buttonAccent'
import { GitHub24, External24 } from '../components/icons'

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative flex flex-col justify-between w-full h-full px-6 py-5 group bg-back-secondary hover:bg-back-secondary">
      {/* Thumbnail Section */}
     {project.thumbnail && (
        <div className="w-full h-40 mb-4 overflow-hidden rounded-md">
          <img
            src={project.thumbnail}
            alt={`Thumbnail for ${project.title}`}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      )} 

      {/* Title and Year Section */}
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-fore-primary group-hover:text-accent">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <span className="focus:text-accent">{project.title}</span>
          </a>
        </h3>
        <span className="text-md mt-0.5 text-fore-subtle opacity-40">
          {project.year}
        </span>
      </div>

      {/* Tags Section */}
      <div className="flex flex-wrap mt-2 mb-3">
        {project.tags?.map(tag => (
          <span
            key={tag}
            className="p-1 mb-1 mr-2 text-xs text-fore-subtle bg-back-subtle"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-fore-subtle mb-4">{project.description}</p>

      {/* Links Section */}
      <div className="flex flex-wrap gap-3 mt-auto">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm rounded-md bg-back-subtle hover:bg-accent hover:text-white transition-colors flex items-center gap-1"
          >
            <GitHub24 className="w-4 h-4 gap-1" />
            GitHub
          </a>
        )}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm rounded-md bg-back-subtle hover:bg-accent hover:text-white transition-colors flex items-center gap-1"
          >
            <External24 className="w-4 h-4" />
            Project Page
          </a>
        )}
      </div>
    </div>
  )
}

interface Props {
  selectedOnly?: boolean
}
const ProjectList = async ({ selectedOnly = false }: Props) => {
  try {
    const projects = await getProjects()

    if (!projects || projects.length === 0) {
      return (
        <section>
          <p>No projects found.</p>
        </section>
      )
    }

    const filteredProjects = selectedOnly
      ? projects.filter(p => {
          return p.selected === true
        })
      : projects

    return (
      <section className="mb-6 mt-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {filteredProjects.map(project => (
            <ButtonPop key={project.id || project.title}>
              <ProjectCard project={project} />
            </ButtonPop>
          ))}
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error loading projects:', error)
    return (
      <section>
        <p>Error loading projects.</p>
      </section>
    )
  }
}

export default (ProjectList as unknown) as (props: Props) => JSX.Element
