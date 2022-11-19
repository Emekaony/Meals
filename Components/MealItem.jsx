import { StyleSheet, View, Text } from "react-native";

const MealItem = ({ title, index }) => {
  return (
    <View>
      <Text>
        {index + 1} - {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MealItem;
