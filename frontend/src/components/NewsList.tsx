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
  if (!Array.isArray(articles)) {
    console.error("Expected an array, but got:", articles);
    return <p>No articles available</p>;
  }

  return (
    <div>
      {articles.map((article) => (
        <NewsArticle key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;