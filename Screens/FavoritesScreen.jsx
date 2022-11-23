import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text } from "react-native";

// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../Data/dummy-data";
import MealCard from "../Components/MealCard";

const FavoritesScreen = ({ navigation }) => {
  // const favMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Favorites",
    });
  }, [navigation]);

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.noMeal}>
        <Text style={styles.text}>No favorite meals yet</Text>
      </View>
    );
  }

  return <MealCard mealsToDisplay={favoriteMeals} />;
};

const styles = StyleSheet.create({
  noMeal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
});

export default FavoritesScreen;
