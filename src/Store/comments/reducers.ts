import { CommentsActionsType } from './types';
import { Action } from '../../Interfaces/types';
import { Comment } from '../../Interfaces/models';

export interface CommentsDataState {
  loading: boolean;
  comments: Comment[];
  error: string;
}

const initialState: CommentsDataState = {
  loading: false,
  comments: [],
  error: '',
};

export default function commentsReducer(
  state: CommentsDataState = initialState,
  action: Action
): CommentsDataState {
  switch (action.type) {
    case CommentsActionsType.GER_COMMENTS: {
      return { ...state, loading: true };
    }

    case CommentsActionsType.GER_COMMENTS_SUCCESS: {
      const { comments } = action;
      return { ...state, loading: false, comments, error: '' };
    }

    case CommentsActionsType.GER_COMMENTS_ERROR: {
      const { error } = action;
      return { ...state, loading: false, error };
    }
    default:
      return state;
  }
}
