import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Color from '../constraint/Color'
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

const CategoriesMealsScreen = props => {


    
    catId = props.route.params.categoryId;
    selectedCategory = CATEGORIES.find(category => category.id === catId)
    availableMeals=useSelector(state=>state.meals.filterMeals);
    displayedMeals = availableMeals.filter(meal => meal.categoryIds.find(Ids => Ids === catId));

    React.useLayoutEffect(() => {

        props.navigation.setOptions({ title: selectedCategory.title });
    }, [props.navigation]);







    return (
        <MealList listItem={displayedMeals} navigation={props.navigation} />
        
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default CategoriesMealsScreen;
