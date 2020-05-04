import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Color from '../constraint/Color'
import { StyleSheet, Text, View, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data'
import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer';




const Drawer = createDrawerNavigator();

const MealsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MealsStackScreen() {
    return (
        <MealsStack.Navigator screenOptions={{
            
            headerStyle: {


                backgroundColor: Color.primaryColor
            },
            headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },
            headerBackTitle:{
                fontFamily: 'open-sans'
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            
                   
        }} >
            <MealsStack.Screen options={{ title: "Meal Category" }} name="Categories" component={CategoriesScreen} />
            <MealsStack.Screen name="CategoriesMeals" component={CategoriesMealsScreen} />
            <MealsStack.Screen name="MealDetail" component={MealDetailScreen} />

        </MealsStack.Navigator>

    );
};
const FavoritesStack = createStackNavigator();

function FavoritesStackScreen() {
    return (
        <FavoritesStack.Navigator screenOptions={{
            headerStyle: {


                backgroundColor: Color.primaryColor
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
        }} >
            <FavoritesStack.Screen name="Favorites" component={FavoritesScreen} />
            <FavoritesStack.Screen name="MealDetail" component={MealDetailScreen} />

        </FavoritesStack.Navigator>

    );
};

function MealsFavNavigator() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Meals') {
                    iconName = focused
                        ? 'ios-restaurant'
                        : 'ios-restaurant';
                } else if (route.name === 'Favorites') {
                    iconName = focused ? 'ios-star' : 'ios-star-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Meals" component={MealsStackScreen} />
            <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
        </Tab.Navigator>


    );
}
const FilterStack = createStackNavigator();

function FIlterStackScreen() {
    return (
        <FilterStack.Navigator screenOptions={{
            
            headerStyle: {


                backgroundColor: Color.primaryColor
            },
            headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },
            headerBackTitle:{
                fontFamily: 'open-sans'
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            
                   
        }} >
            <MealsStack.Screen options={{ title: "Filter" }} name="Filter" component={FilterScreen} />
          
        </FilterStack.Navigator>

    );
};



function MealsNavigator() {
    return (

        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="All Meals" component={MealsFavNavigator} />
                <Drawer.Screen name="Filter Meals" component={FIlterStackScreen} />

                
            </Drawer.Navigator>



        </NavigationContainer>
    );
}



export default MealsNavigator;