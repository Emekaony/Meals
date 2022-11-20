import { useLayoutEffect, useState } from "react";
import { Text, StyleSheet, Image, ScrollView, View } from "react-native";
import MealDetails from "../Components/MealDetails";
import { Ionicons } from "@expo/vector-icons";

import { MEALS } from "../Data/dummy-data";
import Subtitle from "../Components/MealDetail/Subtitle";
import List from "../Components/MealDetail/List";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.id;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const [iconPressed, setIconPressed] = useState(false);

  const headerButtonPressedHandler = () => {
    setIconPressed((currValue) => !currValue);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name={iconPressed ? "star" : "star-outline"}
          size={24}
          color="white"
          onPress={headerButtonPressedHandler}
        />
      ),
    });
  }, [navigation, headerButtonPressedHandler, iconPressed]);

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
