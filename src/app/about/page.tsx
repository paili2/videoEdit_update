import { CERTIFICATION } from "@/src/data/certification";
import { SKILLS } from "@/src/data/skills";

export default function AboutPage() {
  return (
    // 홈과 동일하게: 페이지 루트에서 max-w를 잡는다
    <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10 md:pt-14">
      <section className="space-y-8">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-purple-200">
            about
          </p>
          <h1 className="text-2xl font-semibold md:text-3xl">
            정서령 · Seoryeong
          </h1>

          {/* 기본 소개 */}
          <p className="max-w-5xl text-sm text-white/70 md:text-base">
            감정선과 리듬, 장면의 흐름을 세밀하게 바라보는 영상 편집자
            정서령입니다.
            <br />
            화면 구조와 스토리 전개를 함께 고민하며, 단순한 컷 나열이 아니라
            시청자가 끝까지 몰입할 수 있는
            <br />
            <span className="text-white">영상 전체의 흐름</span>을 설계하는
            편집을 지향합니다.
          </p>

          {/* 다짐 문장 */}
          <p className="max-w-5xl text-sm text-amber-200 md:text-sm">
            아직 포트폴리오는 충분하지 않지만, 믿고 맡겨주시는 영상 한 편 한
            편이 제 역량과 가능성을 보여주는 작품이 될 수 있도록 최선을 다해
            편집하겠습니다.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          {/* 왼쪽 카드 */}
          <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div>
              <h2 className="text-sm font-semibold text-white/90">작업/경험</h2>
              <ul className="mt-2 space-y-2 text-sm text-white/70">
                <li>· 개인 유튜브 채널 운영 경험</li>
                <li>· 브이로그·여행·일상 기록 기반 콘텐츠 제작 및 편집</li>
                <li>· 지인 채널의 인터뷰·정보형 영상 편집 참여 경험</li>
                <li>· 숏폼(릴스/쇼츠)용 클립 제작 및 간단한 SNS 영상 디자인</li>
                <li>· 포트폴리오용 쇼릴 및 영상 패키지 제작</li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-white/90">사용 툴</h2>
              <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                {SKILLS.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-white/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xs text-white/50">
                이 외 필요한 툴은 빠르게 습득해 프로젝트에 적용할 수 있습니다.
              </p>
            </div>

            {/* 자격증 */}
            <div>
              <h2 className="text-sm font-semibold text-white/90">자격증</h2>
              <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                {CERTIFICATION.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-white/85"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 오른쪽 카드 */}
          <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div>
              <h2 className="text-sm font-semibold text-white/90">
                편집 스타일
              </h2>
              <ul className="mt-2 space-y-2 text-sm text-white/70">
                <li>· 말/비트에 맞춘 리듬감 있는 컷 편집</li>
                <li>
                  · 감정선·리듬·장면 연결을 세밀하게 다듬어 몰입감 있는 흐름
                  구성
                </li>
                <li>
                  · 모든 컷과 텍스트를 이유 있게 배치해 흐름을 끊지 않는 화면
                  전개
                </li>
                <li>· 과하지 않게 핵심만 보여주는 자막/그래픽</li>
                <li>· 감성 무드와 정보 전달의 밸런스를 중요하게 생각함</li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-white/90">
                함께 작업하고 싶은 영상
              </h2>
              <ul className="mt-2 space-y-2 text-sm text-white/70">
                <li>· 브이로그/라이프스타일 채널</li>
                <li>· 공부/기록/아카이브 성격의 채널</li>
                <li>· 브랜드 스토리를 담고 싶은 소상공인</li>
                <li>· 게임/취미 관련 크리에이터</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
