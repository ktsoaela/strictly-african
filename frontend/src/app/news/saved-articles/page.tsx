"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import SavedArticlesTable from "@/components/SavedArticlesTable";

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

const SavedArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalArticles, setTotalArticles] = useState<number>(0);
  const articlesPerPage = 10;

  useEffect(() => {
    const fetchSavedArticles = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/news/offline-articles?page=${currentPage}&pageSize=${articlesPerPage}`);
        setArticles(response.data.articles);
        setTotalArticles(response.data.total);
      } catch (err) {
        setError("Failed to load saved articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchSavedArticles();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/api/news/offline-articles?search=${query}&page=${currentPage}&pageSize=${articlesPerPage}`);
      setArticles(response.data.articles);
      setTotalArticles(response.data.total);
    } catch (err) {
      setError("Failed to load saved articles.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8000/api/news/offline-articles/${id}`);
      setArticles(articles.filter(article => article.id !== id));
    } catch (err) {
      setError("Failed to remove article.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Saved Articles</h1>
      <SavedArticlesTable
        articles={articles}
        currentPage={currentPage}
        articlesPerPage={articlesPerPage}
        totalArticles={totalArticles}
        onPageChange={handlePageChange}
        onSearch={handleSearch}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default SavedArticlesPage;