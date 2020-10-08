import { runSQLQuery } from "../../sqlLite/db";
import { DB_ERROR } from '../actions/sql-actions/action-types';
import {  call, put, fork, take, cancel, select } from 'redux-saga/effects';
import { fetchCatalogSuccessAction } from "../actions/catalog-actions/actions";

export function* fetchCatalogueSaga(){
    const { db } = yield select(state => state.sqlReducer.db);

    try{
        const {success, error, result} =  yield call(runSQLQuery, db, 'SELECT * from Catalogue');
        
        if(success){
            yield put(fetchCatalogSuccessAction(result))
        }
        else{
            yield put({
                type: DB_ERROR,
                payload:{
                    error: error
                }
             })
        }
    }
    catch(error){
        yield put({
            type: DB_ERROR,
            payload:{
                error: error
            }
         })
    }
}

