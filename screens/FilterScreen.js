import React, { useState,useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import Color from '../constraint/Color'
import HeaderButton from '../components/HeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import { filterMeals } from '../store/actions/meals'
const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch trackColor={{ true: Color.primaryColor }} value={props.value} onValueChange={props.onValueChange} />
        </View>
    )

}
const FilterScreen = props => {





    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(true);
    const [isVegetarian, setIsVegetarian] = useState(false);
    applyFilter = {
        lactoseFree: isLactoseFree,
        vegan: isVegan,
        glutenFree: isGlutenFree,
        vegetarian: isVegetarian,

    }
    const dispatch = useDispatch()



    const saveFilterMeals = useCallback(
        () => {


            return dispatch(filterMeals(applyFilter));
        },
        [dispatch, filterMeals, applyFilter]
    )



    React.useLayoutEffect(() => {

        props.navigation.setOptions({
            headerLeft: () => (
                <HeaderButton onPress={() => props.navigation.toggleDrawer()} title="Menu" name='ios-menu' color="white" />
            ),
            headerRight: () => (
                <HeaderButton onPress={saveFilterMeals} title="Save" name='ios-save' color="white" />
            )




        });
    }, [props.navigation, saveFilterMeals]);




    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filter/ Restrictions</Text>
            <FilterSwitch value={isGlutenFree} label="Gluten-free" onValueChange={value => setIsGlutenFree(value)} />
            <FilterSwitch value={isLactoseFree} label="Lactose-free" onValueChange={value => setIsLactoseFree(value)} />

            <FilterSwitch value={isVegan} label="Vegan" onValueChange={value => setIsVegan(value)} />

            <FilterSwitch value={isVegetarian} label="Vegetarian" onValueChange={value => setIsVegetarian(value)} />



        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,

        alignItems: 'center',

    },
    filterContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        width: "80%"

    },
    title: {
        marginVertical: 20,
        fontFamily: 'open-sans-bold',
        fontSize: 22,
    }
});


export default FilterScreen
