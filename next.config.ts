import type { NextConfig } from "next";

// 1. 현재 빌드 환경이 Vercel인지 확인합니다. (Vercel은 빌드 시 VERCEL 환경변수를 제공함)
const isVercel = process.env.VERCEL === "1";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  /**
   * 2. 경로 설정 로직
   * - 로컬 개발 환경: "" (루트)
   * - Vercel 배포: "" (루트)
   * - GitHub Pages 배포: "/videoEdit_update" (서브 경로)
   */
  basePath: isProd ? (isVercel ? "" : "/videoEdit_update") : "",

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
