import { FETCH_SHOPPING_LIST_SUCCESS, SELECT_SHOPPING_LIST_ITEM, DELECT_SHOPPING_LIST_ITEM_SUCCES, MARK_ITEM_AS_BOUGHT_SUCCESS, CLEAR_SELECTION, TOGGLE_EDIT, TOGGLE_DELETE_DIALOG } from '../actions/shopping-list-actions/action-types';

const initialState = {
    shoppingList: [],
    itemToDelete: undefined,
    editToggled: false
};

export function shoppingListReducer(state=initialState, action){
    switch(action.type){
        case FETCH_SHOPPING_LIST_SUCCESS:
            return {...state, shoppingList: action.payload};
        case DELECT_SHOPPING_LIST_ITEM_SUCCES:
            return {...state, itemToDelete: undefined};
        case TOGGLE_EDIT:
            return {...state, editToggled: !state.editToggled};
        case TOGGLE_DELETE_DIALOG:{
            return{...state, itemToDelete: action.payload}
        }
        default:
            return state
    }
}