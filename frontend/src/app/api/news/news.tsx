"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

interface Article {
  title: string;
  description: string;
  url: string;
}

export default function Home() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/api/news");
        setNews(response.data.articles || []);
      } catch {
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <h1 className="text-5xl font-bold underline">Latest News</h1>

      <Button>Click me</Button>

      <div className="mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : news.length === 0 ? (
          <p>No news articles found</p>
        ) : (
          news.map((article, index) => (
            <div key={index} className="my-4 p-4 border border-gray-300">
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Read More
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
