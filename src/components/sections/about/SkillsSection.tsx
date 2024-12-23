import htmlIcon from '../../../assets/light-logos/html-light.svg'
import cssIcon from '../../../assets/light-logos/css-light.svg'
import jsIcon from '../../../assets/light-logos/js-light.svg'
import tsIcon from '../../../assets/light-logos/ts-light.svg'
import nextjsIcon from '../../../assets/light-logos/nextjs-light.svg'
import reactIcon from '../../../assets/light-logos/reactjs-light.svg'
import tailwindIcon from '../../../assets/light-logos/tailwindcss-light.svg'
import viteIcon from '../../../assets/light-logos/vitejs-light.svg'
import figmaIcon from '../../../assets/light-logos/figma-light.svg'
import githubIcon from '../../../assets/light-logos/github-light.svg'

import nextjsIconDark from '../../../assets/dark-logos/nextjs-dark.svg'
import githubIconDark from '../../../assets/dark-logos/github-dark.svg'

import { GenericSkillIcon, GenericSkillIconProps } from '../../GenericSkillIcon'
import { useTheme } from '../../themes/ThemeProvider'

export function SkillsSection() {
  const { theme } = useTheme()

  const skillList: GenericSkillIconProps[] = [
    {
      imgSrc: htmlIcon,
      desc: 'HTML5',
      imgAlt: 'HTML Logo',
    },
    {
      imgSrc: cssIcon,
      desc: 'CSS3',
      imgAlt: 'CSS Logo',
    },
    {
      imgSrc: jsIcon,
      desc: 'JavaScript',
      imgAlt: 'JavaScript Logo',
    },
    {
      imgSrc: tsIcon,
      desc: 'TypeScript',
      imgAlt: 'TypeScript Logo',
    },
    {
      imgSrc: theme === 'dark' ? nextjsIconDark : nextjsIcon,
      desc: 'Next.js',
      imgAlt: 'Next.js Logo',
    },
    {
      imgSrc: reactIcon,
      desc: 'React.js',
      imgAlt: 'React.js Logo',
    },
    {
      imgSrc: tailwindIcon,
      desc: 'TailwindCSS',
      imgAlt: 'TailwindCSS Logo',
    },
    {
      imgSrc: viteIcon,
      desc: 'Vite.js',
      imgAlt: 'Vite.js Logo',
    },
    {
      imgSrc: theme === 'dark' ? githubIconDark : githubIcon,
      desc: 'GitHub',
      imgAlt: 'GitHub Logo',
    },
    {
      imgSrc: figmaIcon,
      desc: 'Figma',
      imgAlt: 'Figma Logo',
    },
  ]

  return (
    <div className="max-w-6xl space-y-[2rem] mx-auto mt-[10rem]">
      <h2 className="font-sora font-bold text-[2rem] text-center text-neutral-900 dark:text-neutral-50">
        Minhas Especialidades
      </h2>

      <p className="font-inter font-normal text-lg text-neutral-700 dark:text-neutral-300">
        Lorem ipsum dolor sit amet consectetur. Nisl et tincidunt nisi turpis
        odio viverra tempor aliquet. Egestas tempor a massa risus volutpat
        tellus. Varius fames aliquet consectetur lobortis massa pretium enim et
        consectetur.
      </p>

      <div className="flex flex-wrap gap-y-6 items-center justify-center gap-12">
        {skillList.map((skill) => {
          return <GenericSkillIcon key={skill.desc} {...skill} />
        })}
      </div>
    </div>
  )
}
