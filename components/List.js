import { StyleSheet, Text, View } from "react-native";

const List = ({ listItems }) => {
  return listItems.map((item) => (
    <View style={styles.listItem} key={item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#ecae28",
  },
  itemText: {
    textAlign: "center",
  },
});

export default List;
