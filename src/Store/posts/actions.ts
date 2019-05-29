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

export const toggleFavoriteInPost = (post: Post) => ({
  post,
  type: PostsActionsType.TOGGLE_AS_FAVORITE,
});

export const deletePost = (post: Post) => ({
  post,
  type: PostsActionsType.DELETE_POST,
});

export const deleteAllPosts = () => ({
  type: PostsActionsType.DELETE_ALL_POSTS,
});


