import React from 'react';
import {styles} from './mainStyle';
import { ShoppingList } from '../../shopping-items/shopping-list/ShoppingList';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  {UpdateShoppingItem } from '../../shopping-items/update-shopping-item/UpdateShoppingItem';

export const Main =()=>{
    const Stack = createStackNavigator();

    return(
        <Content>

            <NavigationContainer>
                <Stack.Navigator initialRouteName="Update">
                    <Stack.Screen name="List" component={ShoppingList}></Stack.Screen>
                    <Stack.Screen name="Update" component={UpdateShoppingItem}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </Content>
    )
}