import { AboutMeSection } from '../components/sections/home/AboutMeSection'
import { HeroSection } from '../components/sections/home/HeroSection'
import { ProjectsSection } from '../components/sections/home/ProjectsSection'

export function Home() {
  return (
    <div>
      <HeroSection />

      <ProjectsSection />

      <AboutMeSection />
    </div>
  )
}
