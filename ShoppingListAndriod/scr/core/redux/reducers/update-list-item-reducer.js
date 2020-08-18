import { ITEM_SELECTED, UPDATE_LIST_ITEM_SUCCESS, SELECT_ITEM_FROM_DATA_BASE_SUCCESS, CLEARE_UPDATE_ITEM, TOGGLE_CATALOG } from '../actions/update-list-item-actions/action-types';

const initialState = {
    selectedItem : { name: "", bought: false},
    updated: false,
    catalogToggled: false
};

export function updateListItemReducer(state = initialState, action){
    switch(action.type){
        case ITEM_SELECTED:
            return {...state, selectedItem : action.payload};
        case UPDATE_LIST_ITEM_SUCCESS:
            return {...state, updated: true}
        case SELECT_ITEM_FROM_DATA_BASE_SUCCESS:
            return {...state, selectedItem: action.payload};
        case CLEARE_UPDATE_ITEM:
            return {...initialState};
        case TOGGLE_CATALOG:
            return {...state, catalogToggled: !state.catalogToggled}
        default:
            return state;
    }
}