import {
  createStore,
  combineReducers,
  applyMiddleware,
  Reducer,
  AnyAction,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all } from '@redux-saga/core/effects';

// Reducers & Sagas
import { postsReducer, postsSagas } from './posts';

const rootReducers: Reducer<any, AnyAction> = combineReducers({
  posts: postsReducer,
});

// Saga
function* rootSaga() {
  yield all([...postsSagas]);
}

const sagaMiddleware = createSagaMiddleware();

// Middlewares
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducers, enhancers);

sagaMiddleware.run(rootSaga);

export default store;
