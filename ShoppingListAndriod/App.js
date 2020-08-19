/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { store} from '../ShoppingListAndriod/scr/core/redux/store';
import {Layout} from './scr/components/layout/Layout';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  {UpdateShoppingItem } from './scr/components/shopping-items/update-shopping-item/UpdateShoppingItem';
import  UpdateShoppingItemClass from './scr/components/shopping-items/update-shopping-item/UpdateShoppingItemClass';
import {ShoppingList} from './scr/components/shopping-items/shopping-list/ShoppingList';

const App = ()  => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <>
    <NavigationContainer>
                <Stack.Navigator initialRouteName="List">
                    <Stack.Screen name="List" component={ShoppingList} options={{ title: 'Shopping List' }}></Stack.Screen>
                    <Stack.Screen name="Update" component={UpdateShoppingItemClass} options={{ title: 'Update Item' }}></Stack.Screen>
                </Stack.Navigator>
    </NavigationContainer>
    </>
    </Provider>
    
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
