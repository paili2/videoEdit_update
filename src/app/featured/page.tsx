export default function ShowreelPage() {
  return (
    <section className="space-y-10">
      {/* 헤더 영역 */}
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-purple-200">
          highlight reel
        </p>
        <h1 className="text-3xl font-semibold md:text-4xl">
          <span className="block">대표 영상으로 보는</span>
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
            SEORYEONG 편집 스타일
          </span>
        </h1>
        <p className="max-w-xl text-sm text-white/70 md:text-base">
          유튜브 브이로그·리액션 형식으로 제작한
          <span className="text-white">‘펭수빵’ 콘텐츠</span>입니다. 제품을
          찾아보고, 구매하고, 시식하는 흐름을 리듬 있게 편집해 캐릭터의 밝은
          톤과 채널 분위기를 살리는 데 집중했습니다. 과한 모션보다는
          <span className="text-white">컷 템포와 자막 타이밍</span>으로 재미를
          만드는 스타일입니다.
        </p>
      </header>

      {/* 쇼릴 영상 */}
      <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-start">
        {/* 비디오 영역 */}
        <div className="space-y-3">
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-xl">
            {/* 16:9 비율 박스 */}
            <div className="pt-[56.25%]" />
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/EGkK9KsFKiw"
              title="펭수빵 리액션 콘텐츠"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="text-xs text-white/60">
            * 기획부터 촬영, 편집까지 모두 한 영상입니다.
          </p>
        </div>

        {/* 오른쪽 설명 영역 */}
        <aside className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div>
            <h2 className="text-sm font-semibold text-white/90">
              Showreel info
            </h2>
            <ul className="mt-3 space-y-2 text-xs text-white/70">
              <li>· 형식 : YouTube VLOG / 리액션 콘텐츠</li>
              <li>· 사용 도구 : Premiere Pro</li>
              <li>· 카테고리 : 브이로그, 제품 리액션</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/80">
              이런 포인트에 집중했어요
            </h3>
            <ul className="mt-2 space-y-2 text-xs text-white/70">
              <li>· 신제품 화제성을 활용한 리액션형 구성</li>
              <li>· 구매 → 시식까지 자연스럽게 이어지는 편집 흐름</li>
              <li>· 캐릭터 톤에 맞춘 밝고 유쾌한 자막 스타일</li>
              <li>· 리듬감 있는 컷 전환으로 시청 몰입도 유지</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/80">
              선호 작업 분야
            </h3>
            <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
              {["브이로그", "예능", "유튜브 편집", "숏폼"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* 아래 추가 섹션: 더 보고 싶을 때 유도 */}
      <section className="mt-4 flex flex-col gap-4 rounded-2xl border border-purple-500/40 bg-gradient-to-r from-purple-600/40 via-fuchsia-600/30 to-cyan-500/20 px-5 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-100">
            NEXT STEP
          </p>
          <p className="mt-1 text-sm font-medium">다른 작업이 더 궁금하다면</p>
          <p className="text-xs text-white/80">
            포트폴리오 페이지에서 확인하실 수 있습니다.
          </p>
        </div>

        <div className="flex gap-3 text-xs">
          <a
            href="/works"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 font-semibold text-black"
          >
            작업 모음 보러 가기
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-4 py-2 font-semibold text-white/90 hover:bg-white/10"
          >
            바로 문의하기
          </a>
        </div>
      </section>
    </section>
  );
}
