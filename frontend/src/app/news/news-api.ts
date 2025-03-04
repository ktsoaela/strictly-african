import axios from 'axios';

export const fetchNews = async () => {
  const response = await axios.get("http://localhost:8000/api/news");
  return response.data.articles;
};
