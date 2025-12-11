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

        {/* 페이지 전체는 full width */}
        <div className="relative z-10 flex min-h-screen flex-col w-full">
          <Header />

          {/* 본문만 max-w 적용 */}
          <main className="flex-1 w-full">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
