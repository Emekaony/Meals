import { StyleSheet, FlatList } from "react-native";

import { CATEGORIES } from "../Data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  // I do not know of defining the render function inside the component is a good approach but it works for now
  function renderCategoryItem({ item }) {
    const pressHandler = () => {
      navigation.navigate("Overview");
    };

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
