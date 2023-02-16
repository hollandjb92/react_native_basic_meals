import { CATEGORIES } from "./../data/dummyData";
import { FlatList } from "react-native";
import CategoryTile from "../components/CategoryTile";

const renderCategoryItem = (itemData) => {
  return (
    <CategoryTile category={itemData.item.title} color={itemData.item.color} />
  );
};

const CategoriesScreen = () => {
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
