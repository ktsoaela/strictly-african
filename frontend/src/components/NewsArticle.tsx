import React from 'react';
import SaveArticleButton from './SaveArticleButton';

interface NewsArticleProps {
  article: {
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
  };
}

const NewsArticle: React.FC<NewsArticleProps> = ({ article }) => {
  return (
    <div className="my-4 p-4 border border-grey-300 dark:bg-background dark:text-white">
      <h3 className="text-xl font-bold">{article.title}</h3>
      <p>{article.description}</p>
      <br />
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold mb-4 border-black dark:border-white p-2 uppercase inline-block" style={{ borderWidth: '2px' }}
      >
        Read More
      </a>
      <SaveArticleButton article={article} />
    </div>
  );
};

export default NewsArticle;