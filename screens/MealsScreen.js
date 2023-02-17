import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
// import {useRoute} from '@react-navigation/native' ** alternative to route prop to avoid prop drilling
import { MEALS } from "../data/dummyData";

const MealsScreen = ({ route }) => {
  const { id } = route.params;

  const mealsToDisplay = MEALS.filter((meal) => meal.categoryIds.includes(id));

  const renderMealItem = (itemData) => {
    return <MealItem title={itemData.item.title} />;
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
