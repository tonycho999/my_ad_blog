import Image from 'next/image';

interface AffiliateAdCardProps {
  brand: string;         // 브랜드 이름 (예: Shopee, Lazada, BINGE)
  title: string;         // 상품/서비스 제목
  price: string;         // 가격 (예: ₱ 1,450, $9.99/month)
  imageUrl: string;      // 이미지 경로
  buyLink: string;       // Involve Asia에서 생성한 Deeplink
  themeColor: string;    // 브랜드 대표 색상 (Tailwind 클래스, 예: 'bg-red-500')
}

export default function AffiliateAdCard({ brand, title, price, imageUrl, buyLink, themeColor }: AffiliateAdCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center border border-gray-200 rounded-2xl p-5 my-8 bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* 썸네일 이미지 */}
      <div className="relative w-32 h-32 flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-contain rounded-lg" 
        />
      </div>
      
      {/* 텍스트 및 클릭 버튼 */}
      <div className="flex flex-col flex-grow w-full">
        <div className="flex items-center mb-2">
          <span className={`text-xs font-bold px-2 py-1 rounded-md text-white ${themeColor}`}>
            {brand}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-2">{title}</h3>
        <p className="text-xl font-extrabold text-red-600 mb-4">{price}</p>
        
        <a 
          href={buyLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`text-center font-bold text-white py-3 px-4 rounded-xl transition-opacity hover:opacity-90 ${themeColor}`}
        >
          {brand}에서 확인하기
        </a>
      </div>
    </div>
  );
}
