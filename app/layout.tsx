
import '@/styles/globals.css';
import '@/styles/syntax.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'My Ad Blog | 광고 최적화 블로그',
    template: '%s | My Ad Blog',
  },
  description: 'SEO, AEO, GEO에 최적화된 나만의 광고형 블로그입니다.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
