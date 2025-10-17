import Link from 'next/link'
import Container from './container'


export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-secondary-200 sticky top-0 z-40">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-serif font-bold text-xl text-secondary-800 no-underline hover:text-primary-600 transition-colors">
            Gospel of Peace
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/sermon" className="text-secondary-600 hover:text-primary-600 font-medium no-underline transition-colors">
              Sermons
            </Link>
            <Link href="/events" className="text-secondary-600 hover:text-primary-600 font-medium no-underline transition-colors">
              Events
            </Link>
            <Link href="/teams" className="text-secondary-600 hover:text-primary-600 font-medium no-underline transition-colors">
              Team
            </Link>
            <Link href="/aboutus" className="text-secondary-600 hover:text-primary-600 font-medium no-underline transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium no-underline transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-secondary-600 hover:text-primary-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  )
}