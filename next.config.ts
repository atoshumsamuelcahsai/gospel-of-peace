import type { NextConfig } from 'next'


const nextConfig: NextConfig = {
images: {
remotePatterns: [
{ protocol: 'https', hostname: 'cdn.sanity.io' },
{ protocol: 'https', hostname: 'i.ytimg.com' },
{ protocol: 'https', hostname: 'scontent.xx.fbcdn.net' },
{ protocol: 'https', hostname: 'static.xx.fbcdn.net' },
],
},
}
export default nextConfig