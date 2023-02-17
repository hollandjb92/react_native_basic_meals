import { CATEGORIES } from "./../data/dummyData";
import { FlatList } from "react-native";
import CategoryTile from "../components/CategoryTile";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const handlePress = () => {
      navigation.navigate("Meals", {
        id: itemData.item.id,
      });
    };

    return (
      <CategoryTile
        category={itemData.item.title}
        color={itemData.item.color}
        onPress={handlePress}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      key={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
