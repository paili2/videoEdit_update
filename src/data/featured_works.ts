// 1. 현재 환경이 배포된 상태인지 확인합니다.
const isProd = process.env.NODE_ENV === "production";
// 2. 배포 환경일 때만 레포지토리 이름인 '/videoEdit_update'를 경로 앞에 붙여줍니다.
const prefix = isProd ? "/videoEdit_update" : "";

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
    // 3. 로컬에서는 /seoul.png가 되고, 배포 시에는 /videoEdit_update/seoul.png가 됩니다.
    thumbnailUrl: `${prefix}/seoul.png`,
  },
  {
    slug: "siren-remix-lyrics",
    title: "사이렌 Remix – 가사 영상",
    tag: "MUSIC",
    thumbnailUrl: "https://img.youtube.com/vi/lbO0ATmCLrE/hqdefault.jpg",
  },
];
