/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other Next.js config options (if any)
  webpack(config:any) {
    config.module.rules.push({
      test: /\.svg$/, // Match SVG files
      use: ['@svgr/webpack'], // Use the SVGR loader
    });

    return config;
  },
};

module.exports = nextConfig;
