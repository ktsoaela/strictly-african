import axios from "axios";

const BASE_URL = "http://localhost:8000"; // Removed the trailing slash

/**
 * Fetch top headlines based on optional category and country.
 */
export const fetchTopHeadlines = async (
  category: string = "",
  country: string = "us",
  page: number = 1,
  pageSize: number = 20
) => {
  let url = `${BASE_URL}/api/news/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}`;
  if (category) {
    url += `&category=${category.toLowerCase()}`;
  }

  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    throw new Error("Failed to fetch top headlines");
  }
};

/**
 * Fetch all articles based on a keyword, sources, or domain.
 */
export const fetchEverything = async (
  query: string = "",
  sources: string = "",
  language: string = "en",
  page: number = 1,
  pageSize: number = 20
) => {
  let url = `${BASE_URL}/api/news/everything?q=${query}&language=${language}&page=${page}&pageSize=${pageSize}`;
  if (sources) {
    url += `&sources=${sources}`;
  }

  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw new Error("Failed to fetch articles");
  }
};

/**
 * Fetch available news sources based on category and country.
 */
export const fetchSources = async (
  category: string = "",
  country: string = "us",
  language: string = "en"
) => {
  let url = `${BASE_URL}/api/news/sources?language=${language}&country=${country}`;
  if (category) {
    url += `&category=${category}`;
  }

  try {
    const response = await axios.get(url);
    return response.data.sources;
  } catch (error) {
    console.error("Error fetching sources:", error);
    throw new Error("Failed to fetch sources");
  }
};