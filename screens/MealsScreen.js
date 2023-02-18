import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
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

  const renderMealItem = (itemData) => {
    const { title, imageUrl, duration, complexity, affordability, id } =
      itemData.item;

    const handlePress = () => {
      navigation.navigate("Details", {
        mealId: id,
      });
    };

    return (
      <MealItem
        title={title}
        url={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        onPress={handlePress}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsScreen;
