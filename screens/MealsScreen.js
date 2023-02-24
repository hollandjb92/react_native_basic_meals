import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList";
// import {useRoute} from '@react-navigation/native' ** alternative to route prop to avoid prop drilling
import { MEALS, CATEGORIES } from "../data/dummyData";

const MealsScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const mealsToDisplay = MEALS.filter((meal) => meal.categoryIds.includes(id));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == id
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [id, navigation]);

  return <MealsList meals={mealsToDisplay} />;
};

export default MealsScreen;
