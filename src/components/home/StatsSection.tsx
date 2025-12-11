const STATS = [
  { label: "누적 편집 영상 수", value: "40+" },
  { label: "주요 카테고리", value: "VLOG · SHORTS" },
  { label: "평균 작업 리드타임", value: "24–72h" },
];

export default function StatsSection() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 md:px-8 md:py-8">
      <h2 className="mb-4 text-xs font-semibold text-purple-200 md:text-sm">
        Numbers that describe my work
      </h2>

      <div className="grid gap-6 md:grid-cols-3 md:gap-10">
        {STATS.map((s) => (
          <div key={s.label} className="space-y-1">
            {/* 값: 모바일은 작게, 데스크탑은 크게 */}
            <p className="text-lg font-bold md:text-2xl lg:text-3xl">
              {s.value}
            </p>
            {/* 라벨: 모바일 더 작게 */}
            <p className="text-[11px] text-white/60 md:text-xs">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
