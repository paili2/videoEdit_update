"use client";

import React, { use, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { WORKS } from "@/src/data/works";
import { WorkVideo } from "@/src/types/works.type";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function toEmbedUrl(url?: string) {
  if (!url) return "";

  try {
    const u = new URL(url);
    let videoId: string | null = null;

    if (u.hostname.includes("youtube.com") && u.pathname === "/watch") {
      videoId = u.searchParams.get("v");
    }
    if (
      u.hostname.includes("youtube.com") &&
      u.pathname.startsWith("/shorts/")
    ) {
      videoId = u.pathname.split("/")[2] || null;
    }
    if (u.hostname === "youtu.be") {
      videoId = u.pathname.replace("/", "");
    }

    if (!videoId) return "";
    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return "";
  }
}

export default function WorkDetailPage({ params }: PageProps) {
  const { slug } = use(params);

  const work = WORKS.find((w) => w.slug === slug);
  if (!work) notFound();

  const videos: WorkVideo[] =
    work.videos && work.videos.length > 0
      ? work.videos
      : [
          {
            youtubeUrl: work.youtubeUrl,
            description:
              "이 작업은 단일 영상으로 구성되었습니다. WorkItem.youtubeUrl을 사용합니다.",
            bullets: [],
            views: "",
            likes: "",
          },
        ];

  const isShort = work.kind === "short";

  const [index, setIndex] = useState(0);
  const current = videos[index];
  const embedUrl = toEmbedUrl(current.youtubeUrl);

  const hasMultiple = videos.length > 1;

  useEffect(() => {
    setIndex(0);
  }, [slug]);

  return (
    <main className="min-h-screen px-6 pb-16 pt-10 md:px-12 lg:px-20">
      <header className="mb-8 space-y-3">
        <p className="text-xs uppercase tracking-[0.24em] text-purple-200">
          portfolio · {work.category.toLowerCase()}
        </p>
        <h1 className="text-3xl font-semibold md:text-4xl">{work.title}</h1>
        <p className="text-sm text-white/70">
          {work.year}년 · {work.role}
        </p>
      </header>

      <section
        className={
          isShort
            ? "grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(380px,1.2fr)]"
            : "space-y-6"
        }
      >
        {/* LEFT - 영상 */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-3 shadow-lg">
          <div
            className={
              (isShort
                ? "mx-auto aspect-[9/16] max-w-[360px]"
                : "aspect-video") + " overflow-hidden rounded-2xl bg-black/40"
            }
          >
            {embedUrl ? (
              <iframe
                key={embedUrl}
                src={embedUrl}
                className="h-full w-full"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-white/50">
                영상 링크 없음
              </div>
            )}
          </div>

          {/* 아래쪽 버튼 */}
          {hasMultiple && (
            <div className="mt-3 flex items-center justify-between text-xs text-white/60">
              <span>
                {index + 1} / {videos.length}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                  disabled={index === 0}
                  className="rounded border border-white/20 px-2 py-1 disabled:opacity-40"
                >
                  이전
                </button>
                <button
                  onClick={() =>
                    setIndex((i) => Math.min(i + 1, videos.length - 1))
                  }
                  disabled={index === videos.length - 1}
                  className="rounded border border-white/20 px-2 py-1 disabled:opacity-40"
                >
                  다음
                </button>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT - 설명 */}
        <aside className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg text-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-200">
                Work info
              </h2>

              {hasMultiple && (
                <span className="text-xs text-white/60">
                  {index + 1} / {videos.length}
                </span>
              )}
            </div>

            {/* 메타 */}
            <dl className="space-y-1 text-xs text-white/80">
              <div className="flex gap-2">
                <dt className="w-16 text-white/50">카테고리</dt>
                <dd>{work.category}</dd>
              </div>

              <div className="flex gap-2">
                <dt className="w-16 text-white/50">연도</dt>
                <dd>{work.year}</dd>
              </div>

              <div className="flex gap-2">
                <dt className="w-16 text-white/50">역할</dt>
                <dd className="whitespace-pre-line">{work.role}</dd>
              </div>

              {current.title && (
                <div className="flex gap-2">
                  <dt className="w-16 text-white/50">영상</dt>
                  <dd>{current.title}</dd>
                </div>
              )}
            </dl>

            {/* 설명 */}
            <div className="mt-4 space-y-2 text-xs text-white/70">
              <p>{current.description}</p>

              {current.bullets && current.bullets.length > 0 && (
                <ul className="whitespace-pre-line list-disc space-y-1 pl-4">
                  {current.bullets.map((b) => {
                    const isNoThumbnail =
                      b.trim() === "썸네일은 작업 하지 않았습니다";

                    return (
                      <li
                        key={b}
                        className={
                          isNoThumbnail ? "text-red-400 font-semibold" : ""
                        }
                      >
                        {b}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* 조회수/좋아요 */}
            {(current.views || current.likes) && (
              <div className="mt-4 border-t border-white/10 pt-3 text-xs text-white/60">
                조회수 {current.views} · 좋아요 {current.likes}
              </div>
            )}
          </div>
        </aside>
      </section>
    </main>
  );
}
