import React from 'react';

const saveToFavorites = (article: any) => {
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  favorites.push(article);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const loadFavorites = (): any[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export { saveToFavorites, loadFavorites };
