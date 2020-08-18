import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { catalogReducer } from './reducers/catalog-reducer';
import { updateListItemReducer } from './reducers/update-list-item-reducer';
import { shoppingListReducer} from './reducers/shopping-list-reducer';
import { rootSaga } from './sagas/root-saga';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({catalogReducer, updateListItemReducer, shoppingListReducer});

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);