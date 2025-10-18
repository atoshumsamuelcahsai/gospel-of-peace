import Container from './container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t-2 border-gold-400 mt-0 bg-primary-900 w-full">
      <Container>
        <div className="py-12 bg-primary-900">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-gold-300 font-bold text-lg mb-4">Gospel of Peace</h3>
              <p className="text-cream-50 text-sm leading-relaxed">
                A welcoming community of faith in Glasgow, dedicated to worship, fellowship, and serving our community.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gold-300 font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/aboutus" className="text-cream-50 hover:text-gold-300 text-sm transition-colors no-underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/sermon" className="text-cream-50 hover:text-gold-300 text-sm transition-colors no-underline">
                    Sermons
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-cream-50 hover:text-gold-300 text-sm transition-colors no-underline">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-cream-50 hover:text-gold-300 text-sm transition-colors no-underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-gold-300 font-bold text-lg mb-4">Visit Us</h3>
              <div className="text-cream-50 text-sm space-y-2">
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>4 Elibank Street, Glasgow</span>
                </p>
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Sundays at 11:00 AM</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-700 pt-6">
            <p className="text-cream-100 text-sm text-center">
              © {new Date().getFullYear()} Gospel of Peace Church. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}