"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8000";

// Add an interceptor to include the token in requests
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('clerk_session_token'); // Replace with your token storage method
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  url_to_image?: string;
}

const SavedArticles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSavedArticles = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/news/saved-articles`);
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching saved articles:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedArticles();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="px-4 py-8">
      {articles.length > 0 ? (
        articles.map((article) => (
          <div key={article.id} className="mb-4 p-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <h3 className="text-xl font-bold">{article.title}</h3>
            <p>{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Read More
            </a>
          </div>
        ))
      ) : (
        <p>No saved articles found.</p>
      )}
    </div>
  );
};

export default SavedArticles;
//import axios from "axios";
//
//const BASE_URL = "http://localhost:8000";
//
//// Add an interceptor to include the token in requests
//axios.interceptors.request.use((config) => {
//    const token = localStorage.getItem('clerk_session_token'); // Replace with your token storage method
//    if (token) {
//        config.headers.Authorization = `Bearer ${token}`;
//    }
//    return config;
//});
//
//export const fetchTopHeadlines = async (
//  category: string = "",
//  country: string = "us",
//  page: number = 1,
//  pageSize: number = 20
//) => {
//  let url = `${BASE_URL}/api/news/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}`;
//  if (category) {
//    url += `&category=${category.toLowerCase()}`;
//  }
//
//  try {
//    const response = await axios.get(url);
//    return response.data.articles;
//  } catch (error) {
//    console.error("Error fetching top headlines:", error);
//    throw new Error("Failed to fetch top headlines");
//  }
//};
//
////export default SavedArticles;
////
///// //"use client";
////import React, { useEffect, useState } from "react";
////import axios from "axios";
////
////interface Article {
////  id: number;
////  title: string;
////  description: string;
////  url: string;
////  url_to_image?: string;
////}
////
////const SavedArticles: React.FC = () => {
////  const [articles, setArticles] = useState<Article[]>([]);
////  const [loading, setLoading] = useState<boolean>(true);
////
////  useEffect(() => {
////    const fetchSavedArticles = async () => {
////      try {
////        const response = await axios.get("http://localhost:8000/api/news/saved-articles");
////        setArticles(response.data);
////      } catch (error) {
////        console.error("Error fetching saved articles:", error.response?.data || error.message);
////      } finally {
////        setLoading(false);
////      }
////    };
////
////    fetchSavedArticles();
////  }, []);
////
////  if (loading) return <p>Loading...</p>;
////
////  return (
////    <div className="px-4 py-8">
////      <h2 className="text-2xl font-bold mb-4">Saved Articles</h2>
////      {articles.length > 0 ? (
////        articles.map((article) => (
////          <div key={article.id} className="mb-4 p-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
////            <h3 className="text-xl font-bold">{article.title}</h3>
////            <p>{article.description}</p>
////            <a
////              href={article.url}
////              target="_blank"
////              rel="noopener noreferrer"
////              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
////            >
////              Read More
////            </a>
////          </div>
////        ))
////      ) : (
////        <p>No saved articles found.</p>
////      )}
////    </div>
////  );
////};
//
////export default SavedArticles;
//////"use client";
////import React, { useEffect, useState } from "react";
////import axios from "axios";
////
////interface Article {
////  id: number;
////  title: string;
////  description: string;
////  url: string;
////  url_to_image?: string;
////}
////
////const SavedArticles: React.FC = () => {
////  const [articles, setArticles] = useState<Article[]>([]);
////  const [loading, setLoading] = useState<boolean>(true);
////
////  useEffect(() => {
////    const fetchSavedArticles = async () => {
////      try {
////        const response = await axios.get("http://localhost:8000/api/news/saved-articles");
////        setArticles(response.data);
////      } catch (error) {
////        console.error("Error fetching saved articles:", error.response?.data || error.message);
////      } finally {
////        setLoading(false);
////      }
////    };
////
////    fetchSavedArticles();
////  }, []);
////
////  if (loading) return <p>Loading...</p>;
////
////  return (
////    <div className="px-4 py-8">
////      <h2 className="text-2xl font-bold mb-4">Saved Articles</h2>
////      {articles.length > 0 ? (
////        articles.map((article) => (
////          <div key={article.id} className="mb-4 p-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
////            <h3 className="text-xl font-bold">{article.title}</h3>
////            <p>{article.description}</p>
////            <a
////              href={article.url}
////              target="_blank"
////              rel="noopener noreferrer"
////              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
////            >
////              Read More
////            </a>
////          </div>
////        ))
////      ) : (
////        <p>No saved articles found.</p>
////      )}
////    </div>
////  );
////};
////
////export default SavedArticles;