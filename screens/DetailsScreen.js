import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/List";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import { MEALS } from "../data/dummyData";

const DetailsScreen = ({ route, navigation }) => {
  const { mealId } = route.params;

  const handleHeaderButton = () => {
    console.log("click");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton icon="star" color="black" onPress={handleHeaderButton} />
      ),
    });
  }, [navigation, handleHeaderButton]);

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
