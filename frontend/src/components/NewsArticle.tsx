import React from 'react';

interface NewsArticleProps {
  article: {
    title: string;
    description: string;
    url: string;
  };
}

const NewsArticle: React.FC<NewsArticleProps> = ({ article }) => {
  return (
    <div className="my-4 p-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
      <h3 className="text-xl font-bold">{article.title}</h3>
      <p>{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        Read More
      </a>
    </div>
  );
};

export default NewsArticle;