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
    { mobileSrc: '/hero/two.webp', desktopSrc: '/hero/two.webp', alt: 'Congregation gathering' },
    { mobileSrc: '/hero/one.webp', desktopSrc: '/hero/one.webp', alt: 'Worship Service' },
    // { mobileSrc: '/aboutus/y-1.png', desktopSrc: '/aboutus/y-1.png', alt: 'youth choir 1' },
    // { mobileSrc: '/aboutus/y-2.png', desktopSrc: '/aboutus/y-2.png', alt: 'youth choir 2' },
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
            addressLocality: address.city, // { mobileSrc: '/aboutus/y-1.png', desktopSrc: '/aboutus/y-1.png', alt: 'youth choir 1' },
            // { mobileSrc: '/aboutus/y-2.png', desktopSrc: '/aboutus/y-2.png', alt: 'youth choir 2' },
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
        <section 
          className="py-12 md:py-16 animate-fade-in-up">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start" >
              <div className="p-6 rounded-lg shadow-lg bg-white animate-fade-in-left animate-delay-100"  style={{
                  backgroundImage: 'url(aboutus/peace.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-primary-900 mb-6 animate-fade-in-up animate-delay-200" style={{border: '1px solid rgba(0, 78, 78, 0.3)'}}>
                  <span className="h-2 w-2 rounded-full bg-accent-500" aria-hidden />
                  <span className="text-xs font-semibold tracking-wide">{homePageData.heroSection?.serviceTime || 'Sundays · 11:00 AM'}</span>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold tracking-tight font-serif text-primary-900 mb-3 animate-fade-in-up animate-delay-300">
                  {homePageData.heroSection?.title}
                </h1>
                <p className="text-lg md:text-2xl text-primary-900 mb-3 font-medium animate-fade-in-up animate-delay-400">
                  {homePageData.heroSection?.subtitle }
                </p>
                <p className="text-base md:text-lg text-neutral-700 mb-8 leading-relaxed font-medium max-w-xl animate-fade-in-up animate-delay-500">
                  {homePageData.heroSection?.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-500">
                  {(homePageData.heroSection?.ctaButtons || [
                    { title: 'Discover Our Story', url: '/aboutus', style: 'primary' },
                    { title: 'Plan Your Visit', url: '/contact', style: 'secondary' },
                  ]).map((button: any, index: number) => (
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
              
              {/* Weekly Routine Schedule */}
              <div 
                className="block p-6 rounded-lg shadow-lg bg-white animate-fade-in-right animate-delay-200"
              >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-primary-900 mb-6 animate-fade-in-up animate-delay-300" style={{border: '1px solid rgba(0, 78, 78, 0.3)'}}>
                   <span className="h-2 w-2 rounded-full bg-accent-500" aria-hidden />
                   <span className="text-xs font-semibold tracking-wide">Free Parking Available</span>
                 </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4 text-center animate-fade-in-up animate-delay-400">Weekly Schedule</h3>
                <ul className="space-y-2 sm:space-y-3 text-primary-900">
                  <li className="flex items-center gap-1 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-500 flex-shrink-0"></span>
                    <span className="font-semibold text-xs sm:text-sm">Sunday Prayer:</span>
                    <span className="text-xs sm:text-sm ml-auto">11:00 AM</span>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-500 flex-shrink-0"></span>
                    <span className="font-semibold text-xs sm:text-sm">Daily Morning Prayer:</span>
                    <span className="text-xs sm:text-sm ml-auto">6:00 AM (WhatsApp)</span>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-500 flex-shrink-0"></span>
                    <span className="font-semibold text-xs sm:text-sm">Wednesday Prayer:</span>
                    <span className="text-xs sm:text-sm ml-auto">6:00 PM (Church)</span>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-500 flex-shrink-0"></span>
                    <span className="font-semibold text-xs sm:text-sm">Thursday Bible Study:</span>
                    <span className="text-xs sm:text-sm ml-auto">9:00 PM (Teams)</span>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-500 flex-shrink-0"></span>
                    <span className="font-semibold text-xs sm:text-sm">Sunday School:</span>
                    <span className="text-xs sm:text-sm ml-auto">Kids of all ages</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold no-underline transition-all hover:opacity-90"
                    style={{backgroundColor: 'rgba(0, 78, 78, 0.95)'}}
                  >
                    For More Information Contact Us
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <br/>
                </div>
              </div>
            </div><br/>
          </Container>
        </section>

        <main id="main">
          {/* ===== LIVE STREAM ===== */}
          <section className="py-2 relative animate-fade-in-up" >
            <Container>
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 rounded-full bg-gold-100 text-gold-800 text-sm font-semibold mb-4">
                  {'🔴 Online Streaming'}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 font-serif">
                  {homePageData.liveStreamSection?.title || 'Join Us From Anywhere'}
                </h2>
                <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                  {homePageData.liveStreamSection?.description || 'Can\'t make it in person? Experience our services live online and be part of our community from the comfort of your home.'}
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://www.facebook.com/profile.php?id=100069445329348&sk=live_videos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-gold-800 rounded-lg font-semibold no-underline transition-all hover:opacity-90 bg-gold-100"
                  >
                    🔴 Live Stream
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  
                  <Link
                    href="https://www.facebook.com/profile.php?id=100069445329348&sk=reels_tab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold no-underline transition-all hover:opacity-90"
                    style={{backgroundColor: 'rgba(0, 78, 78, 0.95)'}}
                  >
                    🎬 Watch Reels
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                  
                  <Link
                    href="https://www.facebook.com/share/1BJyhjBtP1/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-blue-600 rounded-lg font-semibold no-underline transition-all hover:opacity-90 bg-white border-2 border-blue-600"
                  >
                    📘 Facebook
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
              </Container>
            </section>

            {/* ===== BIBLE VERSE SCROLLING ===== */}
            <section className="py-4 relative animate-fade-in-up">
              <Container>
                <div className="max-w-5xl mx-auto">
                  <div className="rounded-2xl overflow-hidden shadow-xl flex items-center" style={{backgroundColor: '#1B4D3E', border: '4px solid rgba(0, 78, 78, 0.3)'}}>
                    <div className="w-full overflow-hidden">
                      <div className="animate-scroll-left text-lg md:text-xl font-bold text-white whitespace-nowrap">
                        "Come unto me, all ye that labour and are heavy laden, and I will give you rest." - Matthew 11:28 • "Therefore welcome one another as Christ has welcomed you, for the glory of God." - Romans 15:7 •
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
  
          {/* ===== CTA ===== */}
          <section className="py-4 relative animate-fade-in-up">
            <Container>
              <div 
                className="max-w-4xl mx-auto text-center modern-card p-10 bg-amber-50"
                style={{
                  backgroundImage: 'url(aboutus/cross-sem.avif)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-5 font-serif" style={{color: '#A0522D'}}>
                  {homePageData.ctaSection?.title}
                </h2>
                <p className="text-xl mb-10 font-bold" style={{color: '#A0522D'}}>
                  {homePageData.ctaSection?.description}
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

           {/* ===== QUICK LINKS ===== */}
           <section className="py-4 animate-fade-in-up">
            <Container>
              <div className="text-center mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">
                    {homePageData.quickLinksSection?.title || 'Explore Our Ministry'}
                  </h3>
                <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                  {homePageData.quickLinksSection?.description || 'Discover the many ways you can connect, grow, and serve in our community.'}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(homePageData.quickLinksSection?.links || [
                  { url: '/sermon', title: 'Sermons', description: 'Inspiring messages', icon: '📖' },
                  { url: '/events', title: 'Events', description: 'Community gatherings', icon: '✨' },
                  { url: '/teams', title: 'Our Team', description: 'Meet our leaders', icon: '👥' },
                  { url: '/contact', title: 'Connect', description: 'Get in touch', icon: '💬' },
                ]).map((item: any, i: number) => (
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

           {/* ===== STATS ===== */}
          {/* ===== STATS ===== */}
<section className="py-12 bg-white/80 animate-fade-in-up">
  <Container>
    {/* Heading + description */}
    <div className="text-center mb-10 max-w-2xl mx-auto">
      <h2 className="text-3xl font-extrabold text-primary-900 mb-3">
        Our Community in Numbers
      </h2>
      <p className="text-neutral-700 text-base md:text-lg">
        A glimpse of what God is doing through Gospel of Peace Glasgow —
        from growing fellowship to years of faithful service.
      </p>
    </div>

    {/* Stats Grid */}
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list">
      {homePageData.statsSection.stats.map((stat: any, i: number) => (
        <li
          key={i}
          className="text-center modern-card p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="text-4xl mb-3" aria-hidden>
            {stat.icon}
          </div>
          <div className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
            {stat.number}
          </div>
          <div className="text-sm text-neutral-600 font-medium">
            {stat.label}
          </div>
        </li>
      ))}
    </ul>
  </Container>
</section>

        </main>
      </div>
    </>
  )
}
