import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import { Provider, useSelector } from 'react-redux';



const FavoritesScreen = props => {
    const displayedMeals = useSelector(state=> state.meals.favoriteMeals);
    React.useLayoutEffect(() => {



        props.navigation.setOptions({
            title: "Favorites ",
            headerLeft: () => (
                <HeaderButton onPress={() => props.navigation.toggleDrawer()} title="Menu" name='ios-menu' color="white" />
            )

        });
    }, [props.navigation]);
    return (
        <MealList listItem={displayedMeals} navigation={props.navigation} />
    );
}

const styles = StyleSheet.create({

});


export default FavoritesScreen;
