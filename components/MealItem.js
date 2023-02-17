import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const MealItem = ({ title, url, duration, complexity, affordability }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={() => 5}
        android_ripple={{ color: "#d8d8d8" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: url, width: "100%", height: 200 }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.details}>{duration} minutes</Text>
            <Text style={styles.details}>{complexity}</Text>
            <Text style={styles.details}>{affordability}</Text>
          </View>
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
  details: {
    textTransform: "capitalize",
    marginHorizontal: 4,
    fontSize: 12,
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
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
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
