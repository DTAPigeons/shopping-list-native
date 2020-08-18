import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { firebaseConfig } from './config'

export const CATALOG_PATH = 'catalog';
export const SHOPPING_LIST_PATH = 'shopingList';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const reduxSagaFirebase = new ReduxSagaFirebase(firebase.app());


