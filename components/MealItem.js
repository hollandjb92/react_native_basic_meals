import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetails from "./MealDetails";

const MealItem = ({
  title,
  url,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#d8d8d8" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: url, width: "100%", height: 200 }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            complexity={complexity}
            affordability={affordability}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
  },

  outerContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.3,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.25,
  },
});

export default MealItem;
