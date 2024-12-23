import { AboutMeSection } from '../components/sections/about/AboutMeSection'
import { InterestSection } from '../components/sections/about/InterestSection'
import { SkillsSection } from '../components/sections/about/SkillsSection'

export function About() {
  return (
    <div>
      <AboutMeSection />

      <SkillsSection />

      <InterestSection />
    </div>
  )
}
