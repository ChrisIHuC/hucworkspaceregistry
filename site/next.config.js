/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'HuC Kasm Workspace Registry',
    description: 'Kasm Workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://chrisihuc.github.io/hucworkspaceregistry/1.0/',
    contactUrl: 'https://di.huc.knaw.nl/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/hucworkspaceregistry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
