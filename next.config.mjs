/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Add basePath for GitHub Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // Disable image optimization since we're doing static export
  images: {
    unoptimized: true,
    domains: [],
  },
  // Enable static exports
  trailingSlash: true,
};

export default nextConfig;
