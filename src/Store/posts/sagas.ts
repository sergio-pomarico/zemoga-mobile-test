import { call, put, takeLatest } from '@redux-saga/core/effects';

import Requester from '../../Utils/Requester';
import { PostsActionsType } from './types';
import { getPostsSuccess, getPostsFailure } from './actions';
import { Post } from '../../Interfaces/models';

export function* getPosts(): IterableIterator<any> {
  try {
    const Response = yield call(Requester.getInstance().Get, 'posts');
    const { status, data } = Response;

    if (status === 200) {
      const posts = data.map((post: Post, index: number) => ({
        ...post,
        seen: index >= 20,
        favorite: false,
      }));
      yield put(getPostsSuccess(posts));
    } else {
      yield put(getPostsFailure('error'));
    }
  } catch (error) {
    console.log('error', error);
    yield put(getPostsFailure(error));
  }
}

export const postsSagas = [takeLatest(PostsActionsType.GET_POSTS, getPosts)];
