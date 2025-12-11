"use client";

export default function Hero() {
  return (
    <section className="mt-3 grid gap-10 md:mt-8 md:grid-cols-[1.3fr_1fr] md:items-center">
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-purple-200">
          🎬 Video Editor
        </span>

        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          <span className="block">센스 있게 </span>
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
            흐름을 완성하는 에디터
          </span>
        </h1>

        {/* 모바일/데스크탑 자연 줄바꿈 */}
        <p className="text-sm text-white/70 md:text-base md:max-w-xl">
          감정선·리듬·장면 연결을 세밀하게 다듬어, 시청자가 몰입할 수 있는
          흐름을 만듭니다. 모든 컷과 텍스트를 이유 있게 배치하고 장면의 감정과
          분위기를 빠르게 포착해 자연스러운 전개로 완성합니다.
        </p>

        {/* <div className="flex flex-wrap gap-3">
          <button className="rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 px-6 py-2 text-sm font-semibold shadow-lg shadow-purple-500/30">
            🎧 쇼릴 보기
          </button>
          <button className="rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white/80 hover:bg-white/5">
            포트폴리오 영상 모아보기
          </button>
        </div> */}
      </div>

      {/* 오른쪽 미니 쇼릴 → 펭수빵 영상 카드 */}
      <div className="relative h-52 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-purple-600/60 via-indigo-700/80 to-black/60 shadow-2xl md:h-64">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.16),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(56,189,248,0.35),transparent_55%)]" />

        <div className="relative flex h-full flex-col justify-between p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/60">
              entertainment
            </p>
            <p className="mt-2 text-lg font-semibold">펭수빵 리액션 콘텐츠</p>
          </div>

          <div className="flex items-end justify-between text-xs text-white/70">
            <span>YouTube VLOG · 2020</span>

            <a
              href="/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black/40 px-3 py-1 text-[11px] transition hover:bg-black/60"
            >
              ▶ 영상보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
