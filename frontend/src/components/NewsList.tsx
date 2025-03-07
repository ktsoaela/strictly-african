import React from "react";
import { Article } from "@/types/article"; 
import NewsArticle from "./NewsArticle";

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
        <NewsArticle key={article.id} article={article} /> 
      ))}
    </div>
  );
};

export default NewsList;