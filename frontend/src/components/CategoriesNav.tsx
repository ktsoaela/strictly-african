"use client";

import { useRouter } from "next/navigation";

const categories = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const CategoriesNav = () => {
  const router = useRouter();

  const handleCategoryChange = (category: string) => {
    router.push(`/news?category=${category.toLowerCase()}`);
  };

  return (
    <div className="flex gap-4 mb-6 justify-center">
      <button
        onClick={() => router.push("/news")}
        className="px-4 py-2 font-bold text-black dark:bg-background dark:text-white"
      >
        All Categories
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleCategoryChange(cat)}
          className="px-4 py-2 font-bold text-black dark:bg-background dark:text-white"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoriesNav;