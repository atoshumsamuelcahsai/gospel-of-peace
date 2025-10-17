import Container from '@/components/container'
import LivePlayer from '@/components/live-player'
import Link from 'next/link'


export const revalidate = 60


export default async function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <Container>
          <div className="py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-800 mb-6">
              Gospel of Peace
            </h1>
            <h2 className="text-xl md:text-2xl font-sans text-primary-600 mb-4">
              Glasgow Church
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              We are a gospel-centered church in Glasgow, committed to sharing the love of Christ 
              and building a community of faith. Come as you are, and experience God's grace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 no-underline" 
                href="/aboutus"
              >
                Learn More About Us
              </Link>
              <Link 
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 no-underline" 
                href="/contact"
              >
                Plan Your Visit
              </Link>
            </div>
            
            {/* Service Times */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-secondary-800 mb-3">Service Times</h3>
              <p className="text-primary-600 font-medium">Sundays at 11:00 AM</p>
              <p className="text-secondary-600 text-sm mt-1">4 Elibank Street, Glasgow</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Live Stream Section */}
      <section className="py-16 bg-secondary-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-secondary-800 mb-4">
              Join Us Online
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Can't make it in person? Join our live stream and be part of our community from anywhere.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <LivePlayer href="https://www.facebook.com/your-page/live" />
          </div>
        </Container>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-secondary-800 mb-4">
              Explore Our Church
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Discover more about our community, beliefs, and how you can get involved.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/sermon" 
              className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition-shadow duration-200 no-underline group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <span className="text-primary-600 text-xl">📖</span>
              </div>
              <h3 className="font-semibold text-secondary-800 mb-2">Sermons</h3>
              <p className="text-secondary-600 text-sm">Listen to our latest messages</p>
            </Link>

            <Link 
              href="/events" 
              className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition-shadow duration-200 no-underline group"
            >
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-200 transition-colors">
                <span className="text-accent-600 text-xl">📅</span>
              </div>
              <h3 className="font-semibold text-secondary-800 mb-2">Events</h3>
              <p className="text-secondary-600 text-sm">Upcoming church events</p>
            </Link>

            <Link 
              href="/teams" 
              className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition-shadow duration-200 no-underline group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <span className="text-primary-600 text-xl">👥</span>
              </div>
              <h3 className="font-semibold text-secondary-800 mb-2">Our Team</h3>
              <p className="text-secondary-600 text-sm">Meet our leadership</p>
            </Link>

            <Link 
              href="/contact" 
              className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition-shadow duration-200 no-underline group"
            >
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-200 transition-colors">
                <span className="text-accent-600 text-xl">📧</span>
              </div>
              <h3 className="font-semibold text-secondary-800 mb-2">Contact</h3>
              <p className="text-secondary-600 text-sm">Get in touch with us</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-primary-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-secondary-800 mb-6">
              Welcome to Our Family
            </h2>
            <p className="text-lg text-secondary-600 leading-relaxed mb-8">
              At Gospel of Peace, we believe in the power of community, the strength of faith, 
              and the transformative love of Jesus Christ. Whether you're new to faith or have 
              been walking with God for years, you'll find a warm welcome here.
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-secondary-800 mb-4">Plan Your Visit</h3>
              <p className="text-secondary-600 mb-4">4 Elibank Street, Glasgow</p>
              <p className="text-primary-600 font-medium mb-4">Sundays at 11:00 AM</p>
              <a 
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 no-underline" 
                target="_blank" 
                rel="noreferrer" 
                href="https://maps.google.com"
              >
                Get Directions
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}