/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/docs/core",
        destination: "/docs/core/vscode",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
