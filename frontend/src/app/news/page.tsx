"use client";

import React, { useEffect, useState } from 'react';
import { fetchNews } from './news-api';
import NewsList from '../../components/NewsList';

interface Article {
  title: string;
  description: string;
  url: string;
  imageUrl: string; // Add the image URL field
}

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<string>('');

  const categories = ['General', 'Business', 'Technology', 'Sports', 'Health'];

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  useEffect(() => {
    const fetchNewsArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const newsArticles = await fetchNews(category);
        setArticles(newsArticles);
      } catch (error) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchNewsArticles();
  }, [category]);

  return (
    <div className="px-4 py-8">

      <div className="font-extrabold text-gray-900 text-center" style={{ fontSize: '100px' }}>
        News
      </div>



      <hr className="border-t-2 border-gray-300 my-4" />
      {/* Categories */}
      <div className="flex gap-4 mb-6 justify-center mx-auto">
        <a
          href="#"
          onClick={() => handleCategoryChange('')}
          className={`px-4 py-2 text-black font-bold ${category === '' ? 'bg-white' : 'bg-transparent'}`}
        >
          All Categories
        </a>
        {categories.map((cat) => (
          <a
            key={cat}
            href="#"
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 text-black font-bold ${category === cat ? 'bg-white' : 'bg-transparent'}`}
          >
            {cat}
          </a>
        ))}
      </div>
      <hr className="border-t-2 border-gray-300 my-4" />



      <div className="grid grid-cols-12 gap-4">
        {/* Left Column: Article Image and Content */}
        <div className="col-span-6 bg-white border relative">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            articles[0] && (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${articles[0].urlToImage})` }}
              >
                <div className="p-4 bg-gradient-to-t from-black to-transparent rounded-lg h-full flex flex-col justify-end">
                  {/* Article Title */}
                  <h2 className="text-2xl font-bold text-white mb-2">{articles[0].title}</h2>
        
                  {/* Article Description */}
                  <p className="text-sm text-white mb-4">{articles[0].description}</p>
        
                  {/* Link to Full Article */}
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

        {/* Middle Column: List of Top Stories */}
        <div className="col-span-3 bg-white border p-4">
          <h3 className="font-bold mb-4">Top Stories</h3>
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


        {/* Right Column: Top Story in a Box */}
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
                <a href={articles[0].url} target="_blank" rel="noopener noreferrer" className="text-black-600 hover:underline mt-4 block">
                  Read more
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
