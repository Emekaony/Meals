import { SafeAreaView, StyleSheet, FlatList } from "react-native";

import { CATEGORIES } from "../Data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";

// FlatList renderItem returns an itemDat object which has an item key
// this item key is what is important to us. It is what contains the actual data object
function renderCategoryItem({ item }) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

function CategotiesScreen() {
  return (
    <SafeAreaView>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default CategotiesScreen;
