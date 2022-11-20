import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "../Components/MealItem";
import { MEALS, CATEGORIES } from "../Data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catID = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(catID);
  });

  // useEffect will work, but not in this case.
  // we want the title to be set with the screen being rendered not after it hss been rendered
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === catID;
    }).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);

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

export default MealsOverviewScreen;
