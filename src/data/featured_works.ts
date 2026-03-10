// 1. 현재 환경이 배포된 상태인지 확인합니다.
const isProd = process.env.NODE_ENV === "production";

/**
 * 2. 현재 환경이 버셀(Vercel)인지 확인하는 로직 (더 강력한 버전)
 * - 빌드 시점: process.env.VERCEL 확인
 * - 브라우저 실행 시점: window.location.hostname에 'vercel'이 포함되어 있는지 확인
 */
const getIsVercel = () => {
  if (typeof window !== "undefined") {
    // 브라우저 환경에서 현재 주소 확인
    return (
      window.location.hostname.includes("vercel.app") ||
      window.location.hostname.includes("vercel")
    );
  }
  // 빌드 시점 환경 변수 확인
  return process.env.NEXT_PUBLIC_VERCEL === "1" || process.env.VERCEL === "1";
};

const isVercel = getIsVercel();

/**
 * 3. 환경별 경로(prefix) 설정
 * - 버셀이거나 로컬이면 빈 값(""), 깃허브 페이지면 "/videoEdit_update"
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
    thumbnailUrl: `${prefix}/seoul.png`,
  },
  {
    slug: "siren-remix-lyrics",
    title: "사이렌 Remix – 가사 영상",
    tag: "MUSIC",
    thumbnailUrl: "https://img.youtube.com/vi/lbO0ATmCLrE/hqdefault.jpg",
  },
];
