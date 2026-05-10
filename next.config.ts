import type { NextConfig } from "next";

const nextConfig: NextConfig = {

 // Allow image hostname from unsplash.com
 images: {
  remotePatterns: [
    {
      hostname: "upload.wikimedia.org",
    },
  ],
}
};

export default nextConfig;
