import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsScreen from "./screens/MealsScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#ecae28",
            },
            contentStyle: {
              backgroundColor: "#f8d07a",
            },
          }}
        >
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen
            name="Meals"
            component={MealsScreen}
            // options={({ route, navigation }) => { ## one way to set dynamic options
            //   const id = route.params.id;
            //   return {
            //     title: id,
            //   };
            // }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            // options={{ ## one one to set up header buttons IF you don't need to interact with the screen at all
            //   headerRight: () => <Button title="click me" />,
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
