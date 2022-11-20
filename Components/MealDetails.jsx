import { View, StyleSheet, Text } from "react-native";

const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailitem}>{duration}</Text>
      <Text style={styles.detailitem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailitem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailitem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default MealDetails;
