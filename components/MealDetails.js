import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.details}>{duration} minutes</Text>
      <Text style={styles.details}>{complexity}</Text>
      <Text style={styles.details}>{affordability}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    textTransform: "capitalize",
    marginHorizontal: 4,
    fontSize: 12,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
});

export default MealDetails;
