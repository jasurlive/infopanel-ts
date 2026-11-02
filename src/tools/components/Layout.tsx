import { Outlet, useLocation } from 'react-router'
import '../css/layout.css'
import Header from './Header'
import Marquee from '../shared/Marquee'
import ErrorBoundary from './ErrorBoundary'

// every route renders inside this: header on top, marquee at the bottom
export default function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="layout">
      <Header />
      <main className="layout-page">
        {/* key resets the error when you navigate to another page */}
        <ErrorBoundary key={pathname}>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Marquee />
    </div>
  )
}
