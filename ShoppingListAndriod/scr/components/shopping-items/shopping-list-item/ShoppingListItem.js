import React, { useEffect } from "react";
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateListItemAction} from '../../../core/redux/actions/update-list-item-actions/actions';
import { deleteShoppingListItemAction, toggleDeleteDialogAction} from '../../../core/redux/actions/shopping-list-actions/actions';
import { Container, Header, Content, Card, CardItem, Text, Body, CheckBox, Left, Button, Right, Grid, Col } from "native-base";
import Dialog, { DialogFooter, DialogButton, DialogContent, DialogTitle, ScaleAnimation } from 'react-native-popup-dialog';

export const ShoppingListItem= ({item, navigation})=>{
    const dispatch = useDispatch();
    const editToggled = useSelector(state=> state.shoppingListReducer.editToggled);


    const switchBoughtStatus = () =>{
        item.bought = !item.bought;
        dispatch(updateListItemAction(item));
    }

    const onEdit = () => {
        navigation.navigate('Update', {id:item.id});
    }


    const onDeleteClicked = () =>{
        dispatch(toggleDeleteDialogAction(item));
    }
    
    return(
        <>
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
                {editToggled &&                 
                <Right>
                <Grid>
                    <Col style={{ width: 88, marginRight:4 }}>
                    <Button onPress={onEdit}>
                    <Text>
                        Edit
                    </Text>
                    </Button>
                    </Col>
                    <Col style={{ width: 88 }}>
                    <Button onPress={onDeleteClicked}>
                    <Text>
                        Delete
                    </Text>
                     </Button>
                    </Col>
                </Grid>
                </Right>}
            </CardItem>
        </Card>
        </>
    )
}