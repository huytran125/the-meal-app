import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTIle';
import HeaderButton from '../components/HeaderButton';


const CategoriesScreen = props => {

  React.useLayoutEffect(() => {

    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButton onPress={() =>props.navigation.toggleDrawer()} title="Menu" name='ios-menu' color="white" />
      )




    });
  }, [props.navigation]);



  const renderListItem = (itemData) => {



    return (

      <CategoryGridTile
        onPress={() => props.navigation.navigate('CategoriesMeals', {
          categoryId: itemData.item.id
        })}
        title={itemData.item.title}
        color={itemData.item.color}
      />



    );
  }
  return (

    <FlatList style={styles.itemContainer} numColumns={2} data={CATEGORIES} renderItem={renderListItem} />



  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },




});


export default CategoriesScreen;
