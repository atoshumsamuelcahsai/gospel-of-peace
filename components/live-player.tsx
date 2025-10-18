'use client'
import { useState } from 'react'

export default function LivePlayer({ href }: { href: string }) {
  const [visible, setVisible] = useState(false)
  return (
    <div className="w-full">
      {!visible && (
        <div className="flex items-center gap-3">
          <button
            onClick={() => setVisible(true)}
            className="rounded-lg border border-primary-800/20 px-4 py-2 text-sm font-medium text-primary-900 hover:bg-cream-100 transition-colors"
          >
            ▶ Watch Here
          </button>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border-2 border-gold-400 px-4 py-2 text-sm font-semibold text-primary-900 hover:bg-gold-50 transition-colors"
          >
            Open on Facebook
          </a>
        </div>
      )}
      {visible && (
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(href)}&show_text=false&width=800`}
            width="800" height="450"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no" frameBorder={0} allow={"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"}
            allowFullScreen
          />
        </div>
      )}
    </div>
  )
}