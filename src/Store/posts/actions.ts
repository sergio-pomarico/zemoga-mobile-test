import { PostsActionsType } from './types';
import { Post } from '../../Interfaces/models';

export const getPosts = () => ({
  type: PostsActionsType.GET_POSTS,
});

export const getPostsSuccess = (posts: Post[]) => ({
  posts,
  type: PostsActionsType.GET_POSTS_SUCCESS,
});

// Handle errors
export const getPostsFailure = (error: string) => ({
  error,
  type: PostsActionsType.GET_POSTS_ERROR,
});

export const selectPost = (post: Post) => ({
  post,
  type: PostsActionsType.SELECT_POST,
});


