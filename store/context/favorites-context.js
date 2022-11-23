import { createContext, useState } from "react";

// first step is ot create a context
export const FavoritesContext = createContext({
  // initial context
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

// second step is to create the contexts provider
const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  // implement the methods that were given in the context in the first step
  const addFavorite = (id) => {
    setFavoriteMealIds((curr) => [...curr, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealIds((curr) => curr.filter((mealId) => mealId !== id));
  };

  // create a value object and pass it to the contex provider
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  // return the context provider with the value property
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
