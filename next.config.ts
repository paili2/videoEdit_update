import type { NextConfig } from "next";

// 배포 환경(production)인지 확인합니다.
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  // 배포할 때만 '/videoEdit_update'를 붙이고, 로컬 테스트 시에는 빈 값을 사용합니다.
  basePath: isProd ? "/videoEdit_update" : "",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
