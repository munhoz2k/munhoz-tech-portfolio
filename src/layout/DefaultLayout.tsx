import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="transition-colors duration-200 dark:bg-neutral-900 bg-life-green-50">
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}
