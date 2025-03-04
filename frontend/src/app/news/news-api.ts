import axios from 'axios';

const BASE_URL = "http://localhost:8000/api/news";

export const fetchNews = async (category: string = "") => {
  let url = BASE_URL;
  if (category) {
    url += `?category=${category}`;
  }

  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw new Error("Failed to fetch news");
  }
};
