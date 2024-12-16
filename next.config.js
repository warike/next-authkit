import "./src/env.js";
/** @type {import("next").NextConfig} */

export default {
  output: "standalone",
  reactStrictMode: true, 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'workoscdn.com',
      },
    ],
  },
}

