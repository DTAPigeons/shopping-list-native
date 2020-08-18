import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {
    SectionList,
  } from "react-native";
import { ShoppingListItem } from '../shopping-list-item/ShoppingListItem';
import {useEffect, useState} from 'react';
import { Content, Button, Text, Right } from 'native-base';



export const ShoppingList = ({ navigation }) =>{
    const shoppingList = useSelector(state=> state.shoppingListReducer.shoppingList);
    const dispatch = useDispatch();

    const createSections=()=>{
        const bought = shoppingList.filter(item=>item.bought);
        const toBuy = shoppingList.filter(item=>!item.bought);
        return [
            {
                title: "What we need:",
                data: toBuy
            },
            {
                title: "Bought:",
                data: bought
            }
        ]
    }
    

    return(
        <>
            <Content>
                <Right>
                <Button onPress={()=>navigation.navigate('Update')}>
                    <Text>+</Text>
                </Button>
                </Right>
                <SectionList
                sections={createSections()}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=><ShoppingListItem item={item}/>}
                renderSectionHeader={({section:{title}})=>(<Text>{title}</Text>)}
                />
            </Content>
        </>
    )
}