import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  mealIds: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMeals((prevState) => [...prevState, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMeals((prevState) =>
      prevState.filter((mealId) => mealId !== id)
    );
  };
  const values = {
    mealIds: favoriteMeals,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
