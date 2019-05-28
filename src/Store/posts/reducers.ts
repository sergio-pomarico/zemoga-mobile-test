import { PostsActionsType } from './types';
import { Action } from '../../Interfaces/types';
import { Post } from '../../Interfaces/models';


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

    default:
      return state;
  }
}
