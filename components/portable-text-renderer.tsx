import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8">
          <img
            src={urlFor(value).width(800).height(600).fit('max').auto('format').url()}
            alt={value.alt || 'Image'}
            className="rounded-lg shadow-lg w-full h-auto"
          />
          {value.alt && (
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              {value.alt}
            </p>
          )}
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-primary-900 mb-6 mt-8 font-serif">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-primary-900 mb-5 mt-7 font-serif">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold text-primary-900 mb-4 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold text-primary-900 mb-3 mt-5">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 mb-4 leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary-600 pl-6 py-2 my-6 italic text-gray-700 bg-primary-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="ml-4">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="ml-4">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-primary-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-primary-800">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-600 hover:text-primary-800 underline transition-colors"
      >
        {children}
      </a>
    ),
  },
}

interface PortableTextRendererProps {
  content: any[]
  className?: string
}

export default function PortableTextRenderer({ content, className = '' }: PortableTextRendererProps) {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <PortableText value={content} components={components} />
    </div>
  )
}
