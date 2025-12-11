"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#050509]/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 text-xs font-bold">
            SR
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-white">SEORYEONG</span>
            <span className="text-[10px] text-white/50">Video Editor</span>
          </div>
        </Link>

        {/* 메뉴: 모바일 + 데스크탑 모두 표시 */}
        <nav className="flex items-center gap-6 text-xs font-medium text-white/70">
          <Link href="/about" className="hover:text-white">
            소개
          </Link>
          <Link href="/works" className="hover:text-white">
            포트폴리오
          </Link>
        </nav>
      </div>

      {/* 보라 gradient line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500" />
    </header>
  );
}
