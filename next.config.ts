import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
     images: {
        loader: "default",
        unoptimized: true,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
            pathname: "/**",
            port: "",
          },
        ],
      },
      typescript: {
        ignoreBuildErrors: true,
      },

};

export default nextConfig;
