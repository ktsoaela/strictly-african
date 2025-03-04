"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsList from '../../components/NewsList';

interface Article {
  title: string;
  description: string;
  url: string;
}

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/news");
        setArticles(response.data.articles);
      } catch {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <NewsList articles={articles} />
      )}
    </div>
  );
};

export default NewsPage;
