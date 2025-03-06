"use client";

import React from "react";
import SavedArticles from "@/components/SavedArticles";

const SavedArticlesPage: React.FC = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Saved Articles</h1>
      <SavedArticles article={{ title: "Sample Title", description: "Sample Description", url: "https://example.com" }} />
    </div>
  );
};

export default SavedArticlesPage;