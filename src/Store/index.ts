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
import { usersReducer, usersSagas } from './users';
import { commentsReducer, commentsSagas } from './comments';

const rootReducers: Reducer<any, AnyAction> = combineReducers({
  posts: postsReducer,
  user: usersReducer,
  comments: commentsReducer
});

// Saga
function* rootSaga() {
  yield all([...postsSagas, ...usersSagas, ...commentsSagas]);
}

const sagaMiddleware = createSagaMiddleware();

// Middlewares
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducers, enhancers);

sagaMiddleware.run(rootSaga);

export default store;
