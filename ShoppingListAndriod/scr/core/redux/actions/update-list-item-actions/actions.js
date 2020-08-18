import * as actionTypes from './action-types';
import { createDatabaseEntryFromItem } from '../../../firebase/data/item-factory';

export function itemSelectedAction(item){
    return {
        type: actionTypes.ITEM_SELECTED,
        payload: item
    }
}

export function updateListItemAction(item){
    const entry = createDatabaseEntryFromItem(item);
    return {
        type: actionTypes.UPDATE_LIST_ITEM,
        payload: {
            entry,
            id : item.id
        }
    }
}

export function updateListItemSuccessAction(){
    return{
        type: actionTypes.UPDATE_LIST_ITEM_SUCCESS
    }
}

export function selectItemFromDataBaseAction(id){
    return{
        type: actionTypes.SELECT_ITEM_FROM_DATA_BASE,
        payload: id
    }
}

export function selectItemFromDataBaseSuccessAction(item){
    return{
        type: actionTypes.SELECT_ITEM_FROM_DATA_BASE_SUCCESS,
        payload: item
    }
}

export function cleareUpdateItemAction(){
    return{
        type: actionTypes.CLEARE_UPDATE_ITEM
    }
}

export function toggleCatologAction(){
    return{
        type: actionTypes.TOGGLE_CATALOG
    }
}