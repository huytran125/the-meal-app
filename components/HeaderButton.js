import React from 'react';
import { Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HeaderButton=props=>{
    return (
        <TouchableOpacity style={{marginHorizontal:10}}>
            <Ionicons  {...props} size={23}></Ionicons>
        </TouchableOpacity>
    )

}
export default HeaderButton ;