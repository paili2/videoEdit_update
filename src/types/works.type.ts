export type WorkKind = "long" | "short";

export type WorkVideo = {
  title?: string;
  youtubeUrl?: string;
  description?: string;
  bullets?: string[];
  views?: string;
  likes?: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  category:
    | "VLOG"
    | "SHORTS"
    | "BRAND"
    | "MUSIC"
    | "EDIT TEST"
    | "TRAVEL"
    | "OTHER";
  thumbnailUrl: string;
  youtubeUrl?: string; // 단일 영상 fallback
  videos?: WorkVideo[]; // 여러 슬라이드용 추가 (옵셔널)
  role: string;
  year: string;
  kind: WorkKind;
};
