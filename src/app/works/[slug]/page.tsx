import { WORKS } from "@/src/data/works";
import WorkDetailClient from "./WorkDetailClient";

// GitHub Pages 정적 배포를 위해 모든 가능한 경로를 미리 정의합니다.
export async function generateStaticParams() {
  return WORKS.map((work) => ({
    slug: work.slug,
  }));
}

// 서버 컴포넌트에서 클라이언트 컴포넌트를 불러옵니다.
export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <WorkDetailClient params={params} />;
}
