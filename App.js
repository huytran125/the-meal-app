import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals'
import { Provider } from 'react-redux';

const rootReduce = combineReducers({
  meals: mealsReducer,
})

const store = createStore(rootReduce);

const fetchFonts = () => {

  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),

  });
}
export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={(err) => console.log(err)}>


      </AppLoading>
    );
  }
  return (
    <Provider store={store}>
      <MealsNavigator />


    </Provider>







  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
