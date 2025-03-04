"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image"; // Use Next.js Image component

interface Article {
  title: string;
  description: string;
  url: string;
  content: string;
  urlToImage?: string;
}

const ArticlePage: React.FC = () => {
  const searchParams = useSearchParams();
  const articleId = searchParams.get("articleId");

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!articleId) return;

    const fetchArticle = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:8000/api/news/article/${articleId}`);
        if (!response.ok) throw new Error("Failed to fetch article");

        const data = await response.json();
        setArticle(data.article);
      } catch (err) {
        setError("Failed to load article");
        console.error(err); // Log the error for debugging
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="px-4 py-8">
      {article && (
        <>
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          {article.urlToImage && (
            <Image
              src={article.urlToImage}
              alt={article.title}
              width={800}
              height={400}
              className="w-full h-64 object-cover mb-4 rounded"
            />
          )}
          <p className="text-lg">{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-4 block"
          >
            Read Full Article
          </a>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Content:</h2>
            <p className="mt-2">{article.content || "No additional content available."}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ArticlePage;