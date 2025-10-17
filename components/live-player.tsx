'use client'
import { useState } from 'react'


export default function LivePlayer({ href }: { href: string }) {
const [visible, setVisible] = useState(false)
return (
<div className="w-full">
{!visible && (
<button
onClick={() => setVisible(true)}
className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-50"
>
▶ Watch Live on Facebook
</button>
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