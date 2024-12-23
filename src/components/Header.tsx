import { Link } from 'react-router-dom'
import { ThemeToggle } from './themes/ThemeToggle'

import logo from '../assets/code-logo-white.png'

export function Header() {
  return (
    <div className="container pt-8 pb-6 px-6 mx-auto">
      <div className="flex items-center justify-between">
        <img src={logo} height={80} width={80} alt="Logo" />

        <div className="flex items-center gap-12">
          <nav
            className="font-inter font-regular text-lg flex gap-[1.875rem] items-center
             text-black/80 dark:text-neutral-50/80"
          >
            <Link
              className="transition-all duration-200 hover:-translate-y-0.5
               hover:text-black dark:hover:text-neutral-50"
              to="/"
            >
              Ínicio
            </Link>

            <Link
              className="transition-all duration-200 hover:-translate-y-0.5
               hover:text-black dark:hover:text-neutral-50"
              to="#projects"
            >
              Projetos
            </Link>

            <Link
              className="transition-all duration-200 hover:-translate-y-0.5
               hover:text-black dark:hover:text-neutral-50"
              to="/"
            >
              Sobre
            </Link>

            <Link
              className="transition-all duration-200 hover:-translate-y-0.5
               hover:text-black dark:hover:text-neutral-50"
              to="/"
            >
              Currículo
            </Link>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
