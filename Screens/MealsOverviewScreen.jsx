import { useLayoutEffect } from "react";

import MealCard from "../Components/MealCard";
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

  return <MealCard mealsToDisplay={displayedMeals} />;
};

export default MealsOverviewScreen;
