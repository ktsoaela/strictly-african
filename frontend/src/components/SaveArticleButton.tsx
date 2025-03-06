"use client";
import axios from "axios";
import React from 'react';
import { useAuth } from '@clerk/nextjs';
import { FaStar  } from "react-icons/fa6";

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
  const { isSignedIn, getToken } = useAuth();

  const handleSave = async () => {
    if (!isSignedIn) {
      alert("You need to be logged in to save articles.");
      return;
    }

    try {
      const token = await getToken();
      await axios.post("http://localhost:8000/api/news/saved-articles", {
        title: article.title,
        description: article.description,
        url: article.url,
        url_to_image: article.urlToImage,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
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
      className="font-bold mt-4 py-2 uppercase inline-block"
    >
      <FaStar className="text-3xl" />
    </button>
  );
};

export default SaveArticleButton;