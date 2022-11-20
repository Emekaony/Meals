import { StyleSheet, Text, View } from "react-native";

const List = ({ data }) => {
  return data.map((dataPoint, index) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>
        {index + 1} - {dataPoint}
      </Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 6,
    marginHorizontal: 12,
    backgroundColor: "#E2D2C8",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});

export default List;
