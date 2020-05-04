import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_FAVORITE, toggleFavorite } from '../store/actions/meals'

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>
                {props.children}
            </Text>
        </View>
    );
}
const MealDetailScreen = props => {
    const mealId = props.route.params.mealId;
    const availableMeals = useSelector(state => state.meals.meals);
    const favoritesMeals = useSelector(state => state.meals.favoriteMeals);
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    const isFavoriteMeals = favoritesMeals.find(meal => meal.id === mealId) ? true : false;

    const dispatch = useDispatch()

    const marksAsFavorites = useCallback(
        () => {

            return dispatch(toggleFavorite(mealId))
        },
        [dispatch, toggleFavorite, mealId]
    )


    React.useLayoutEffect(() => {

        props.navigation.setOptions({
            title: selectedMeal.title,
            headerRight: () => {


                if (isFavoriteMeals) {

                    return (


                        <HeaderButton onPress={marksAsFavorites} name='ios-star' color="white" />
                    )
                }

                return (

                    <HeaderButton onPress={marksAsFavorites} name='ios-star-outline' color="white" />
                )


            }


        });
    }, [props.navigation, isFavoriteMeals]);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>INGREDIENTS</Text>
            {selectedMeal.ingredients.map(meal =>
                <ListItem key={meal}>
                    {meal}
                </ListItem>
            )}

            <Text style={styles.title}>STEP</Text>
            {selectedMeal.steps.map(meal =>
                <ListItem key={meal}>
                    {meal}
                </ListItem>
            )}
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 400
    },
    details: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5
    }
});


export default MealDetailScreen;
