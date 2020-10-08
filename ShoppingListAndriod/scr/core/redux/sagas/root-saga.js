import { takeEvery, put, all, takeLatest } from 'redux-saga/effects';
import { FETCH_CATALOG, SYNC_CATALOG} from '../actions/catalog-actions/action-types';
import { OPEN_DB, CLOSE_DB, SET_DB_INSTANCE, CLEAR_DB_INSTANCE, DB_ERROR } from "../actions/sql-actions/action-types";
import { openDBSaga, closeDBSaga } from "../slqSagas/db-sagas";
import { fetchCatalogueSaga} from '../slqSagas/catalog-sagas';
import { UPDATE_LIST_ITEM, SELECT_ITEM_FROM_DATA_BASE } from '../actions/update-list-item-actions/action-types';
import { FETCH_SHOPPING_LIST, SYNC_SHOPPING_LIST, DELECT_SHOPPING_LIST_ITEM, MARK_ITEM_AS_BOUGHT} from '../actions/shopping-list-actions/action-types';
import { syncCatalogSaga} from './catalog-sagas';
import { updateListItemSaga, fetchShoppingListSaga, syncShoppingListSaga, deleteShoppingItemSaga, markItemAsBoughtSaga, fetchItemFromDataBaseSaga} from './list-item-sagas';
import { syncCatalogAction } from '../actions/catalog-actions/actions';
import { syncShoppingListAction } from '../actions/shopping-list-actions/actions';

export function* rootSaga(){
    yield all([
        takeEvery(FETCH_CATALOG, fetchCatalogueSaga),
        takeEvery(OPEN_DB, openDBSaga),
        takeEvery(CLOSE_DB, closeDBSaga),

        takeEvery(UPDATE_LIST_ITEM, updateListItemSaga),
        takeEvery(SELECT_ITEM_FROM_DATA_BASE, fetchItemFromDataBaseSaga),
        takeEvery(FETCH_SHOPPING_LIST, fetchShoppingListSaga),
        takeEvery(DELECT_SHOPPING_LIST_ITEM, deleteShoppingItemSaga),
        takeLatest(SYNC_CATALOG, syncCatalogSaga),
        takeLatest(SYNC_SHOPPING_LIST, syncShoppingListSaga)
    ]);

    yield put(syncShoppingListAction());
    yield put(syncCatalogAction());

    yield put({type: OPEN_DB});
    yield put({type: FETCH_CATALOG});
}