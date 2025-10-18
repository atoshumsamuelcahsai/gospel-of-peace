'use client'

import Link from 'next/link'
import Container from './container'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="glass sticky top-0 z-50 border-b border-gold-200/30 backdrop-blur-xl bg-white/80">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Professional Logo */}
          <Link href="/" className="group flex items-center gap-3 no-underline">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-900 to-primary-700 rounded-lg flex items-center justify-center shadow-md transform group-hover:scale-105 transition-all duration-300">
              <span className="text-gold-500 font-bold text-xl">✝</span>
            </div>
            <span className="font-bold text-xl text-primary-900 group-hover:text-primary-800 transition-colors">
              Gospel of Peace
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/sermon" className="relative text-primary-800 hover:text-gold-600 font-medium no-underline transition-colors group">
              <span>Sermons</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/events" className="relative text-primary-800 hover:text-gold-600 font-medium no-underline transition-colors group">
              <span>Events</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/teams" className="relative text-primary-800 hover:text-gold-600 font-medium no-underline transition-colors group">
              <span>Team</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/aboutus" className="relative text-primary-800 hover:text-gold-600 font-medium no-underline transition-colors group">
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-primary-900 rounded-lg font-semibold no-underline hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Connect
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary-800 hover:text-gold-600 hover:bg-gold-50 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold-200 animate-fadeIn">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/sermon" 
                className="text-primary-800 hover:text-gold-600 font-medium no-underline py-2 px-4 rounded-lg hover:bg-gold-50 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sermons
              </Link>
              <Link 
                href="/events" 
                className="text-primary-800 hover:text-gold-600 font-medium no-underline py-2 px-4 rounded-lg hover:bg-gold-50 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                href="/teams" 
                className="text-primary-800 hover:text-gold-600 font-medium no-underline py-2 px-4 rounded-lg hover:bg-gold-50 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                href="/aboutus" 
                className="text-primary-800 hover:text-gold-600 font-medium no-underline py-2 px-4 rounded-lg hover:bg-gold-50 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="text-center px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-primary-900 rounded-lg font-semibold no-underline hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connect
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}