/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL_VERCEL_BACKEND:
      process.env.NEXT_PUBLIC_BASE_URL_VERCEL_BACKEND,
  },
  reactStrictMode: true,
  pageExtensions: [
    "mdx",
    "md",
    "jsx",
    "js",
    "tsx",
    "ts",
    "atom.tsx",
    "molecule.tsx",
    "page.tsx",
    "page.ts",
    "page.jsx",
    "page.js",
  ],
  compiler: {
    styledComponents: true,
  },

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
