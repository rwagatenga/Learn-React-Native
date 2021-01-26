import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

//screens
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const MealsNavigations = createStackNavigator({
	Categories: CategoriesScreen,
	CategoryMeal: CategoryMealScreen,
	MealDetails: MealDetailsScreen,
});

export default createAppContainer(MealsNavigations);
