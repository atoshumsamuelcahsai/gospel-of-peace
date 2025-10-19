import Container from '@/components/container'
import PortableTextRenderer from '@/components/portable-text-renderer'
import { getEventsContent } from '@/lib/sanity'

export const revalidate = 60

export default async function EventsPage() {
  const eventsData = await getEventsContent('en')

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-4xl font-bold text-primary-900 mb-8 text-center">
          {eventsData.title}
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <PortableTextRenderer content={eventsData.content} />
          </div>
        </div>
      </div>
    </Container>
  )
}