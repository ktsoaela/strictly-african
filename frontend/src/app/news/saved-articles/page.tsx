"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import SavedArticles from "@/components/SavedArticles";

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

  useEffect(() => {
    const fetchSavedArticles = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/news/offline-articles");
        setArticles(response.data.articles);
      } catch (err) {
        setError("Failed to load saved articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchSavedArticles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Saved Articles</h1>
      <SavedArticles articles={articles} />
    </div>
  );
};

export default SavedArticlesPage;

// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import SavedArticles from "@/components/SavedArticles";

// interface Article {
//   id: number;
//   title: string;
//   description: string;
//   url: string;
//   urlToImage?: string;
// }

// const SavedArticlesPage: React.FC = () => {
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchSavedArticles = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/api/news/offline-articles");
//         setArticles(response.data.articles);
//       } catch (err) {
//         setError("Failed to load saved articles.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSavedArticles();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="px-4 py-8">
//       <h1 className="text-4xl font-bold text-center mb-6">Saved Articles</h1>
//       <SavedArticles articles={articles} />
//     </div>
//   );
// };

// export default SavedArticlesPage;