"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { fetchTopHeadlines } from "./news-api";
import NewsList from "../../components/NewsList";
import CategoriesNav from "../../components/CategoriesNav";

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const NewsPageContent: React.FC = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const newsArticles = await fetchTopHeadlines(category, "us");
        setArticles(Array.isArray(newsArticles) ? newsArticles : []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to load saved articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsArticles();
  }, [category]);

  return (
    <div className="px-4 py-8">
      <div className="font-extrabold bg-white p-4 bg-background text-black dark:bg-background dark:text-white text-center" style={{ fontSize: "100px" }}>
        News
      </div>

      <CategoriesNav />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left Column: Featured Article */}
        <div className="md:col-span-6 bg-white border relative">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {error && <p className="text-red-500">{error}</p>}
              {articles[0] && (
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${articles[0].urlToImage || "/placeholder.jpg"})` }}
                >
                  <div className="p-4 bg-gradient-to-t from-black to-transparent rounded-lg h-full flex flex-col justify-end border">
                    <h2 className="text-2xl font-bold text-white mb-2">{articles[0].title}</h2>
                    <p className="text-sm text-white mb-4">{articles[0].description}</p>
                    <a
                      href={articles[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-bold hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Middle Column: Top Stories */}
        <div className="md:col-span-3 bg-white border p-4 bg-background text-black dark:bg-background dark:text-white">
          <h3 className="font-bold mb-4 p-2 uppercase inline-block bg-black text-white dark:bg-background dark:text-white" style={{ borderWidth: '2px' }}>
            Top Stories
          </h3>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {error && <p className="text-red-500">{error}</p>}
              <ul className="list-none">
                {articles.slice(0, 10).map((article, index) => (
                  <li key={index} className="border-b last:border-0 py-2">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white bg-background text-black dark:bg-background dark:text-white"
                    >
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Right Column: Featured Story */}
        <div className="md:col-span-3 bg-white border p-4 bg-background text-black dark:bg-background dark:text-white">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {error && <p className="text-red-500">{error}</p>}
              {articles[0] && (
                <div>
                  <h3 className="font-bold mb-4 p-2 uppercase inline-block bg-black text-white dark:bg-background dark:text-white" style={{ borderWidth: '2px' }}>
                    Top Story
                  </h3>
                  <h4 className="text-lg font-bold mt-2">{articles[0].title}</h4>
                  <p className="text-sm mt-2">{articles[0].description}</p>
                  <br />
                  <a
                    href={articles[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold mb-4 border-black dark:border-white p-2 uppercase inline-block"
                    style={{ borderWidth: '2px' }}
                  >
                    Read more
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && <NewsList articles={articles} />}
    </div>
  );
};

const NewsPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsPageContent />
    </Suspense>
  );
};

export default NewsPage;