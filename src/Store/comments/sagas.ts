import { call, put, takeLatest } from '@redux-saga/core/effects';

import Requester from '../../Utils/Requester';
import { Action } from '../../Interfaces/types';
import { CommentsActionsType } from './types';
import { getCommentsSuccess, getCommentsError } from './actions';

export function* getCommentsByPostId(action: Action): IterableIterator<any> {
  try {
    const { postId } = action;
    const commentsResponse = yield call(
      Requester.getInstance().Get,`comments/?postId=${postId}`);
    const { status, data } = commentsResponse;

    if (status === 200) {
      yield put(getCommentsSuccess(data));
    } else {
      yield put(getCommentsError('error'));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getCommentsError(error));
  }
}

export const commentsSagas = [
  takeLatest(CommentsActionsType.GER_COMMENTS, getCommentsByPostId),
];
