"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchTopHeadlines, fetchEverything } from "./news-api";
import NewsList from "../../components/NewsList";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

const CategoriesPage: React.FC = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "general"; // Default to "general" if no category is found

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch articles from both sources
        const topHeadlines = await fetchTopHeadlines(category);
        const everythingNews = await fetchEverything(category);

        // Combine and set articles
        setArticles([...topHeadlines, ...everythingNews]);
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