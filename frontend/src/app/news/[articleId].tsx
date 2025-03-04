import React from 'react';

interface Article {
  title: string;
  description: string;
  url: string;
  content: string; // Add any other fields that you are using
}

interface ArticlePageProps {
  article: Article;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
      <div>{article.content}</div>
    </div>
  );
};

export default ArticlePage;
