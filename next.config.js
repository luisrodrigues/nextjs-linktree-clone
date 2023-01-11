/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["luiro-blog.vercel.app", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
