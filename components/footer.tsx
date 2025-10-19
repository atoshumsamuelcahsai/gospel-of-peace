import Container from './container'
import Link from 'next/link'
import Image from 'next/image'
import { getFooterContent } from '@/lib/sanity'

export default async function Footer() {
  const footerData = await getFooterContent('en')
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
                <div>{footerData?.churchName?.main}</div>
                <div className="text-sm font-medium">{footerData?.churchName?.subtitle}</div>
              </h3>
              <p className="text-white text-sm leading-relaxed">
                {footerData?.description}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerData?.quickLinks?.map((link: any, index: number) => (
                  <li key={index}>
                    <Link href={link.url} className="text-white hover:text-gold-300 text-sm transition-colors no-underline">
                      {link.title}
                    </Link>
                  </li>
                ))}
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
                  <span>{footerData?.contactInfo?.address}</span>
                </p>
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{footerData?.contactInfo?.serviceTime}</span>
                </p>
                <p className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${footerData?.contactInfo?.email}`} className="text-white hover:text-gold-300 transition-colors">
                    {footerData?.contactInfo?.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6" style={{borderTop: '1px solid rgba(0, 78, 78, 0.3)'}}>
            <p className="text-white text-sm text-center">
              © {new Date().getFullYear()} {footerData?.copyright}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}