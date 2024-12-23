import { ArrowDown, GithubLogo, LinkedinLogo } from 'phosphor-react'

export function HeroSection() {
  const animatedBlobValues = `M40,-60.4C52.3,-54.3,63.2,-44,72.6,-30.9C82,
            -17.9,89.9,-1.9,88.6,13.3C87.2,28.4,76.6,42.8,63.3,50.6C50,
            58.5,33.9,59.7,19.1,63.1C4.3,66.6,-9.3,72.2,-24.2,72.4C-39.2,
            72.6,-55.6,67.5,-67.3,56.8C-78.9,46,-85.9,29.7,-88.2,
            12.8C-90.5,-4.1,-88,-21.6,-80.6,-36.4C-73.2,-51.1,
            -60.8,-63.2,-46.5,-68.5C-32.2,-73.8,-16.1,-72.3,-1.2,
            -70.5C13.8,-68.7,27.6,-66.6,40,-60.4Z;
            
            M39.6,-60.7C54.1,-52.3,70.6,-46,80.2,-34C89.7,-22,92.3,-4.1,
            89.3,12.4C86.2,28.9,77.4,44.2,64.9,53.3C52.4,62.5,36.3,65.5,21,
            68.8C5.7,72,-8.7,75.5,-21.7,72.3C-34.6,69.2,-46.1,59.5,-54.4,
            48.1C-62.7,36.7,-67.9,23.6,-69.4,10.2C-70.9,-3.2,-68.9,-16.8,
            -62.6,-27.8C-56.4,-38.8,-46,-47.2,-34.9,-57.1C-23.8,-67,-11.9,
            -78.5,0.3,-79C12.6,-79.6,25.1,-69.1,39.6,-60.7Z;
          
            M36.9,-58.2C46.5,-51.4,51.8,-38.7,60.8,-25.8C69.8,-12.8,82.5,
            0.4,83.9,14.2C85.3,28,75.3,42.3,64,55.5C52.7,68.7,39.9,80.7,
            25.9,82.1C11.8,83.5,-3.7,74.4,-17.3,66.8C-31,59.3,-42.8,53.3,
            -51.2,44.1C-59.6,34.9,-64.5,22.4,-65.8,9.8C-67.1,-2.8,-64.7,
            -15.7,-58.8,-26.1C-52.9,-36.6,-43.4,-44.7,-33,-51.2C-22.6,
            -57.7,-11.3,-62.5,1.2,-64.4C13.7,-66.3,27.4,-65.1,36.9,-58.2Z;

            M37.1,-62.2C47.8,-50.8,56.1,-40.1,63.7,-27.8C71.3,-15.5,78.2,
            -1.6,78,12.4C77.8,26.3,70.3,40.4,60.4,52.8C50.4,65.2,37.9,75.9,
            23.8,79.1C9.7,82.3,-5.9,78,-20.8,72.7C-35.7,67.5,-49.7,61.4,
            -60.8,51.2C-71.8,41,-79.9,26.8,-81.1,12.3C-82.2,-2.3,-76.3,
            -17.2,-68.2,-29.5C-60.1,-41.8,-49.6,-51.4,-37.9,-62.3C-26.1,
            -73.2,-13.1,-85.4,0.1,-85.5C13.2,-85.5,26.3,-73.5,37.1,-62.2Z;

            M40,-60.4C52.3,-54.3,63.2,-44,72.6,-30.9C82,
            -17.9,89.9,-1.9,88.6,13.3C87.2,28.4,76.6,42.8,63.3,50.6C50,
            58.5,33.9,59.7,19.1,63.1C4.3,66.6,-9.3,72.2,-24.2,72.4C-39.2,
            72.6,-55.6,67.5,-67.3,56.8C-78.9,46,-85.9,29.7,-88.2,
            12.8C-90.5,-4.1,-88,-21.6,-80.6,-36.4C-73.2,-51.1,
            -60.8,-63.2,-46.5,-68.5C-32.2,-73.8,-16.1,-72.3,-1.2,
            -70.5C13.8,-68.7,27.6,-66.6,40,-60.4Z;
            `

  return (
    <div className="flex flex-col justify-between">
      <div className="flex container items-center justify-between mx-auto px-6">
        <div>
          <h1 className="font-sora font-bold text-[3.5rem] dark:text-neutral-50">
            Prazer, sou Lucas Munhoz.
          </h1>

          <h2 className="font-sora font-bold text-[2rem] text-life-green-700 dark:text-life-green-600">
            Desenvolvedor Front-end
          </h2>

          <p className="font-inter font-normal text-2xl mt-11 max-w-3xl dark:text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ligula nunc
            non commodo scelerisque gravcude.
          </p>

          <div className="flex gap-6 mt-11">
            <a
              className="transition-all duration-200 hover:scale-125 p-2.5 rounded-md bg-life-green-600 dark:bg-life-green-500"
              href="https://github.com/munhoz2k"
              target="_blank"
              rel="noopener noreferrer"
              title="Acessar meu perfil no Github"
            >
              <GithubLogo
                className="size-8 text-white dark:text-neutral-900"
                weight="fill"
              />
            </a>

            <a
              className="transition-all duration-200 hover:scale-125 p-2.5 rounded-md bg-life-green-600 dark:bg-life-green-500"
              href="https://www.linkedin.com/in/lucas-munhoz-b946131a5"
              target="_blank"
              rel="noopener noreferrer"
              title="Acessar meu perfil no Linkedin"
            >
              <LinkedinLogo
                className="size-8 text-white dark:text-neutral-900"
                weight="regular"
              />
            </a>

            <a
              className="flex items-center px-4 border-2 rounded-md font-inter font-semibold text-md
            border-life-green-600 text-life-green-700 hover:text-white hover:bg-life-green-600
            dark:border-neutral-500 dark:text-neutral-50 dark:hover:border-life-green-600
            transition-transform duration-300 hover:-translate-y-1"
              href="/"
            >
              Entre em Contato
            </a>

            <a
              className="flex items-center px-4 border-2 rounded-md font-inter font-semibold text-md
            border-life-green-600 text-life-green-700 hover:text-white hover:bg-life-green-600
            dark:border-neutral-500 dark:text-neutral-50 dark:hover:border-life-green-600
            transition-transform duration-300 hover:-translate-y-1"
              href="/"
            >
              Currículo
            </a>
          </div>
        </div>

        <svg
          height={600}
          width={600}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="fill-life-green-500" transform="translate(100 100)">
            <animate
              attributeName="d"
              dur="5000ms"
              repeatCount="indefinite"
              values={animatedBlobValues}
            ></animate>
          </path>
        </svg>
      </div>

      <div className="flex flex-col items-center gap-4">
        <span className="font-inter text-xs text-neutral-500 dark:text-neutral-400">
          Scroll
        </span>
        <ArrowDown
          className="size-6 text-neutral-900 dark:text-neutral-50 animate-bounce"
          weight="bold"
        />
      </div>
    </div>
  )
}
