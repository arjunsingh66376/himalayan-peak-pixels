import { createContext, useContext, useState } from 'react';

const LikedProductsContext = createContext();

export function useLikedProducts() {
  return useContext(LikedProductsContext);
}

// Optionally persist likes in localStorage
function getInitialLiked() {
  try {
    return JSON.parse(localStorage.getItem('likedProducts')) || [];
  } catch { return []; }
}

export function LikedProductsProvider({ children }) {
  const [liked, setLiked] = useState(getInitialLiked);

  const like = id => setLiked((ids) => {
    const newIds = [...ids, id];
    localStorage.setItem('likedProducts', JSON.stringify(newIds));
    return newIds;
  });
  const unlike = id => setLiked((ids) => {
    const newIds = ids.filter(_id => _id !== id);
    localStorage.setItem('likedProducts', JSON.stringify(newIds));
    return newIds;
  });
  const toggle = id => liked.includes(id) ? unlike(id) : like(id);

  return (
    <LikedProductsContext.Provider value={{ liked, like, unlike, toggle }}>
      {children}
    </LikedProductsContext.Provider>
  );
}
