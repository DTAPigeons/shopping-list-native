import {SET_DB_INSTANCE, CLEAR_DB_INSTANCE, DB_ERROR} from "../actions/sql-actions/action-types";

const initialState = {
    db : undefined,
    error : undefined,
    isReady : false 
}

export function sqlReducer(state = initialState, action){
    const [type, payload] = action;

    switch(type){
        case SET_DB_INSTANCE:
            return {...state, db: payload.db, isReady: true};
        case CLEAR_DB_INSTANCE:
            return {...state, db: undefined, isReady: false};
        case DB_ERROR:
            return {...state, db: undefined, isReady: false, error: payload.error};
        default:
            return state;
    }
}