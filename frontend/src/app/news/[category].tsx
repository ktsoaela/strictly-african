"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchTopHeadlines, fetchEverything } from "./news-api";
import NewsList from "../../components/NewsList";
import { Article } from "@/types/article"; 

const CategoriesPage: React.FC = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "general"; 

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch articles from both sources
        const topHeadlines: Article[] = await fetchTopHeadlines(category);
        const everythingNews: Article[] = await fetchEverything(category);

        const combinedArticles = [
          ...topHeadlines.map((article: Article, index: number) => ({ ...article, id: index + 1 })), 
          ...everythingNews.map((article: Article, index: number) => ({ ...article, id: index + topHeadlines.length + 1 })), 
        ];
        setArticles(combinedArticles);
      } catch {
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsArticles();
  }, [category]);

  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6 capitalize">
        {category} News
      </h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && <NewsList articles={articles} />}
    </div>
  );
};

export default CategoriesPage;