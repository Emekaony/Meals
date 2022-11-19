import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../Components/MealItem";

import { MEALS } from "../Data/dummy-data";

const MealsOverview = ({ route }) => {
  const catID = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(catID);
  });

  const renderMealItem = ({ item, index }) => {
    return <MealItem title={item.title} index={index} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
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

export default MealsOverview;
