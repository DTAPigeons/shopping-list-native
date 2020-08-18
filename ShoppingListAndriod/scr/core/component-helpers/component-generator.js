import React from 'react';
import { ListItem } from '../../components/shopping-items/list-item/ListItem';
import { ShoppingListItem } from '../../components/shopping-items/shopping-list-item/ShoppingLIstItem';

export function createListItemComponent(item, key, onClick){
    const onClickPayload = (payloadItem) =>{
        onClick(payloadItem);
    } 
    return React.createElement(ListItem,{
        key: key,
        item: item,
        onClick: onClickPayload
    })
}

export function creatShoppingListItemComponent(item, key){
    return React.createElement(ShoppingListItem,{
        key: key,
        item: item
    })
}