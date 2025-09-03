'use client';

import { Article } from '../data/articles';
import Link from 'next/link';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/articles/${article.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime}</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-indigo-600 transition-colors">
            {article.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-gray-600">{article.author.name}</span>
            </div>
            <span className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center group">
              Baca selengkapnya
              <svg
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
