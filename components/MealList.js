import React from 'react';
import { Text, View, StyleSheet,FlatList } from 'react-native'
import MealItem from '../components/MealItem'
const MealList = props => {

    const renderMealItem = itemdata => {
        return (
            <MealItem affordability={itemdata.item.affordability}
                duration={itemdata.item.duration}
                complexity={itemdata.item.complexity}
                title={itemdata.item.title}
                image={itemdata.item.imageUrl}
                onSelectMeal={() => props.navigation.navigate('MealDetail', {
                    mealId: itemdata.item.id
                })}
            >

            </MealItem>
        );
    }
    return (
        <View style={styles.screen}>
            <FlatList style={{ width: "100%" }} data={props.listItem} renderItem={renderMealItem}
            />


        </View>

    );

};


styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
export default MealList;