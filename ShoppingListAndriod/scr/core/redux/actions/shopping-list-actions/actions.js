import * as types from './action-types';
import { createShoppingListCollectionFromDatabaseEntries } from '../../../firebase/data/item-factory';

export function fetchShoppingListAction(dummy={}){
    if(dummy)
    return{
        type: types.FETCH_SHOPPING_LIST
    };
}

export function fetchShoppingListSuccessAction(shoppingListEntries){
    const shoppingList = createShoppingListCollectionFromDatabaseEntries(shoppingListEntries);
    return{
        type: types.FETCH_SHOPPING_LIST_SUCCESS,
        payload: shoppingList
    }
}

export function syncShoppingListAction() {
    return{
        type: types.SYNC_SHOPPING_LIST
    };
}

export function syncShoppingListStopAction() {
    return{
        type: types.SYNC_SHOPPING_LIST_STOP
    };
}

export function  deleteShoppingListItemAction(item) {
    return{
        type: types.DELECT_SHOPPING_LIST_ITEM,
        payload: item
    };
}

export function deleteShoppingListItemSuccesAction() {
    return{
        type: types.DELECT_SHOPPING_LIST_ITEM_SUCCES
    };
}


export function toggleEditAction(){
    return{
        type: types.TOGGLE_EDIT
    }
}

export function toggleDeleteDialogAction(item){
    return{
        type: types.TOGGLE_DELETE_DIALOG,
        payload: item
    }
}