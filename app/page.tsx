// app/page.tsx
import Container from '@/components/container'
import LivePlayer from '@/components/live-player'
import HeroCarousel from '@/components/HeroCarousel'
import Link from 'next/link'
import Script from 'next/script'
import { getHomePageContent } from '@/lib/sanity'

export const revalidate = 60

export default async function HomePage() {
  const homePageData = await getHomePageContent('en')
  
  // Ensure we have carousel data, use fallback if missing
  const carouselSlides = homePageData.carouselSection?.slides || [
    { mobileSrc: '/hero/two.png', desktopSrc: '/hero/two.png', alt: 'Congregation gathering' },
    { mobileSrc: '/hero/one.png', desktopSrc: '/hero/one.png', alt: 'Worship Service' },
  ]

  const address = {
    line1: '4 Elibank Street',
    city: 'Glasgow',
    mapsUrl: 'https://maps.google.com/?q=4+Elibank+Street+Glasgow',
  }

  // ✅ Slider shows PNG images only (mobile + desktop variants)

  return (
    <>
      {/* JSON-LD (edit domain/address as needed) */}
      <Script id="schema-church" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Church',
          name: 'Gospel of Peace',
          url: 'https://www.gospelofpeaceglasgow.org.uk/',
          address: {
            '@type': 'PostalAddress',
            streetAddress: address.line1,
            addressLocality: address.city,
            addressCountry: 'UK',
          },
          openingHoursSpecification: [
            { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '11:00', closes: '13:00' },
          ],
        })}
      </Script>

      <div className="min-h-screen overflow-hidden">
        {/* ===== HERO: slider with images ONLY ===== */}
        <header className="relative">
          <div className="relative h-[260px] md:h-[440px]">
            <HeroCarousel slides={carouselSlides} className="absolute inset-0" />
          </div>
          <div className="section-border" />
        </header>

        {/* ===== INTRO: text & CTAs BELOW the slider ===== */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 text-primary-900 mb-6" style={{border: '1px solid rgba(0, 78, 78, 0.3)'}}>
                  <span className="h-2 w-2 rounded-full bg-accent-500" aria-hidden />
                  <span className="text-xs font-semibold tracking-wide">{homePageData.heroSection?.serviceTime || 'Sundays · 11:00 AM'}</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-serif text-primary-900 mb-3">
                  {homePageData.heroSection?.title || 'Gospel of Peace'}
                </h1>
                <p className="text-lg md:text-2xl text-primary-900 mb-3 font-medium">
                  {homePageData.heroSection?.subtitle || 'A Welcoming Community of Faith in Glasgow'}
                </p>
                <p className="text-base md:text-lg text-neutral-700 mb-8 leading-relaxed font-medium max-w-xl">
                  {homePageData.heroSection?.description || 'Experience authentic worship, powerful teaching, and genuine community. Join us as we discover God\'s purpose together.'}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  {(homePageData.heroSection?.ctaButtons || [
                    { title: 'Discover Our Story', url: '/aboutus', style: 'primary' },
                    { title: 'Plan Your Visit', url: '/contact', style: 'secondary' },
                  ]).map((button, index) => (
                    <Link 
                      key={index}
                      href={button.url} 
                      className={`btn ${button.style === 'primary' ? 'btn-primary' : 'btn-secondary'} group with-icon`}
                    >
                      {button.title}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Keep empty for balance or add an image/mini-card later */}
              <div aria-hidden className="hidden md:block" />
            </div>
          </Container>
        </section>

        <main id="main">
          {/* ===== STATS ===== */}
          <section className="py-16 bg-white/80">
            <Container>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list">
                {homePageData.statsSection.stats.map((stat, i) => (
                  <li key={i} className="text-center modern-card p-6">
                    <div className="text-4xl mb-3" aria-hidden>
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
                  </li>
                ))}
              </ul>
            </Container>
          </section>

          {/* ===== LIVE STREAM ===== */}
          <section className="py-24 relative">
            <Container>
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 rounded-full bg-gold-100 text-gold-800 text-sm font-semibold mb-4">
                  {homePageData.liveStreamSection?.badge || '🔴 LIVE STREAMING'}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 font-serif">
                  {homePageData.liveStreamSection?.title || 'Join Us From Anywhere'}
                </h2>
                <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                  {homePageData.liveStreamSection?.description || 'Can\'t make it in person? Experience our services live online and be part of our community from the comfort of your home.'}
                </p>
              </div>
              <div className="max-w-5xl mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white/90 backdrop-blur-sm" style={{border: '4px solid rgba(0, 78, 78, 0.3)'}}>
                  <LivePlayer href={homePageData.liveStreamSection?.streamUrl || 'https://www.facebook.com/share/1BJyhjBtP1/?mibextid=wwXIfr'} />
                </div>
              </div>
            </Container>
          </section>

          {/* ===== QUICK LINKS ===== */}
          <section className="py-24">
            <Container>
              <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 font-serif">
                    {homePageData.quickLinksSection?.title || 'Explore Our Ministry'}
                  </h2>
                <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                  {homePageData.quickLinksSection?.description || 'Discover the many ways you can connect, grow, and serve in our community.'}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(homePageData.quickLinksSection?.links || [
                  { url: '/sermon', title: 'Sermons', description: 'Inspiring messages', icon: '📖' },
                  { url: '/events', title: 'Events', description: 'Community gatherings', icon: '🙌' },
                  { url: '/teams', title: 'Our Team', description: 'Meet our leaders', icon: '👥' },
                  { url: '/contact', title: 'Connect', description: 'Get in touch', icon: '💬' },
                ]).map((item, i) => (
                  <Link
                    key={i}
                    href={item.url}
                    className="group modern-card p-8 hover:shadow-xl transition-shadow no-underline"
                  >
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-3xl shadow-md" style={{backgroundColor: 'rgba(0, 78, 78, 0.95)'}}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">{item.description}</p>
                    <div className="flex items-center text-accent-600 font-medium group-hover:translate-x-1 transition-transform">
                      Learn more
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </section>

          {/* ===== CTA ===== */}
          <section className="py-24 relative">
            <Container>
              <div className="max-w-4xl mx-auto text-center modern-card p-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-primary-900">
                  {homePageData.ctaSection?.title || 'Ready to Take the Next Step?'}
                </h2>
                <p className="text-xl text-neutral-700 mb-10">
                  {homePageData.ctaSection?.description || 'Whether you\'re exploring faith for the first time or looking for a church home, we\'d love to welcome you into our community.'}
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="p-6 rounded-xl bg-white/70" style={{border: '1px solid rgba(0, 78, 78, 0.3)'}}>
                    <h3 className="text-2xl font-bold mb-3 text-primary-900">Visit Us</h3>
                    <p className="text-neutral-700 mb-1">{homePageData.ctaSection?.address?.line1 || address.line1}</p>
                    <p className="text-neutral-700 mb-4">{homePageData.ctaSection?.address?.city || address.city}</p>
                    <a
                      className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold no-underline transition-all hover:opacity-90"
                      style={{backgroundColor: 'rgba(0, 78, 78, 0.95)'}}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={homePageData.ctaSection?.address?.mapsUrl || address.mapsUrl}
                    >
                      Get Directions
                    </a>
                  </div>
                  <div className="p-6 rounded-xl bg-white/70" style={{border: '1px solid rgba(0, 78, 78, 0.3)'}}>
                    <h3 className="text-2xl font-bold mb-3 text-primary-900">Connect Online</h3>
                    <p className="text-neutral-700 mb-4">
                      {homePageData.ctaSection?.onlineDescription || 'Join our online community and stay updated with everything happening at Gospel of Peace.'}
                    </p>
                    <Link
                      className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold no-underline transition-all hover:opacity-90"
                      style={{backgroundColor: 'rgba(0, 78, 78, 0.95)'}}
                      href="/contact"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </main>
      </div>
    </>
  )
}
