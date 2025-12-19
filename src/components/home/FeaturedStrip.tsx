"use client";

import { MouseEvent, useRef } from "react";
import { FEATURED_WORKS } from "@/src/data/featured_works";
import Link from "next/link";
import StatsSection from "./StatsSection";
import SectionTitle from "../layout/SectionTitle";

export default function FeaturedStrip() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const dragged = useRef(false);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    // 왼쪽 버튼만
    if (e.button !== 0) return;

    e.preventDefault(); // 텍스트 선택 / 이미지 드래그 기본 동작 막기
    isDragging.current = true;
    dragged.current = false;
    scrollRef.current.classList.add("cursor-grabbing");
    startX.current = e.clientX;
    scrollStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseUpOrLeave = () => {
    if (!scrollRef.current) return;
    isDragging.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
    // 마우스를 떼면, 다음 클릭에서 drag 상태 초기화
    setTimeout(() => {
      dragged.current = false;
    }, 0);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();

    const delta = e.clientX - startX.current;

    // 어느 정도 이상 움직이면 "드래그"로 간주
    if (Math.abs(delta) > 3) {
      dragged.current = true;
    }

    scrollRef.current.scrollLeft = scrollStart.current - delta;
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // 방금까지 드래그 중이었다면 클릭으로 페이지 이동하지 않기
    if (dragged.current) {
      e.preventDefault();
      dragged.current = false;
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <SectionTitle>대표 작업 한눈에 보기</SectionTitle>
      </div>

      <div className="relative">
        {/* 모바일에서만 좌우 페이드 표시 */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050014] to-transparent md:hidden" />

        {/* 한 줄 + 가로 슬라이드 (스크롤바 숨김) */}
        <div
          ref={scrollRef}
          className={[
            "flex flex-nowrap gap-3 overflow-x-auto pb-2 pr-2 md:pr-0",
            "select-none cursor-grab",
            "[scrollbar-width:none]", // Firefox
            "[-ms-overflow-style:none]", // IE/Edge
            "[&::-webkit-scrollbar]:hidden", // Chrome/Safari
          ].join(" ")}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onMouseMove={handleMouseMove}
        >
          {FEATURED_WORKS.map((item) => (
            <Link
              key={item.slug}
              href={`/works/${item.slug}`}
              onClick={handleLinkClick}
              className="group relative min-w-[220px] max-w-xs overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="flex h-full flex-col">
                {/* 썸네일 영역 */}
                <div className="relative h-28 w-full overflow-hidden">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                {/* 텍스트 영역 */}
                <div className="relative flex flex-1 flex-col justify-between gap-1 bg-gradient-to-tr from-purple-700/60 via-black/70 to-cyan-500/40 p-3">
                  <span className="inline-flex w-fit rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-cyan-200">
                    {item.tag}
                  </span>
                  <p className="line-clamp-2 text-xs font-medium">
                    {item.title}
                  </p>
                  <span className="text-[11px] text-white/70">▶ 바로가기</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
