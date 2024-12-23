import projectImage from '../assets/project-representation.jpeg'
import { JSIcon } from './icons/JSIcon'
import { NextJSIcon } from './icons/NextJSIcon'
import { ReactIcon } from './icons/ReactIcon'
import { TailwindCSSIcon } from './icons/TailwindCSSIcon'
import { useTheme } from './themes/ThemeProvider'

export function ProjectCard() {
  const { theme } = useTheme()

  return (
    <div
      className="border-[2px] rounded-md transition-[shadow, color] duration-200
      border-neutral-300 bg-neutral-50 hover:border-neutral-600
      dark:bg-neutral-900 dark:border-neutral-600 dark:hover:border-neutral-200"
    >
      <div>
        <img
          className="rounded-[4px]"
          src={projectImage}
          width={500}
          alt="Imagem Representativa do Projeto"
        />
      </div>

      <div className="mt-4 p-4 space-y-8">
        <div className="space-y-4">
          <h3 className="font-sora font-bold text-[1.75rem] text-neutral-900 dark:text-neutral-50">
            Project Title
          </h3>

          <p className="font-inter font-normal text-base text-neutral-600 dark:text-neutral-300">
            Project description
          </p>
        </div>

        <div className="flex items-center gap-4">
          <ReactIcon darkmode={theme === 'dark'} />
          <JSIcon darkmode={theme === 'dark'} />
          <NextJSIcon darkmode={theme === 'dark'} />
          <TailwindCSSIcon darkmode={theme === 'dark'} />
        </div>

        <div className="flex gap-4 font-bold font-inter text-sm">
          <a
            className="flex items-center px-5 py-2.5 rounded-md text-neutral-50 bg-life-green-600
            transition-all duration-200 hover:scale-110 hover:shadow-md"
            href="/"
          >
            Ver Código
          </a>

          <a
            className="px-5 py-2.5 rounded-md border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md
            border-life-green-600 text-life-green-700 hover:bg-life-green-600 hover:text-neutral-50
            dark:border-neutral-500 dark:text-neutral-50 dark:hover:border-life-green-600"
            href="/"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}
