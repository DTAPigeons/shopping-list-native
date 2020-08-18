import { FETCH_CATALOG_SUCCESS} from '../actions/catalog-actions/action-types';

const initialState = {
    catalog : []
};

export function catalogReducer(state = initialState, action){
    switch(action.type){
        case FETCH_CATALOG_SUCCESS:
            return {...state, catalog: action.payload};
        default:
            return state;
    }
}