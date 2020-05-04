import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';



const CategoryGridTile = props => {
    return (
        <View style={styles.gridItem}>
            <TouchableNativeFeedback onPress={props.onPress}>
                <View style={{ ...styles.container, backgroundColor: props.color }}>

                    <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );

}




const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        borderRadius: 10,
        
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'

    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: "right"
    },
    gridItem: {
        flex: 1,
        height: 150,
        margin: 15,
        borderRadius:10,
        elevation: 3,
        

    }

});
export default CategoryGridTile;