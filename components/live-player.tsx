'use client'
import { useState } from 'react'

interface LivePlayerProps {
  href: string
}

export default function LivePlayer({ href }: LivePlayerProps) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="w-full">
      {!visible && (
        <div className="flex items-center justify-center gap-3" style={{backgroundColor: 'rgba(0, 78, 78, 0.95)'}}>
          <button
            onClick={() => setVisible(true)}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-colors"
            style={{backgroundColor: 'rgba(0, 78, 78, 0.95)'}}
          >
            ▶ Watch Here
          </button>
          <a
            href="https://www.facebook.com/share/1BJyhjBtP1/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border-2 border-white/20 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-colors"
            style={{backgroundColor: 'rgba(0, 78, 78, 0.95)'}}
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