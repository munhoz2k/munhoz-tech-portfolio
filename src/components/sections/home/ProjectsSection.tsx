import { ProjectCard } from '../../ProjectCard'

export function ProjectsSection() {
  return (
    <div className="mt-[10rem]" id="#projects">
      <div className="mx-auto container">
        <h1 className="text-center font-sora font-bold text-[3.5rem] dark:text-neutral-50">
          Projetos
        </h1>

        <div className="flex flex-wrap justify-center gap-[6.5rem] mt-[5.175rem]">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  )
}
