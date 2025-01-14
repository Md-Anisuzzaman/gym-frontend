import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:'r2-us-west.photoai.com'
      },
      {
        protocol: "https",
        hostname:'www.healthdigest.com'
      },
      {
        protocol: "https",
        hostname:'images.rawpixel.com'
      },
      {
        protocol: "https",
        hostname:'imgcdn.stablediffusionweb.com'
      },
      {
        protocol: "https",
        hostname:'imgcdn.stablediffusionweb.com'
      },
      {
        protocol: "https",
        hostname:'thumbs.dreamstime.com'
      },
    ],
  },
};

export default nextConfig;
