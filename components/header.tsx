'use client'

import Link from 'next/link'
import Image from 'next/image'
import Container from './container'
import { useState } from 'react'

interface HeaderLink {
  title: string
  url: string
  isButton?: boolean
}

interface HeaderData {
  churchName: {
    main: string
    subtitle: string
  }
  logo: {
    path: string
    alt: string
  }
  navigationLinks: HeaderLink[]
}

interface HeaderProps {
  data: HeaderData
}

export default function Header({ data }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative sticky top-0 z-50 backdrop-blur shadow-sm" style={{backgroundColor: 'rgba(255, 253, 250, 0.95)', borderBottom: '2px solid rgba(0, 78, 78, 0.95)'}}>
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Professional Logo */}
          <Link href="/" className="group flex items-center gap-3 no-underline">
            <div className="w-40 h-40 flex items-center justify-center shadow-sm overflow-hidden" style={{backgroundColor: 'rgba(255, 253, 250, 0.95)'}}>
              <Image
                src={data.logo.path}
                alt={data.logo.alt}
                width={350}
                height={350}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-primary-900 group-hover:text-primary-800 transition-colors">
              <div className="font-bold text-lg">{data.churchName.main}</div>
              <div className="font-medium text-xs text-center">{data.churchName.subtitle}</div>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {data.navigationLinks.map((link, index) => (
              link.title === 'Connect' || link.isButton ? (
                <Link 
                  key={index}
                  href={link.url} 
                  className="px-6 py-2.5 text-white rounded-lg font-semibold no-underline transition-colors hover:opacity-90" 
                  style={{backgroundColor: 'rgba(0, 78, 78, 0.95)'}}
                >
                  {link.title}
                </Link>
              ) : (
                <Link 
                  key={index}
                  href={link.url} 
                  className="relative text-primary-900 hover:text-gold-600 font-medium no-underline"
                >
                  <span>{link.title}</span>
                </Link>
              )
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center px-3 py-2 rounded-md text-white focus-visible:outline-none transition-colors hover:opacity-90"
            style={{backgroundColor: 'rgba(0, 78, 78, 0.95)'}}
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
          <div className="md:hidden py-4 animate-fadeIn" style={{borderTop: '1px solid rgba(0, 78, 78, 0.3)'}}>
            <nav className="flex flex-col gap-4">
              {data.navigationLinks.map((link, index) => (
                link.isButton ? (
                  <Link 
                    key={index}
                    href={link.url} 
                    className="text-center px-6 py-3 text-white rounded-lg font-semibold no-underline hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:opacity-90"
                    style={{backgroundColor: 'rgba(0, 78, 78, 0.95)'}}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ) : (
                  <Link 
                    key={index}
                    href={link.url} 
                    className="text-primary-800 hover:text-gold-600 font-medium no-underline py-2 px-4 rounded-lg hover:bg-gold-50 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                )
              ))}
            </nav>
          </div>
        )}
      </Container>
      {/* Gradient bottom divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px]" style={{background: 'linear-gradient(to right, rgba(0, 78, 78, 0.3), rgba(0, 78, 78, 0.5), rgba(0, 78, 78, 0.3))'}} />
    </header>
  )
}