const CLIENTS = ["YouTube 채널 운영", "콘텐츠 기획", "영상 편집"];

export default function ClientsSection() {
  return (
    <section className="space-y-4 md:pb-10">
      <h2 className="text-lg font-semibold">이런 작업을 했어요</h2>
      <div className="flex flex-wrap gap-3">
        {CLIENTS.map((c) => (
          <div
            key={c}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80"
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}
