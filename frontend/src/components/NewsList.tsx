import React from 'react';
import NewsArticle from './NewsArticle';

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

interface NewsListProps {
  articles: Article[];
}

const NewsList: React.FC<NewsListProps> = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <NewsArticle key={article.id} article={article} />
      ))}
    </div>
  );
};

export default NewsList;