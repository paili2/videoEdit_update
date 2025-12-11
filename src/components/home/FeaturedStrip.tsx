import { FEATURED_WORKS } from "@/src/data/featured_works";
import Link from "next/link";

export default function FeaturedStrip() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">대표 작업 한눈에 보기</h2>
      </div>

      <div className="relative">
        {/* 모바일에서만 좌우 페이드 표시 */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050014] to-transparent md:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050014] to-transparent md:hidden" />

        <div className="flex gap-3 overflow-x-auto pb-2 pr-2 md:pr-0">
          {FEATURED_WORKS.map((item) => (
            <Link
              key={item.slug}
              href={`/works/${item.slug}`}
              className="group relative h-32 min-w-[200px] overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/70 via-black/60 to-cyan-500/40 transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110" />

              <div className="relative flex h-full flex-col justify-between p-3 text-left">
                <span className="inline-flex w-fit rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-cyan-200">
                  {item.tag}
                </span>
                <p className="line-clamp-2 text-xs font-medium">{item.title}</p>
                <span className="text-[11px] text-white/60">▶ 바로가기</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
