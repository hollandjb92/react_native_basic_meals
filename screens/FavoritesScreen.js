import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummyData";
// import { FavoritesContext } from "../store/context/favoritesContext";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  // const favoriteContext = useContext(FavoritesContext);
  const mealIds = useSelector((state) => state.favoriteMeals.mealIds);

  const favoriteMeals = MEALS.filter((meal) => mealIds.includes(meal.id));

  return favoriteMeals.length === 0 ? (
    <View style={styles.view}>
      <Text style={styles.text}>You haven't favorited any meals</Text>
    </View>
  ) : (
    <MealsList meals={favoriteMeals} />
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FavoritesScreen;
