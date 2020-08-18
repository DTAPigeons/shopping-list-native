import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, Content, Card, CardItem, Text, Body, CheckBox, Left, Right, Button } from "native-base";
import {CatalogItem} from '../catalog-item/CatalogItem';
import {itemSelectedAction, updateListItemAction} from '../../../core/redux/actions/update-list-item-actions/actions';
import { TextInput } from 'react-native';

export const UpdateShoppingItem=({id, navigation})=>{
    const dispatch = useDispatch();
    const catalog = useSelector(state=> state.catalogReducer.catalog);
    const selectedItem = useSelector(state => state.updateListItemReducer.selectedItem);
    const updated = useSelector(state => state.updateListItemReducer.updated);
    const [statusMessage, setStatusMessage] = useState("");

    const onPress=(item)=>{
        console.log("presses");
        dispatch(itemSelectedAction({...selectedItem, name: item.name}));
    }

    const onInputChange = (text) =>{

        dispatch(itemSelectedAction( {...selectedItem, name: text}));
    }

    const onSubmit = ()=>{
        if(!selectedItem|| !selectedItem.name || selectedItem.name==""){
            setStatusMessage("Invalid Item");
            return;
        }
        dispatch(updateListItemAction(selectedItem));
        navigation.popToTop();
    }

    return(
        <Content>
            <Text>{statusMessage}</Text>
            <TextInput
            onChangeText={text=>onInputChange(text)}
            value={selectedItem.name}
            />
            <Right>
                <Button onPress={onSubmit}>
                    <Text>Submit</Text>
                </Button>
                <Button onPress={()=>{navigation.popToTop()}}>
                    <Text>Cancel</Text>
                </Button>
            </Right>
            <Text>
            Chose product from catalog
            </Text>
            {catalog.map(item=><CatalogItem item={item} onPress={onPress}/>)}
        </Content>
    )
}