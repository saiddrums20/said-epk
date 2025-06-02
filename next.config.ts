import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/said-epk',
  assetPrefix: '/said-epk',
  trailingSlash: true,
};

export default nextConfig;
