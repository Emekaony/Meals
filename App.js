import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import CategotiesScreen from "./Screens/CategoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategotiesScreen />
    </>
  );
}

const styles = StyleSheet.create({});
