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
    <div className="my-4 p-4 border border-grey-300 dark:bg-background dark:text-white">
      <h3 className="text-xl font-bold">{article.title}</h3>
      <p>{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-bold hover:underline"
      >
        Read More
      </a>
    </div>
  );
};

export default NewsArticle;