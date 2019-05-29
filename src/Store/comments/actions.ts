import { Comment } from '../../Interfaces/models';
import { CommentsActionsType } from './types';

export const getComments = (postId: number) => ({
  postId,
  type: CommentsActionsType.GER_COMMENTS,
});

export const getCommentsSuccess = (comments: Comment[]) => ({
  comments,
  type: CommentsActionsType.GER_COMMENTS_SUCCESS,
});

// Handle errors
export const getCommentsError = (error: string) => ({
  type: CommentsActionsType.GER_COMMENTS_ERROR,
  error,
});
