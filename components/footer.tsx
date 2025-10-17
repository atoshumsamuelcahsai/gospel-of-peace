import Container from './container'


export default function Footer() {
return (
<footer className="border-t mt-16">
<Container>
<div className="py-8 text-sm text-slate-500">
<p>© {new Date().getFullYear()} Gospel of Peace. All rights reserved.</p>
<p className="mt-2">Sundays 11:00 — 4 Elibank Street, Glasgow</p>
</div>
</Container>
</footer>
)
}