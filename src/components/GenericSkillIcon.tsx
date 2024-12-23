export interface GenericSkillIconProps {
  imgSrc: string
  desc: string
  imgAlt: string
}

export function GenericSkillIcon({
  imgSrc,
  desc,
  imgAlt,
}: GenericSkillIconProps) {
  return (
    <div
      className="flex flex-col items-center gap-1 transition-transform hover:scale-125
      text-neutral-700 dark:text-neutral-300 dark:hover:text-neutral-50 hover:text-neutral-900"
    >
      <img src={imgSrc} width={64} height={64} alt={imgAlt} />
      <span className="font-inter text-lg">{desc}</span>
    </div>
  )
}
