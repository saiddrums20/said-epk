import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/said-epk' : '',
  basePath: isProd ? '/said-epk' : '',
  trailingSlash: true,
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
