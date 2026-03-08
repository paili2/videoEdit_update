import { WorkItem } from "../types/works.type";

export const WORKS: WorkItem[] = [
  // 1. 펭수빵 – 롱폼
  {
    slug: "pengsoo-bread",
    title: "펭수빵 리액션 콘텐츠",
    category: "VLOG",
    thumbnailUrl: "https://img.youtube.com/vi/EGkK9KsFKiw/hqdefault.jpg",
    youtubeUrl: "https://youtu.be/EGkK9KsFKiw?si=LiciLTEHMcZ9zCCE",
    role: "기획 · 촬영 · 편집",
    year: "2020",
    kind: "long",
    videos: [
      {
        title: "본편",
        youtubeUrl: "https://youtu.be/EGkK9KsFKiw?si=LiciLTEHMcZ9zCCE",
        description:
          "‘펭수빵’이 출시되던 시기의 화제성을 활용해 제작한 예능형 리액션 콘텐츠입니다. 귀엽고 엉뚱한 채널 톤을 유지하면서, 제품 탐색 → 구매 → 시식 흐름을 리듬감 있게 구성했습니다.",
        bullets: [
          "트렌드(펭수 인기·신제품 출시)를 활용한 기획",
          "상황 기반 리액션 중심의 스토리텔링",
          "구매 과정 및 시식을 코믹하게 편집해 몰입감 강화",
          "엉뚱·밝은 채널 캐릭터가 드러나는 자막 연출",
        ],
        views: "",
        likes: "",
      },
    ],
  },

  // 2. 강아지 숨바꼭질 – 롱폼
  {
    slug: "dog-hide-and-seek",
    title: "강아지 숨바꼭질, 그리고 유기에 대한 이야기",
    category: "VLOG",
    thumbnailUrl: "https://img.youtube.com/vi/a5SJHOZxvZo/maxresdefault.jpg",
    youtubeUrl: "https://youtu.be/a5SJHOZxvZo",
    role: "기획 · 촬영 · 편집",
    year: "2020",
    kind: "long",
    videos: [
      {
        title: "본편",
        youtubeUrl: "https://youtu.be/a5SJHOZxvZo",
        description:
          "달이와 즐거운 숨바꼭질로 가볍게 시작하지만, 보호자가 사라졌을 때 달이가 느끼는 불안과 초조함을 통해 반려동물도 깊은 감정을 가진 존재임을 전하는 메시지형 콘텐츠입니다. 저작권 문제로 방송 자료는 삽입하지 않았으며, 엔딩에 텍스트 안내와 참고 링크로 맥락을 제공했습니다.",
        bullets: [
          "숨바꼭질 상황을 통해 감정 변화를 드러내는 내러티브",
          "‘반려동물도 불안과 두려움을 느낀다’는 메시지 전달",
          "저작권 대응: 텍스트 메시지 + 외부 링크로 보완",
          "가벼운 시작에서 생각을 남기는 엔딩 구성",
          "일상 소재를 활용한 사회적 메시지형 콘텐츠",
        ],
        views: "",
        likes: "",
      },
    ],
  },

  // 3. 아이스크림 과자 나무 – 롱폼
  {
    slug: "vlog-icecream-tree",
    title: "아이스크림 과자 나무 브이로그",
    category: "VLOG",
    thumbnailUrl: "https://img.youtube.com/vi/w5WN1fdoJFM/maxresdefault.jpg",
    youtubeUrl: "https://youtu.be/w5WN1fdoJFM?si=Hg2-bdHMGHUeWNaH",
    role: "기획 · 촬영 · 편집",
    year: "2020",
    kind: "long",
    videos: [
      {
        title: "본편",
        youtubeUrl: "https://youtu.be/w5WN1fdoJFM?si=Hg2-bdHMGHUeWNaH",
        description:
          "만우절을 맞아 가족들에게 작은 이벤트로 ‘과자 나무’를 연출하고, 그 반응을 자연스럽게 담은 영상입니다. 밝고 따뜻한 채널 분위기를 살린 브이로그 스타일로 제작했습니다.",
        bullets: [
          "가족 참여형 만우절 이벤트 기획",
          "일상 공간을 활용한 '아이스크림 나무' 콘셉트 연출",
          "리액션 중심의 따뜻한 브이로그 구성",
          "밝고 유쾌한 편집 톤",
          "일상을 창의적으로 콘텐츠화한 아이디어 중심 영상",
        ],
        views: "",
        likes: "",
      },
    ],
  },

  // 흔한남매 편집 테스트 영상
  {
    slug: "edit-test-nyaha",
    title: "흔한남매 - 지원 영상",
    category: "EDIT TEST",
    thumbnailUrl: "https://img.youtube.com/vi/hSgeooN0f0I/hqdefault.jpg", // 필요하면 이미지 생성 가능
    youtubeUrl: "https://youtu.be/hSgeooN0f0I", // 비공개면 공란 또는 구글드라이브 링크
    role: "편집",
    year: "2020",
    kind: "long",
    videos: [
      {
        title: "테스트 편집본",
        youtubeUrl: "https://youtu.be/hSgeooN0f0I/maxresdefault.jpg", // 비공개 링크 사용 권장
        description:
          "유튜브 채널 ‘흔한남매’ 편집자 지원 테스트를 위해 제작한 샘플 편집 영상입니다. 원본 톤에 맞춘 컷 구성, 리듬 편집, 타이포그래피 등을 중심으로 역량을 보여주기 위해 제작했습니다. 상업적 목적 없이 포트폴리오 검토용으로만 사용됩니다.",
        bullets: [
          "원본 톤에 맞춘 코믹 편집 구성",
          "컷 분배·리듬 편집 중심의 구조 설계",
          "타이포그래피·효과 활용으로 재미 요소 강화",
          "비공개 테스트 영상 — 포트폴리오 제출용",
        ],
        views: "",
        likes: "",
      },
    ],
  },

  // ⭐ 7. 도둑 으뜸이 편집 테스트 영상
  {
    slug: "edit-test-euddeum",
    title: "흔한남매 - 편집 영상",
    category: "EDIT TEST",
    thumbnailUrl: "https://img.youtube.com/vi/hr48QjYiczU/maxresdefault.jpg",
    youtubeUrl: "https://youtu.be/hr48QjYiczU",
    role: "편집",
    year: "2021",
    kind: "long",
    videos: [
      {
        title: "테스트 편집본",
        youtubeUrl: "https://youtu.be/hr48QjYiczU",
        description:
          "유튜브 흔한남매 콘텐츠를 기반으로 제작한 편집 테스트 영상입니다. 오버액션·리액션 중심의 채널 스타일에 맞춰 컷 템포, 효과음, 자막 스타일을 적용해 재미 요소를 강화했습니다. 원본 저작권은 해당 채널에 있으며, 본 영상은 편집 역량 확인용 포트폴리오용으로만 사용됩니다.",
        bullets: [
          "오버액션·리액션 중심 채널 스타일에 맞춘 편집",
          "효과음·자막 스타일로 코믹 요소 강화",
          "속도 조절·컷 전환 중심의 템포 편집",
          "비공개 테스트 영상 — 포트폴리오 제출용",
        ],
        views: "",
        likes: "",
      },
    ],
  },

  // 서울무정해 – 음악 광고(롱폼)
  {
    slug: "music-ad-seoul-mujeonghae",
    title: "백영규의 백다방TV-서울 무정해",
    category: "MUSIC",
    thumbnailUrl: "/seoul.png",
    youtubeUrl: "https://youtu.be/Tj5Se8v4tII",
    role: "편집",
    year: "2021",
    kind: "long",
    videos: [
      {
        title: "음악 타이포그래피 프로모션 본편",
        youtubeUrl: "https://youtu.be/Tj5Se8v4tII",
        description:
          "백영규 가수님의 신곡 ‘서울무정해’를 홍보하기 위해 제작한 타이포그래피 기반 프로모션 영상입니다. 빠른 리듬에 맞춰 텍스트가 전개되도록 구성해 몰입감을 높였습니다. 촬영 없이 텍스트 모션만으로 완성해 메시지 전달에 집중한 스타일입니다.",
        bullets: [
          "음원의 리듬에 맞춘 텍스트 타이밍·전개 설계",
          "촬영 없이 텍스트 모션 중심으로 구성한 미니멀 프로모션 영상",
          "반복 템포에서도 지루하지 않도록 텍스트 움직임 패턴 최적화",
          "썸네일은 작업 하지 않았습니다",
        ],
        views: "",
        likes: "",
      },
    ],
  },

  // 사이렌 Remix 가사 영상
  {
    slug: "siren-remix-lyrics",
    title: "사이렌 Remix – 가사 영상",
    category: "MUSIC",
    thumbnailUrl: "https://img.youtube.com/vi/lbO0ATmCLrE/hqdefault.jpg",
    youtubeUrl: "https://youtu.be/lbO0ATmCLrE?si=WxVa0BmrXAuYEMGd",
    role: "편집",
    year: "2021",
    kind: "long",
    videos: [
      {
        title: "가사 영상",
        youtubeUrl: "https://youtu.be/lbO0ATmCLrE?si=WxVa0BmrXAuYEMGd",
        description:
          "곡의 흐름에 맞춰 가사가 아래에서 위로 자연스럽게 등장하도록 구성한 리릭 비디오입니다. 특정 구간(0:23~0:26, 3:05~3:11)에는 힙합 특유의 거친 무드를 살리기 위해 글리치 텍스트를 삽입해 단조로울 수 있는 부분에 리듬감 있는 포인트를 주었습니다.",
        bullets: [
          "가사 타이밍을 음악 흐름에 정밀하게 맞춘 타이포그래피 구성",
          "특정 구간(0:23~0:26, 3:05~3:11)의 글리치 텍스트로 리듬감 보완",
          "전체 화면을 활용한 미니멀한 리릭 비디오 스타일",
          "플레이리스트 감성을 살린 편집 톤",
        ],
        views: "",
        likes: "",
      },
    ],
  }, // ⭐ 8. 수빙수TV 편집 포트폴리오 영상
  {
    slug: "edit-test-soobingsoo",
    title: "수빙수TV – 지원 영상",
    category: "EDIT TEST",
    thumbnailUrl: "/soo2.png",
    youtubeUrl: "https://youtu.be/cG50zsZ8BHg",
    role: "편집",
    year: "2022",
    kind: "long",

    videos: [
      {
        title: "편집 포트폴리오 영상",
        youtubeUrl: "https://youtu.be/cG50zsZ8BHg",
        description:
          "수빙수TV 채용 공고를 보고 제작한 지원용 편집본입니다. 초반 약 30초는 지원 상황에 어울리는 음악을 선택하고, 그 가사 흐름에 맞춰 사진과 자막으로 인사 메시지를 구성한 인트로로 시작됩니다. 이후에는 원본 수빙수 영상을 화면 중앙에 작게 배치해 동일한 자막 스타일과 템포로 편집했습니다.",
        bullets: [
          "사진과 BGM 가사 흐름을 활용한 자막 중심 인사 인트로 구성(약 30초)",
          "원본 영상을 축소 배치하고 수빙수TV 특유의 자막 스타일을 재현해 편집",
          "직원 채용 지원을 위해 제작한 비상업적 샘플 편집본",
        ],
        views: "",
        likes: "",
      },
    ],
  }, // ⭐ 애견카페 브이로그 – 롱폼
  {
    slug: "vlog-dog-cafe",
    title: "애견카페 감성 브이로그",
    category: "VLOG",
    thumbnailUrl: "https://img.youtube.com/vi/NZs0WkAmhPA/maxresdefault.jpg",
    youtubeUrl: "https://youtu.be/NZs0WkAmhPA",
    role: "촬영 · 편집",
    year: "2022",
    kind: "long",
    videos: [
      {
        title: "본편",
        youtubeUrl: "https://youtu.be/NZs0WkAmhPA",
        description:
          "강아지와 함께 애견카페를 방문해 촬영한 가벼운 브이로그입니다. 특별한 기획 없이 현장에서 자연스럽게 담은 사진과 영상을 조합해, 반려견과 공간 분위기를 중심으로 편안한 감성의 영상으로 구성했습니다.",
        bullets: [
          "기획 없이 자연스럽게 촬영한 일상 브이로그",
          "반려견의 행동과 공간 분위기 중심의 구성",
          "사진·영상 조합으로 편안한 톤 연출",
          "과한 효과 없이 흐름에 맞춘 자연스러운 편집",
        ],
        views: "",
        likes: "",
      },
    ],
  },
  // 5. 일본인 대상 숏폼 시리즈
  {
    slug: "shorts-convenience-1plus1-2025",
    title: "일본인 대상 한국 소개 영상",
    category: "SHORTS",
    thumbnailUrl: "/chanel_profile.png",
    role: "기획 · 촬영 · 편집 · 일본어 로컬라이징",
    year: "2025",
    kind: "short",
    videos: [
      {
        title: "편의점 1+1 소개 본편",
        youtubeUrl:
          "https://youtube.com/shorts/NrGhA5scH5c?si=FVWa3SXd-XzK_SRM",
        description:
          "한국 편의점의 ‘1+1·2+1 덤 문화’를 일본 시청자에게 쉽게 이해시키기 위해 제작한 숏폼입니다. 일본어 내레이션·자막으로 정보 전달의 명확성을 높였습니다.",
        bullets: [
          "한국 편의점 덤 문화 핵심 설명",
          "매대→혜택→계산 흐름을 직관적으로 구성",
          "일본어 로컬라이징(내레이션·자막) 강화",
          "숏폼 최적화 템포와 시각적 강조",
        ],
        views: "1.7만",
        likes: "88",
      },
      {
        title: "한국 아파트 소개 본편",
        youtubeUrl:
          "https://youtube.com/shorts/uZWASRcuJ6U?si=ypuLrkjbgx63kAOY",
        description:
          "한국 아파트 문화를 일본 시청자가 자연스럽게 이해할 수 있도록 제작한 숏폼입니다. 실제 단지를 촬영해 생활감 있는 정보를 담고, 짧은 러닝타임 안에 핵심만 전달하도록 구성했습니다.",
        bullets: [
          "한국 아파트(マンション) 문화 설명",
          "실제 단지 촬영으로 생활 밀착형 구성",
          "숏폼 러닝타임에 맞춘 정보량 최적화",
          "1프레임 썸네일 디자인으로 피드 주목도 강화",
          "데이터 기반 후속 콘텐츠 기획 인사이트",
        ],
        views: "2.6천",
        likes: "12",
      },
    ],
  },

  // ⭐ 커피 브랜드 이미지 필름 https://youtu.be/6HaKxFF13BE
  // {
  //   slug: "coffee-brand-image-film",
  //   title: "SRyeong Coffee – Brand Image Film",
  //   category: "MUSIC", // 또는 BRAND / AD 등으로 새로 만들고 싶으면 변경 가능
  //   thumbnailUrl: "https://img.youtube.com/vi/eN5v8WwiTJQ/hqdefault.jpg",
  //   youtubeUrl: "https://youtu.be/eN5v8WwiTJQ",
  //   role: "컷 편집 · 타이포그래피",
  //   year: "2025",
  //   kind: "long",
  //   videos: [
  //     {
  //       title: "본편",
  //       youtubeUrl: "https://youtu.be/eN5v8WwiTJQ",
  //       description:
  //         "Pixabay 스톡 영상을 활용해 제작한 커피 브랜드 이미지 필름입니다. 간결한 컷 편집과 자막 연출을 통해 브랜드가 전달하고자 하는 분위기와 메시지를 정리하는 데 집중했습니다.",
  //       bullets: [
  //         "Pixabay 스톡 영상 기반의 브랜드 이미지 필름",
  //         "컷 편집과 자막 중심의 미니멀한 구성",
  //         "영상 흐름과 메시지 전달에 집중한 편집",
  //         "상업적 목적 없이 포트폴리오용으로 제작된 영상",
  //       ],
  //       views: "",
  //       likes: "",
  //     },
  //   ],
  // },
  // ⭐ 사바나농장 편집 영상
  // ⭐ 사바나농장 브랜딩 콘텐츠
  {
    slug: "savanna-farm",
    title: "사바나농장 – 유튜브 영상제작",
    category: "VLOG",
    thumbnailUrl: "https://img.youtube.com/vi/6HaKxFF13BE/maxresdefault.jpg",
    youtubeUrl: "https://youtu.be/6HaKxFF13BE",
    role: "기획 · 촬영 · 편집",
    year: "2026",
    kind: "long",
    videos: [
      {
        title: "본편",
        youtubeUrl: "https://youtu.be/6HaKxFF13BE",
        description:
          "사바나농장을 더 많은 사람들에게 알리고 방문을 유도하기 위해 제작한 콘텐츠입니다. 아프리카 식물을 처음 접하는 사람의 시선에서 각 식물의 ‘닮은꼴’을 이야기하며 소개하는 콘셉트로 구성했습니다. 정보 전달과 재미를 동시에 전달해 농장에 대한 친근한 이미지를 만드는 것을 목표로 제작했습니다.",
        bullets: [
          "사장님 요구사항 기반 콘텐츠 콘셉트 기획",
          "식물 닮은꼴 찾기 방식으로 식물 소개 및 친근감 부여",
          "아프리카 식물을 처음 보는 관점에서 공감형 설명 구성",
          "농장 방문 유도를 목표로 한 브랜딩 콘텐츠 제작",
          "기획부터 촬영, 편집까지 전체 제작 과정 담당",
        ],
        views: "",
        likes: "",
      },
    ],
  },
];
