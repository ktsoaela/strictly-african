import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

interface SavedArticlesTableProps {
  articles: Article[];
  currentPage: number;
  articlesPerPage: number;
  totalArticles: number;
  onPageChange: (page: number) => void;
  onSearch: (query: string) => void;
  onRemove: (id: number) => void;
}

const SavedArticlesTable: React.FC<SavedArticlesTableProps> = ({
  articles,
  currentPage,
  articlesPerPage,
  totalArticles,
  onPageChange,
  onRemove,
}) => {
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  return (
    <div className="overflow-x-auto">
      <br />
      <table className="min-w-full bg-white dark:bg-gray-800 dark:text-white">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 text-left leading-4 text-black dark:text-white tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 text-left leading-4  text-black dark:text-white tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 text-left leading-4  text-black dark:text-white tracking-wider">
              URL
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 text-left leading-4  text-black dark:text-white tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id} className="border-b border-gray-300 dark:border-gray-700">
              <td className="px-6 py-4">{article.title}</td>
              <td className="px-6 py-4">{article.description}</td>
              <td className="px-6 py-4">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold mb-4 border-black dark:border-white p-2 uppercase inline-block"
                  style={{ borderWidth: '2px' }}
                >
                  Read more
                </a>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onRemove(article.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SavedArticlesTable;