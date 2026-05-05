import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 1. 링크 처리 (내부/외부 링크 자동 구분)
    a: ({ href, children, ...props }: any) => {
      const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
      
      if (isInternalLink) {
        return (
          <Link href={href} className="text-blue-600 underline hover:text-blue-800" {...props}>
            {children}
          </Link>
        );
      }
      
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 underline hover:text-blue-800" 
          {...props}
        >
          {children}
        </a>
      );
    },

    // 2. 마크다운 기본 이미지 (![설명](주소)) 처리
    img: ({ src, alt, ...props }: any) => (
      <div className="relative w-full h-auto my-8 overflow-hidden rounded-lg shadow-lg">
        {/* 네이버 이미지 차단을 피하고 에러를 방지하기 위해 기본 img 태그 사용 */}
        <img
          src={src}
          alt={alt || 'Blog image'}
          className="w-full object-cover"
          referrerPolicy="no-referrer"
          {...props}
        />
      </div>
    ),

    // 3. MDX 파일에서 대문자 <Image /> 태그를 직접 썼을 때의 처리
    Image: (props: any) => <Image {...props} />,

    // 4. 기존 설정된 다른 컴포넌트들 유지
    ...components,
  };
}
