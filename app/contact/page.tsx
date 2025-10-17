import Container from '@/components/container'

export default function ContactPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <div className="mt-6">
          <p className="text-slate-600">Get in touch with us!</p>
          <div className="mt-4">
            <p><strong>Address:</strong> 4 Elibank Street, Glasgow</p>
            <p><strong>Service Times:</strong> Sundays 11:00</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
