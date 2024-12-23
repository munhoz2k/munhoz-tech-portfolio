import {
  ArrowUp,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from 'phosphor-react'

export function Footer() {
  return (
    <div className="container flex items-center justify-center mx-auto gap-60 pb-[5rem] mt-[15rem]">
      <div>
        <h3 className="font-sora font-bold text-[1.75rem] text-neutral-900 dark:text-neutral-50">
          Entre em contato comigo!
        </h3>

        <p className="mt-8 max-w-2xl font-inter font-normal text-lg text-neutral-800 dark:text-neutral-300">
          Me envie um e-mail ou uma mensagem, estou sempre disposto para ajudar
          ou para conversar sobre trabalho! 👋
        </p>
      </div>

      <div>
        <div className="flex gap-5">
          <a
            className="flex justify-center items-center p-2.5 rounded-md bg-neutral-900 dark:bg-neutral-50
            transition-transform duration-200 hover:scale-110"
            href="/"
          >
            <EnvelopeSimple
              className="size-6 text-neutral-50 dark:text-neutral-800"
              weight="bold"
            />
          </a>

          <a
            className="flex justify-center items-center p-2.5 rounded-md bg-neutral-900 dark:bg-neutral-50
            transition-transform duration-200 hover:scale-110"
            href="/"
          >
            <GithubLogo
              className="size-6 text-neutral-50 dark:text-neutral-800"
              weight="bold"
            />
          </a>

          <a
            className="flex justify-center items-center p-2.5 rounded-md bg-neutral-900 dark:bg-neutral-50
            transition-transform duration-200 hover:scale-110"
            href="/"
          >
            <LinkedinLogo
              className="size-6 text-neutral-50 dark:text-neutral-800"
              weight="bold"
            />
          </a>
        </div>

        <a
          className="flex items-center justify-center mt-8 gap-2 font-inter font-normal text-lg border-b-2 border-transparent
          text-neutral-800 dark:text-neutral-50 dark:hover:border-neutral-200 hover:border-neutral-600
          transition-[colors, transform] duration-100 hover:-translate-y-1"
          href="/"
        >
          Voltar ao topo <ArrowUp className="size-6" weight="bold" />
        </a>
      </div>
    </div>
  )
}
