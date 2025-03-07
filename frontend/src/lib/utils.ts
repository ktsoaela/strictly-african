import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { openDB } from 'idb';
import { Article } from "@/types/article";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


const dbPromise = openDB('news-db', 1, {
  upgrade(db) {
    db.createObjectStore('articles', { keyPath: 'id' });
  },
});


export const saveArticle = async (article: Article) => {
  const db = await dbPromise;
  await db.put('articles', article);
};


export const getArticles = async () => {
  const db = await dbPromise;
  return await db.getAll('articles');
};