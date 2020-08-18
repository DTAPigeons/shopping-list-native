import * as types from './action-types';
import { createCatalogItemCollectionFromDatabaseEntries } from '../../../firebase/data/item-factory';


export function fetchCatalogSuccessAction(catalogEntier){
    const catalog = createCatalogItemCollectionFromDatabaseEntries(catalogEntier);
    return {
        type: types.FETCH_CATALOG_SUCCESS,
        payload: catalog
    }
}

export function fetchCatalogAction(){
    return {type: types.FETCH_CATALOG};
}

export function syncCatalogAction() {
    return {type: types.SYNC_CATALOG};    
}

export function syncCatalogStopAction() {
    return {type: types.SYNC_CATALOG_STOP};
}