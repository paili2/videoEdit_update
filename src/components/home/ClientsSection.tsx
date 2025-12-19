import { CLIENTS } from "@/src/data/clients";
import SectionTitle from "../layout/SectionTitle";

export default function ClientsSection() {
  return (
    <section className="space-y-4 md:pb-10">
      <SectionTitle>이런 작업을 했어요</SectionTitle>
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
