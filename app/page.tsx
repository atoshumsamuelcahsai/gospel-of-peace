import Container from '@/components/container'
import LivePlayer from '@/components/live-player'
import Link from 'next/link'


export const revalidate = 60


export default async function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Professional Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-white to-primary-50">
        {/* Elegant background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-gold-400/15 to-gold-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-primary-400/15 to-primary-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-gold-200/10 to-primary-200/10 rounded-full blur-3xl"></div>
        </div>

        <Container>
          <div className="relative z-10 text-center py-20 fade-in">
            {/* Professional badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-gold-200/40 bg-white/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-600"></span>
              </span>
              <span className="text-sm font-semibold text-primary-800">Live Worship · Sundays 11:00 AM</span>
            </div>

            {/* Hero title with elegant gradient */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight font-serif">
              <span className="block text-primary-900">
                Gospel of Peace
              </span>
            </h1>
            
                <p className="text-xl md:text-2xl text-primary-900 max-w-3xl mx-auto mb-4 font-medium">
                  A Welcoming Community of Faith in Glasgow
                </p>
            
            <p className="text-base md:text-lg text-primary-800 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Experience authentic worship, powerful teaching, and genuine community. 
              Join us as we discover God's purpose together.
            </p>

            {/* Professional CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-900 to-primary-800 text-cream-50 rounded-lg font-bold no-underline overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gold-400" 
                href="/aboutus"
              >
                <span className="relative z-10 drop-shadow-lg">Discover Our Story</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                className="group px-8 py-4 glass border-2 border-gold-400 text-primary-900 rounded-lg font-semibold no-underline hover:border-gold-500 hover:bg-gold-50 transform hover:scale-105 transition-all duration-300" 
                href="/contact"
              >
                <span className="flex items-center justify-center gap-2">
                  Plan Your Visit
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Professional service times card */}
            <div className="inline-block glass rounded-2xl p-8 border border-gold-200/50 shadow-xl backdrop-blur-xl bg-white/70">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <div className="text-center md:text-left">
                  <div className="text-sm font-semibold text-gold-700 uppercase tracking-wider mb-2">Next Service</div>
                  <div className="text-3xl font-bold text-primary-900 mb-1">Sunday 11:00 AM</div>
                  <div className="text-accent-600 flex items-center justify-center md:justify-start gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    4 Elibank Street, Glasgow
                  </div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-gold-300 to-transparent hidden md:block"></div>
                <Link 
                  href="/events"
                  className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-primary-900 rounded-lg font-semibold no-underline hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-gold-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Community Members', icon: '👥' },
              { number: '15+', label: 'Years Serving', icon: '⏰' },
              { number: '50+', label: 'Weekly Programs', icon: '📅' },
              { number: '100%', label: 'Love & Grace', icon: '❤️' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">{stat.number}</div>
                <div className="text-sm text-accent-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Live Stream Section - Professional Design */}
      <section className="py-24 bg-gradient-to-br from-cream-50 to-primary-50/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <Container>
          <div className="text-center mb-16 fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-gold-100 text-gold-800 text-sm font-semibold mb-4">
              🔴 LIVE STREAMING
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 font-serif">
              Join Us From <span className="text-gold-600">Anywhere</span>
            </h2>
            <p className="text-lg text-accent-600 max-w-2xl mx-auto">
              Can't make it in person? Experience our services live online and be part of our community from the comfort of your home.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-gold-200">
              <LivePlayer href="https://www.facebook.com/your-page/live" />
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Links - Professional Cards */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 font-serif">
              Explore Our <span className="text-gold-600">Ministry</span>
            </h2>
            <p className="text-lg text-accent-600 max-w-2xl mx-auto">
              Discover the many ways you can connect, grow, and serve in our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/sermon', title: 'Sermons', desc: 'Inspiring messages', icon: '📖' },
              { href: '/events', title: 'Events', desc: 'Community gatherings', icon: '🎉' },
              { href: '/teams', title: 'Our Team', desc: 'Meet our leaders', icon: '👥' },
              { href: '/contact', title: 'Connect', desc: 'Get in touch', icon: '💬' }
            ].map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 no-underline overflow-hidden modern-card border border-gold-200 hover:border-gold-400"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-lg flex items-center justify-center mb-6 text-3xl shadow-md transform group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-2 group-hover:text-gold-700 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-accent-600 mb-4">{item.desc}</p>
                  <div className="flex items-center text-gold-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn more 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section - Professional Navy & Gold */}
      <section className="py-24 relative overflow-hidden bg-primary-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 opacity-50"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-cream-50 drop-shadow-2xl bg-primary-800/90 px-8 py-4 rounded-xl border-2 border-gold-400/60">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-cream-50 mb-12 leading-relaxed drop-shadow-md">
              Whether you're exploring faith for the first time or looking for a church home, 
              we'd love to welcome you into our community.
            </p>
            
            <div className="rounded-2xl p-10 border-2 border-gold-400/60 backdrop-blur-xl bg-primary-800/80 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gold-300">Visit Us</h3>
                  <p className="text-cream-50 mb-3 font-medium">4 Elibank Street, Glasgow</p>
                  <p className="text-cream-50 mb-6 font-medium">Sundays at 11:00 AM</p>
                  <a 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-primary-900 rounded-lg font-semibold no-underline hover:bg-gold-400 transform hover:scale-105 transition-all duration-300 shadow-lg" 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://maps.google.com"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Get Directions
                  </a>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gold-300">Connect Online</h3>
                  <p className="text-cream-50 mb-6 font-medium">Join our online community and stay updated with everything happening at Gospel of Peace.</p>
                  <Link 
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gold-400 text-cream-50 rounded-lg font-semibold no-underline hover:bg-gold-500 hover:text-primary-900 hover:border-gold-500 transform hover:scale-105 transition-all duration-300" 
                    href="/contact"
                  >
                    Contact Us
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}