import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoryTile = ({ category, color }) => {
  return (
    <View style={styles.outerView}>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.pressed : null,
        ]}
        android_ripple={{ color: "#d8d8d8" }}
      >
        <View style={[styles.innerView, { backgroundColor: color }]}>
          <Text style={styles.text}>{category}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
    elevation: 4,
    backgroundColor: "white", // * need background color in order to see shadow*
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  pressable: {
    flex: 1,
  },
  pressed: {
    opacity: 0.25,
  },
  innerView: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryTile;
