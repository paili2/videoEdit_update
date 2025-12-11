import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "2026 Portfolio | Video Editor",
  description: "영상 편집자",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[#050014] text-white">
        {/* 배경 */}
        <div className="pointer-events-none fixed inset-0 opacity-40 blur-3xl">
          <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-500 via-blue-500 to-teal-400" />
        </div>

        {/* 전체 페이지 래퍼 */}
        <div className="relative z-10 flex min-h-screen w-full flex-col">
          <Header />

          {/* 컨텐츠 공통 컨테이너: 여기서만 max-width 관리 */}
          <main className="flex-1 w-full">
            <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10 md:pt-16">
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
