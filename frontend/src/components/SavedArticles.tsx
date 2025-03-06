import React from 'react';
import NewsArticle from './NewsArticle';

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

interface SavedArticlesProps {
  articles: Article[];
}

const SavedArticles: React.FC<SavedArticlesProps> = ({ articles }) => {
  return (
    <div>
      {articles.map(article => (
        <NewsArticle key={article.id} article={article} />
      ))}
    </div>
  );
};

export default SavedArticles;