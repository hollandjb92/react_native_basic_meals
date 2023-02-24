import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../components/IconButton";
import List from "../components/List";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import { MEALS } from "../data/dummyData";
// import { FavoritesContext } from "../store/context/favoritesContext";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const DetailsScreen = ({ route, navigation }) => {
  // const favoritesContext = useContext(FavoritesContext);
  const mealIds = useSelector((state) => state.favoriteMeals.mealIds);
  const dispatch = useDispatch();
  const { mealId } = route.params;

  const mealIsFavorited = mealIds.includes(mealId);

  const handleFavorite = () => {
    if (mealIsFavorited) {
      // favoritesContext.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoritesContext.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorited ? "star" : "star-outline"}
          color="black"
          onPress={handleFavorite}
        />
      ),
    });
  }, [navigation, handleFavorite]);

  const {
    imageUrl,
    duration,
    complexity,
    affordability,
    title,
    ingredients,
    steps,
  } = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.scrollContainer}>
      <Image source={{ uri: imageUrl, width: "100%", height: 300 }} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
      <View style={styles.outerListContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List listItems={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List listItems={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
  outerListContainer: {
    alignItems: "center",
  },
  scrollContainer: {
    marginBottom: 28,
  },
});

export default DetailsScreen;
