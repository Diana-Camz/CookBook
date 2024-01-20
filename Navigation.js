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
            screenOptions={{ title: 'Cook Book', headerShown: true, headerTitleAlign: 'center', headerTintColor: 'white',  headerShadowVisible: false, headerStyle: { backgroundColor: '#3E3E3E' } }}
        >
            <HomeNavigator.Screen
                name="Home"
                component={HomeScreen}
            />

            <HomeNavigator.Screen
                name="FoodScreen"
                component={FoodScreen}
                options={{
                    headerShown: true,
                    cardStyle: {backgroundColor: 'transparent'},
                    title: ' '
                  }}
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