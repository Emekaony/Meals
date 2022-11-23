import { useContext, useLayoutEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../Data/dummy-data";
import MealItem from "../Components/MealItem";

const FavoritesScreen = ({ navigation }) => {
  const favMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favMealsCtx.ids.includes(meal.id)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Favorites",
    });
  }, [navigation]);

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

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.noMeal}>
        <Text style={styles.text}>No favorite meals yet</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
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
