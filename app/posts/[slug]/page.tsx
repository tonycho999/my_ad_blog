import MarkdownBody from '@/components/MarkdownBody';

// 1. 개별 페이지의 메타데이터 생성 (SEO 최적화)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return {
    title: `${slug} - My Ad Blog`,
    description: `${slug}에 대한 상세한 정보를 확인하세요.`,
  };
}

// 2. 페이지 본문 구성
export default function PostDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div className="py-16">
      <header className="max-w-3xl mx-auto px-4 text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">{slug.replace(/-/g, ' ')}</h1>
        <time className="text-gray-500">2026년 05월 05일</time>
      </header>

      <MarkdownBody>
        {/* 이곳에 실제 마크다운 변환 결과가 들어갑니다. */}
        <p>이곳은 {slug} 포스트의 상세 본문 내용입니다.</p>
        <h2>AEO와 GEO를 고려한 글쓰기</h2>
        <ul>
          <li>명확한 질문과 답변 구조를 사용하세요.</li>
          <li>표와 리스트를 활용해 정보를 구조화하세요.</li>
        </ul>
      </MarkdownBody>
    </div>
  );
}
