import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. 정적 배포를 위한 설정 (필수)
  output: "export",

  // 2. 레포지토리 이름이 'videoEdit_update'인 경우 (필수)
  // 경로가 paili2.github.io/videoEdit_update/ 처럼 잡히기 때문에 필요합니다.
  basePath: "/videoEdit_update",

  images: {
    // 3. GitHub Pages는 이미지 최적화 서버를 지원하지 않으므로 꺼주어야 합니다. (필수)
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
