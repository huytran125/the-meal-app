import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, ImageBackground } from 'react-native';

const MealItem = props => {

    return (
        <View style={styles.mealItem}>
            <TouchableNativeFeedback onPress={props.onSelectMeal}>

                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }} >
                        <ImageBackground source={{ uri: props.image }} style={styles.bigImage}>
                            <View style={styles.headerContainer}>
                                <Text numberOfLines={1} style={styles.header}>{props.title}</Text>
                            </View>

                        </ImageBackground>

                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>


            </TouchableNativeFeedback>

        </View>


    );

}


const styles = StyleSheet.create({
    mealItem: {
        padding: 5,
        backgroundColor: '#ccc',
        width: "100%",
        height: 400,
        borderRadius: 20,
        overflow: "hidden"

    },
    bigImage: {
        borderRadius: 20,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    mealHeader: {
        height: "90%",

    },
    mealRow: {
        flexDirection: 'row',
    },
    mealDetail: {
        padding: 10,
        height: "10%",
        justifyContent: 'space-between',
        alignItems:'center'
    },
    header: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    headerContainer: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    detail: {
        fontSize: 18

    }

});
export default MealItem;