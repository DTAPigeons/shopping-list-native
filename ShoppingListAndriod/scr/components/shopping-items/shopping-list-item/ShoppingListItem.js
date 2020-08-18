import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {updateListItemAction} from '../../../core/redux/actions/update-list-item-actions/actions'
import { Container, Header, Content, Card, CardItem, Text, Body, CheckBox, Left } from "native-base";

export const ShoppingListItem= ({item})=>{
    const dispatch = useDispatch();
    const editToggled = useSelector(state=> state.shoppingListReducer.editToggled);

    const switchBoughtStatus = () =>{
        item.bought = !item.bought;
        dispatch(updateListItemAction(item))
    }
    
    return(
        <Card>
            <CardItem>
                <Left>
                <CheckBox checked={item.bought} onPress={switchBoughtStatus}  color="green"/>
                <Body>                
                <Text>
                    {item.name}
                </Text>
                </Body>
                </Left>
            </CardItem>
        </Card>
    )
}