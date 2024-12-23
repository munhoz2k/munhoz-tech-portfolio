import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ThemeProvider } from './components/themes/ThemeProvider'

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="munhoztech-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
