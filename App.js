import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";

// navigations
import MealsNavigations from "./navigations/MealsNavigations";

const fetchFonts = () => {
	Fonts.loadAsync({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});
};

export default function App() {
	const [fontsLoaded, setFontsLoaded] = React.useState(false);

	if (!fontsLoaded) {
		<AppLoading
			startAsync={fetchFonts}
			onFinish={() => setFontsLoaded(true)}
		/>;
	}
	return <MealsNavigations />;
}
