'use client';

import { articles } from '../../data/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find(a => a.id === parseInt(params.id));

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    notFound();
  }

  return (
    <main className="pt-24 pb-16 min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/articles" className="hover:text-indigo-600">
            Artikel
          </Link>
          <span>/</span>
          <span>{article.category}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                {article.category}
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          <div className="flex items-center justify-between border-b border-gray-200 pb-6">
            <div className="flex items-center space-x-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-gray-900">
                  {article.author.name}
                </div>
                <div className="text-sm text-gray-500">
                  {article.date} · {article.readTime}
                </div>
              </div>
            </div>
            {/* Share buttons */}
            <div className="flex items-center space-x-2">
              <button 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => {
                  navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: window.location.href
                  }).catch(() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link telah disalin ke clipboard!');
                  });
                }}
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Artikel Terkait
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {articles
              .filter(a => a.id !== article.id && a.category === article.category)
              .slice(0, 2)
              .map(relatedArticle => (
                <Link 
                  key={relatedArticle.id} 
                  href={`/articles/${relatedArticle.id}`}
                  className="block group"
                >
                  <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                    <img
                      src={relatedArticle.imageUrl}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </main>
  );
}
