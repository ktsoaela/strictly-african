interface Article {
  title: string;
  description: string;
  url: string;
  content: string;
  urlToImage?: string;
}

const saveToFavorites = (article: Article) => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  favorites.push(article);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const loadFavorites = (): Article[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export { saveToFavorites, loadFavorites };