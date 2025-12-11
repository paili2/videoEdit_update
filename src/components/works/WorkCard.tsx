"use client";

import Link from "next/link";
import Image from "next/image";
import { WorkItem } from "@/src/types/works.type";

type Props = {
  work: WorkItem;
};

export default function WorkCard({ work }: Props) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group overflow-hidden rounded-xl border border-white/10 bg-white/5"
    >
      <div className="relative h-40 w-full">
        <Image
          src={work.thumbnailUrl}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1 p-3">
        <span className="text-[11px] text-cyan-200">{work.category}</span>
        <p className="text-sm font-semibold">{work.title}</p>
        <p className="text-[11px] text-white/60">{work.year}</p>
      </div>
    </Link>
  );
}
