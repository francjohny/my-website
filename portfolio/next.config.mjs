/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-website",
  assetPrefix: "/my-website",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/identicons/**",
      },
    ],
  },
};

export default nextConfig;
