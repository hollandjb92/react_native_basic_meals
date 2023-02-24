import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";

const MealsList = ({ meals }) => {
  const navigation = useNavigation();
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
        data={meals}
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

export default MealsList;
