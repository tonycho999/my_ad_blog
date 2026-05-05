import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import AffiliateAdCard from '@/components/AffiliateAdCard'; // 광고 카드 불러오기
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: { slug: string };
}

// MDX 안에서 사용할 커스텀 컴포넌트 목록
const components = {
  AffiliateAdCard,
};

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  
  // mdx와 md 확장자 모두 확인
  const postsDirectory = path.join(process.cwd(), '_posts');
  let fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${slug}.md`);
  }

  // 파일이 없으면 404 페이지로 이동
  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // --- (Frontmatter) 부분과 마크다운 본문(content)을 분리하는 간단한 로직
  const contentStartIndex = fileContents.indexOf('---', 3) + 3;
  const content = fileContents.slice(contentStartIndex).trim();

  return (
    <div className="container mx-auto px-4 max-w-3xl py-10">
      <div className="prose prose-lg mx-auto prose-blue prose-img:rounded-xl prose-a:text-blue-600 hover:prose-a:text-blue-500">
        {/* 여기서부터 마크다운 내용을 HTML로 예쁘게 그려줍니다 */}
        <MDXRemote source={content} components={components} />
      </div>
    </div>
  );
}

// Vercel 배포 시, _posts 폴더 안의 파일들을 미리 빌드하기 위한 설정
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), '_posts');
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (error) {
    return [];
  }

  return fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => ({
      slug: fileName.replace(/\.mdx?$/, ''),
    }));
}
