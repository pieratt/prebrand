/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/Home", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/store-grid", destination: "/", permanent: true },
      { source: "/nav", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
