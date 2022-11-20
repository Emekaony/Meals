import { View, Text, StyleSheet, Image } from "react-native";
import MealDetails from "../Components/MealDetails";

import { MEALS } from "../Data/dummy-data";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.id;
  const meal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: meal.imageUrl }} />
      <Text>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
      />
      <Text>Ingredients</Text>
      {meal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {meal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mealText: {
    color: "white",
    padding: 16,
  },
});

export default MealDetailScreen;
