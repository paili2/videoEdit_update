"use client";

import { useMemo, useState } from "react";

type ThumbCategory = "전체" | "롱폼" | "숏폼" | "브랜딩" | "실험";

type ThumbnailItem = {
  id: string;
  title: string;
  category: ThumbCategory;
  year?: string;
  tool?: string;
  thumbUrl: string;
  originalUrl: string;
  note?: string;
};

const THUMBNAILS: ThumbnailItem[] = [
  {
    id: "t-001",
    title: "이건 짱구도 예상못한 만남",
    category: "숏폼",
    year: "2025",
    tool: "Photoshop",
    thumbUrl: "/thumbnails/shinchan2.jpg",
    originalUrl: "/thumbnails/shinchan1.jpg",
    note: "포토샵의 AI 기능을 활용해 액션 가면 캐릭터를 확대·강조하고, 썸네일에서 가장 먼저 시선이 닿는 요소로 재구성했습니다. 이후 캐릭터와 배경을 분리해 배경 톤을 낮추고 텍스트와 인물에 시선이 집중되도록 구성했습니다.",
  },
];

const CATEGORIES: ThumbCategory[] = ["전체", "롱폼", "숏폼", "브랜딩", "실험"];

export default function ThumbnailsPage() {
  const [category, setCategory] = useState<ThumbCategory>("전체");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<ThumbnailItem | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return THUMBNAILS.filter((item) => {
      const byCategory = category === "전체" || item.category === category;
      const byQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        (item.note ?? "").toLowerCase().includes(q) ||
        (item.tool ?? "").toLowerCase().includes(q) ||
        (item.year ?? "").toLowerCase().includes(q);
      return byCategory && byQuery;
    });
  }, [category, query]);

  return (
    <section className="pt-4 pb-14">
      {/* 헤더 */}
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.18em] text-purple-200">
          thumbnails
        </p>
        <h1 className="text-2xl font-semibold md:text-3xl text-white">
          썸네일 작업
        </h1>
        <p className="max-w-3xl text-sm text-white/70 leading-relaxed">
          포토샵 기능을 활용해, 하나의 장면에서 핵심 메시지를 가장 빠르게
          전달하는 방식을 고민했습니다.
        </p>
      </header>

      {/* 그리드 */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item)}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition hover:bg-white/[0.05]"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={item.thumbUrl}
                alt={item.title}
                className="h-full w-full object-cover transition group-hover:scale-[1.02]"
              />
            </div>

            <div className="space-y-1 p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-white">
                  {item.title}
                </h3>
                <span className="text-[10px] text-white/50">{item.year}</span>
              </div>

              <p className="text-xs text-white/65 line-clamp-2">{item.note}</p>

              <div className="pt-2 text-[10px] text-white/45">
                Tool: {item.tool}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* 모달 */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#050509]/95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div>
                <p className="text-[10px] text-white/50">{active.category}</p>
                <p className="text-sm font-semibold text-white">
                  {active.title}
                </p>
              </div>
              <button className="text-xs text-white/70">닫기</button>
            </div>

            {/* 비교 */}
            <div className="grid lg:grid-cols-[1fr_1fr_360px]">
              {/* ORIGINAL */}
              <div className="bg-black/20 border-r border-white/10">
                <div className="flex h-full items-center justify-center px-4 pb-6">
                  <div className="w-full max-w-[520px]">
                    {/* 🔴 이미지 바로 위 라벨 */}
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                        Original
                      </p>
                      <p className="text-[10px] text-white/40">원본 이미지</p>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
                      <img
                        src={active.originalUrl}
                        alt="원본"
                        className="w-full max-h-[70vh] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* THUMBNAIL */}
              <div className="bg-black/20 border-r border-white/10">
                <div className="flex h-full items-center justify-center px-4 pb-6">
                  <div className="w-full max-w-[520px]">
                    {/* 🔴 이미지 바로 위 라벨 */}
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                        Thumbnail
                      </p>
                      <p className="text-[10px] text-white/40">완성 썸네일</p>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
                      <img
                        src={active.thumbUrl}
                        alt="썸네일"
                        className="w-full max-h-[70vh] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 메타 */}
              <div className="space-y-3 p-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[10px] text-white/50">Year</p>
                  <p className="text-sm text-white">{active.year}</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[10px] text-white/50">Tool</p>
                  <p className="text-sm text-white">{active.tool}</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[10px] text-white/50">Note</p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {active.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
