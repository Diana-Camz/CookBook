import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"; 


//Screens
import HomeScreen from "./screens/HomeScreen";
import FoodScreen from "./screens/FoodSelected";

const HomeNavigator = createStackNavigator()

const MyStack = () => {

    return(
        <HomeNavigator.Navigator
            initialRouteName="Home"
        >
            <HomeNavigator.Screen
                name="Home"
                component={HomeScreen}
            />

            <HomeNavigator.Screen
                name="FoodScreen"
                component={FoodScreen}
            />
        </HomeNavigator.Navigator>
    )
}

const Navigation = () => {
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}

export default Navigation