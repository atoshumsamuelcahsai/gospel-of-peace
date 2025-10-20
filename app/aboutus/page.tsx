import Container from '@/components/container'
import PortableTextRenderer from '@/components/portable-text-renderer'
import { getAboutUsContent } from '@/lib/sanity'

export const revalidate = 60

export default async function AboutUsPage() {
  const aboutUsData = await getAboutUsContent('en')

  return (
    <Container>
      <div 
        className="py-10">
        <h1 className="text-4xl font-bold text-primary-900 mb-8 text-center">
          {aboutUsData.title}
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className="rounded-lg shadow-lg p-8"
            style={{ backgroundColor: '#E9F3FB' }}
          >
            <PortableTextRenderer content={aboutUsData.content} />
          </div>
        </div>
      </div>
    </Container>
  )
}
