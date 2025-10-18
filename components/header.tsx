'use client'

import Link from 'next/link'
import Container from './container'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-indigo-100 shadow-sm">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Professional Logo */}
          <Link href="/" className="group flex items-center gap-3 no-underline">
            <div className="w-10 h-10 bg-primary-900 rounded-md flex items-center justify-center shadow-sm">
              <span className="text-gold-500 font-bold text-xl">✝</span>
            </div>
            <span className="font-bold text-xl text-primary-900 group-hover:text-primary-800 transition-colors">
              Gospel of Peace
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/sermon" className="relative text-primary-900 hover:text-gold-600 font-medium no-underline">
              <span>Sermons</span>
            </Link>
            <Link href="/events" className="relative text-primary-900 hover:text-gold-600 font-medium no-underline">
              <span>Events</span>
            </Link>
            <Link href="/teams" className="relative text-primary-900 hover:text-gold-600 font-medium no-underline">
              <span>Team</span>
            </Link>
            <Link href="/aboutus" className="relative text-primary-900 hover:text-gold-600 font-medium no-underline">
              <span>About</span>
            </Link>
            <Link href="/contact" className="px-6 py-2.5 bg-gold-500 text-primary-900 rounded-lg font-semibold no-underline hover:bg-gold-600 transition-colors">
              Connect
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition-colors"
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
      {/* Gradient bottom divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-300" />
    </header>
  )
}