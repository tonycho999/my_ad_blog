import PostCard from '@/components/PostCard';

export default function PostsPage() {
  // 전체 글 목록을 가져오는 로직이 들어갑니다.
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-10">모든 블로그 글</h1>
      <div className="space-y-6">
        {/* map 함수를 이용해 전체 포스트 카드 출력 */}
      </div>
    </div>
  );
}
