"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { fetchTopHeadlines } from "./news-api";
import NewsList from "../../components/NewsList";
import CategoriesNav from "../../components/CategoriesNav";


interface Article {
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
        console.log("Fetched Articles:", newsArticles); // Debugging
        setArticles(newsArticles);
      } catch (error) {
        console.error("Error fetching news:", error); // Debugging
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsArticles();
  }, [category]);

  return (
    <div className="px-4 py-8">
      <div className="font-extrabold text-gray-900 text-center" style={{ fontSize: "100px" }}>
        News
      </div>

      <CategoriesNav />

      <div className="grid grid-cols-12 gap-4">
        {/* Left Column: Featured Article */}
        <div className="col-span-6 bg-white border relative">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            articles[0] && (
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
            )
          )}
        </div>

        {/* Middle Column: Top Stories */}
        <div className="col-span-3 bg-white border p-4">
        <h3 className="font-bold mb-4 border-solid">Top Stories</h3>
        {/* <h3 className="font-bold mb-4 border-solid p-2 uppercase" style={{ borderWidth: '8px' }}>Top Stories</h3> */}
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <ul className="list-none">
              {articles.slice(0, 10).map((article, index) => (
                <li key={index} className="border-b last:border-0 py-2">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-600 hover:underline"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Column: Featured Story */}
        <div className="col-span-3 bg-grey-100 border p-4">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            articles[0] && (
              <div>
                <h3 className="font-bold text-black-700">Top Story</h3>
                <h4 className="text-lg font-bold mt-2">{articles[0].title}</h4>
                <p className="text-sm mt-2">{articles[0].description}</p>
                <a
                  href={articles[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-600 hover:underline mt-4 block"
                >
                  Read more
                </a>
              </div>
            )
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