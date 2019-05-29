import { call, put, takeLatest } from '@redux-saga/core/effects';

import Requester from '../../Utils/Requester';
import { UsersActionsType } from './types';
import { getUserSuccess, getUserError } from './actions'
import { Action } from '../../Interfaces/types';

export function* getUser(action: Action): IterableIterator<any> {
  try {
    const { userId } = action;
    const Response = yield call(Requester.getInstance().Get,`users/${userId}`);
    const { status, data } = Response;

    if (status === 200) {
      yield put(getUserSuccess(data));
    } else {
      yield put(getUserError('error'));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getUserError(error));
  }
}

export const usersSagas = [takeLatest(UsersActionsType.GET_USER, getUser)];
