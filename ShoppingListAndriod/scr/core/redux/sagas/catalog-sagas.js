import { reduxSagaFirebase, CATALOG_PATH } from '../../firebase/database';
import { fetchCatalogSuccessAction } from '../actions/catalog-actions/actions';
import {  call, put, fork, take, cancel } from 'redux-saga/effects';
import { SYNC_CATALOG_STOP } from '../actions/catalog-actions/action-types';


export function* fetchCatalogSaga(){
    const result = yield call(reduxSagaFirebase.database.read, CATALOG_PATH);
    yield put(fetchCatalogSuccessAction(result));
}

export function* syncCatalogSaga() {
   let task = yield fork(reduxSagaFirebase.database.sync, CATALOG_PATH,
    {
        successActionCreator: fetchCatalogSuccessAction
    });

    yield take(SYNC_CATALOG_STOP);

    yield cancel(task);
}

