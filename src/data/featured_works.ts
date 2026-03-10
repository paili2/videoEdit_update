// 1. 현재 환경이 배포된 상태인지 확인합니다.
const isProd = process.env.NODE_ENV === "production";

// 2. 버셀 환경인지 확인합니다. (Vercel 빌드 시 자동으로 생성되는 환경 변수 활용)
// 브라우저 환경에서도 안전하게 인식되도록 NEXT_PUBLIC_ 접두사가 붙은 변수나 기본 VERCEL 변수를 체크합니다.
const isVercel =
  process.env.NEXT_PUBLIC_VERCEL === "1" || process.env.VERCEL === "1";

/**
 * 3. 환경별 경로(prefix) 설정
 * - 로컬 개발 환경: ""
 * - 버셀 배포 환경: "" (루트 경로 사용)
 * - 깃허브 배포 환경: "/videoEdit_update" (레포지토리 명칭 사용)
 */
const prefix = isProd ? (isVercel ? "" : "/videoEdit_update") : "";

export const FEATURED_WORKS = [
  {
    slug: "savannah-farm-pd",
    title: "사바나농장 영상 작업물",
    tag: "PRODUCTION",
    thumbnailUrl: `${prefix}/savanna.png`,
  },
  {
    slug: "dog-hide-and-seek",
    title: "강아지 숨바꼭질 · 유기에 대한 이야기",
    tag: "VLOG",
    thumbnailUrl: "https://img.youtube.com/vi/a5SJHOZxvZo/hqdefault.jpg",
  },
  // {
  //   slug: "edit-test-nyaha",
  //   title: "흔한남매 편집 테스트",
  //   tag: "EDIT TEST",
  //   thumbnailUrl: "https://img.youtube.com/vi/hSgeooN0f0I/hqdefault.jpg",
  // },
  {
    slug: "shorts-convenience-1plus1-2025",
    title: "일본인 대상 한국 소개 숏폼",
    tag: "SHORTS",
    thumbnailUrl: "https://img.youtube.com/vi/NrGhA5scH5c/hqdefault.jpg",
  },
  {
    slug: "pet-cafe-vlog",
    title: "애견카페 감성 브이로그",
    tag: "VLOG",
    thumbnailUrl: "https://img.youtube.com/vi/NZs0WkAmhPA/hqdefault.jpg",
  },
  {
    slug: "music-ad-seoul-mujeonghae",
    title: "타이포그래피",
    tag: "MUSIC",
    // 로컬/버셀에서는 /seoul.png, 깃허브에서는 /videoEdit_update/seoul.png가 됩니다.
    thumbnailUrl: `${prefix}/seoul.png`,
  },
  {
    slug: "siren-remix-lyrics",
    title: "사이렌 Remix – 가사 영상",
    tag: "MUSIC",
    thumbnailUrl: "https://img.youtube.com/vi/lbO0ATmCLrE/hqdefault.jpg",
  },
];
