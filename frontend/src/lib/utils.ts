import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { openDB } from 'idb';

// Utility function to combine class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// IndexedDB setup
const dbPromise = openDB('news-db', 1, {
  upgrade(db) {
    db.createObjectStore('articles', { keyPath: 'id' });
  },
});

// Function to save an article to IndexedDB
export const saveArticle = async (article) => {
  const db = await dbPromise;
  await db.put('articles', article);
};

// Function to get all articles from IndexedDB
export const getArticles = async () => {
  const db = await dbPromise;
  return await db.getAll('articles');
};