import { useNavigation } from "@react-navigation/native";
import { FlatList, View, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealCard = ({ mealsToDisplay }) => {
  // hooks can only be called inside the body of a functional component
  const navigation = useNavigation();
  const renderMealItem = ({ item }) => {
    const mealItemProps = {
      imageUrl: item.imageUrl,
      title: item.title,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity,
    };

    const pressHandler = () => {
      navigation.navigate("DetailScreen", {
        id: item.id,
      });
    };

    return <MealItem {...mealItemProps} onPress={pressHandler} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealCard;
