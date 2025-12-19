"use client";

import { useMemo, useState } from "react";
import WorkGrid from "@/src/components/works/WorkGrid";
import { WORKS } from "@/src/data/works";
import { WorkKind } from "@/src/types/works.type";
import FilterChip from "@/src/components/works/FilterChip";

type Filter = "all" | WorkKind;

export default function WorksPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredItems = useMemo(() => {
    if (filter === "all") return WORKS;
    return WORKS.filter((work) => work.kind === filter);
  }, [filter]);

  return (
    <section className="space-y-6 pt-4">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-purple-200">
          portfolio
        </p>
        <h1 className="text-2xl font-semibold md:text-3xl">포트폴리오</h1>
        <p className="max-w-4xl text-sm text-white/70">
          쇼릴에 다 담지 못한 작업들을 카테고리별로 모아두었습니다. 조회수,
          전달력, 편집 텐션을 중점으로 작업합니다.
        </p>

        {/* 🔵 롱폼 / 숏폼 필터 탭 */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <FilterChip
            label="전체"
            active={filter === "all"}
            onClick={() => setFilter("all")}
          />
          <FilterChip
            label="롱폼"
            active={filter === "long"}
            onClick={() => setFilter("long")}
          />
          <FilterChip
            label="숏폼"
            active={filter === "short"}
            onClick={() => setFilter("short")}
          />
        </div>
      </header>

      <WorkGrid items={filteredItems} />
    </section>
  );
}
