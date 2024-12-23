import { Moon, Sun } from 'phosphor-react'
import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  if (theme === 'light') {
    return (
      <button className="group" onClick={() => setTheme('dark')}>
        <Sun
          className="transition-all duration-150 size-6 text-black/80
                group-hover:text-black group-hover:-translate-y-1"
          weight="bold"
        />
      </button>
    )
  } else if (theme === 'dark') {
    return (
      <button className="group" onClick={() => setTheme('light')}>
        <Moon
          className="transition-all duration-150 size-6 text-neutral-50/80
                group-hover:text-neutral-50 group-hover:-translate-y-1"
          weight="bold"
        />
      </button>
    )
  }
}
