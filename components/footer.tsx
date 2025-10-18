import Container from './container'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-0 w-full" style={{backgroundColor: 'rgba(0, 78, 78, 0.95)', borderTop: '2px solid rgba(0, 78, 78, 0.95)'}}>
      <Container>
        <div className="py-12" style={{backgroundColor: 'rgba(0, 78, 78, 0.95)'}}>
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo Section - Background Cover */}
            <div 
              className="md:col-span-1 relative rounded-lg bg-cover bg-center bg-no-repeat min-h-[200px]"
              style={{
                backgroundImage: 'url(/hero/logochurch_transparent.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
            </div>
            
            {/* About Section */}
            <div className="md:col-span-1">
              <h3 className="text-white font-bold text-lg mb-4">
                <div>GOSPEL OF PEACE</div>
                <div className="text-sm font-medium">CHURCH GLASGOW</div>
              </h3>
              <p className="text-white text-sm leading-relaxed">
                A welcoming community of faith in Glasgow, dedicated to worship, fellowship, and serving our community.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/aboutus" className="text-white hover:text-gold-300 text-sm transition-colors no-underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/sermon" className="text-white hover:text-gold-300 text-sm transition-colors no-underline">
                    Sermons
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-white hover:text-gold-300 text-sm transition-colors no-underline">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white hover:text-gold-300 text-sm transition-colors no-underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Visit Us</h3>
              <div className="text-white text-sm space-y-2">
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>4 Elibank Street, Glasgow</span>
                </p>
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Sundays at 11:00 AM</span>
                </p>
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@gospelofpeaceglasgow.org.uk" className="text-white hover:text-gold-300 transition-colors">
                    info@gospelofpeaceglasgow.org.uk
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6" style={{borderTop: '1px solid rgba(0, 78, 78, 0.3)'}}>
            <p className="text-white text-sm text-center">
              © {new Date().getFullYear()} Gospel of Peace Church. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}