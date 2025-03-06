"use client";
import axios from "axios";
import React from 'react';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

interface SaveArticleButtonProps {
  article: Article;
}

const SaveArticleButton: React.FC<SaveArticleButtonProps> = ({ article }) => {
  const handleSave = async () => {
    try {
      await axios.post("http://localhost:8000/api/news/saved-articles", {
        title: article.title,
        description: article.description,
        url: article.url,
        url_to_image: article.urlToImage,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert("Article saved for offline reading!");
    } catch (error) {
      console.error("Error saving article:", error);
    }
  };

  return (
    <button
      onClick={handleSave}
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Save for Offline
    </button>
  );
};

export default SaveArticleButton;