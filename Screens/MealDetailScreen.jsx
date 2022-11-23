import { useLayoutEffect, useContext } from "react";
import { Text, StyleSheet, Image, ScrollView, View } from "react-native";
import MealDetails from "../Components/MealDetails";
import { Ionicons } from "@expo/vector-icons";

import { MEALS } from "../Data/dummy-data";
import Subtitle from "../Components/MealDetail/Subtitle";
import List from "../Components/MealDetail/List";
import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.id;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const mealName = meal.title;

  // context stuff
  const favoriteMealsCtx = useContext(FavoritesContext);

  // check if the meal is part of the favorites
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const changeFavoritesStatusHandler = () => {
    /*
    When the user taps the star, if the meal is a favorite, unfavorite it
    else, make it a favorite meal
    */
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name={mealIsFavorite ? "star" : "star-outline"}
          size={24}
          color="white"
          onPress={changeFavoritesStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoritesStatusHandler, mealIsFavorite]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.imageStyle} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // always be 40px from the bottom so we can see all the steps
    marginBottom: 40,
  },
  imageStyle: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  mealText: {
    color: "white",
    padding: 16,
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    maxWidth: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  iconPressed: {
    backgroundColor: "white",
  },
});

export default MealDetailScreen;
