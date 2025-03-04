import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Article {
  title: string;
  description: string;
  url: string;
  content: string;
}

const ArticlePage: React.FC = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { articleId } = router.query;

  useEffect(() => {
    if (!articleId) return;
    
    const fetchArticle = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:8000/api/news/${articleId}`);
        const data = await response.json();
        setArticle(data.article);
      } catch (err) {
        setError('Failed to fetch article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {article && (
        <>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
          <div>{article.content}</div>
        </>
      )}
    </div>
  );
};

export default ArticlePage;
