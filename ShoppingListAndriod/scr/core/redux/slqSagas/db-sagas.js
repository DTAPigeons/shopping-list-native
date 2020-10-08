import SQLite from 'react-native-sqlite-storage';
import { put, call, select } from 'redux-saga/effects';
import { SET_DB_INSTANCE, DB_ERROR, CLEAR_DB_INSTANCE } from '../actions/sql-actions/action-types';

export function* openDBSaga(){
    try{
        const { db } = yield select(state => state.sqlReducer.db);

        if(!db) {
            const database = yield call(SQLite.openDatabase, {
                name: "sqldb.db",
                createFromLocation: "~sqldb.db"
            })
        }

        yield put({
            type: SET_DB_INSTANCE,
            payload: {
                db: db
            }
        })
    }
    catch(error){
        if(error)
        {
            console.log(error);
        }
        yield put({
            type: DB_ERROR,
            payload:{
                error: error
            }
        })
    }
}

export function* closeDBSaga(){
    try{
        const {db} = yield select(state => state.sqlReducer.db);

        if(db){
           yield call(db.close);
           yield put({
               type: CLEAR_DB_INSTANCE,
               payload:{}
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