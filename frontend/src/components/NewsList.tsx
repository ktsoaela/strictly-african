import React from 'react';
import NewsArticle from './NewsArticle';

interface Article {
  title: string;
  description: string;
  url: string;
}

interface NewsListProps {
  articles: Article[];
}

const NewsList: React.FC<NewsListProps> = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <NewsArticle key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
