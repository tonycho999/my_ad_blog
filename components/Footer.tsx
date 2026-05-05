export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 mt-20 border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto text-center text-sm text-gray-500 px-4">
        <p>© {currentYear} My Ad Blog. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="https://github.com/내아이디" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            GitHub
          </a>
          <a href="/rss.xml" className="hover:text-gray-900">
            RSS
          </a>
        </div>
      </div>
    </footer>
  );
}
