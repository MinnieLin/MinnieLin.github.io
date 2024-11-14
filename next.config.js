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
}

module.exports = nextConfig
