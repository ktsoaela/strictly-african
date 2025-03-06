import React from 'react';
import SaveArticleButton from './SaveArticleButton';

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

interface NewsArticleProps {
  article: Article;
}

const NewsArticle: React.FC<NewsArticleProps> = ({ article }) => {
  return (
    <div className="my-4 p-4 border border-grey-300 dark:bg-background dark:text-white">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">{article.title}</h3>
        <SaveArticleButton article={article} />
      </div>
      <p>{article.description}</p>
      <br />
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold mb-4 border-black dark:border-white p-2 uppercase inline-block"
        style={{ borderWidth: '2px' }}
      >
        Read More
      </a>
    </div>
  );
};

export default NewsArticle;