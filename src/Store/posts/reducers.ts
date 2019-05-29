import { PostsActionsType } from './types';
import { Action } from '../../Interfaces/types';
import { Post } from '../../Interfaces/models';

import { updateArray, deleteInArray } from '../../Utils/Helpers'

export interface PostsDataState {
  loading: boolean;
  posts: Post[];
  post: Post | undefined;
  error: string;
}

const initialState: PostsDataState = {
  loading: false,
  posts: [],
  post: undefined,
  error: '',
};

export default function postsReducer(
  state: PostsDataState = initialState,
  action: Action
): PostsDataState {
  switch (action.type) {
    case PostsActionsType.GET_POSTS: {
      return { ...state, loading: true };
    }
    case PostsActionsType.GET_POSTS_SUCCESS: {
      const { posts } = action;
      return { ...state, loading: false, posts, error: '' };
    }

    case PostsActionsType.GET_POSTS_ERROR: {
      const { error } = action;
      return { ...state, loading: false, error };
    }

    case PostsActionsType.SELECT_POST: {
      const { post } = action;
      const { posts } = state
      const postSelected = { ...post, seen: true };
      const postsUpdated = updateArray(posts, postSelected);
      return { ...state, posts: postsUpdated, post: postSelected };
    }

    case PostsActionsType.TOGGLE_AS_FAVORITE: {
      const { post } = action;
      const postSelected = { ...post, favorite: !post.favorite };

      const posts = updateArray(state.posts, postSelected);
      return { ...state, posts, post: postSelected };
    }

    case PostsActionsType.DELETE_POST: {
      const { post } = action;
      const posts = deleteInArray(state.posts, post);
      return { ...state, posts };
    }

    case PostsActionsType.DELETE_ALL_POSTS: {
      return { ...state, posts: [] };
    }

    default:
      return state;
  }
}
