/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['i.scdn.co', 'a.ltrbxd.com', 'steamcdn-a.akamaihd.net'],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
  basePath: '',
  async headers() {
    return [
      {
        source: '/cv/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf'
          },
          {
            key: 'Content-Disposition',
            value: 'inline'
          }
        ],
      },
    ]
  }
}

module.exports = nextConfig
