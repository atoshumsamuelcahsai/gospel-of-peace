import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'


export const metadata: Metadata = {
title: 'Gospel of Peace – Church',
description: 'Welcome to our church. Join us Sundays!'
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen flex flex-col">
<Header />
<main className="flex-1">{children}</main>
<Footer />
</body>
</html>
)
}