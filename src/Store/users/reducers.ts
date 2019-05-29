import { UsersActionsType } from './types';
import { Action } from '../../Interfaces/types';
import { User } from '../../Interfaces/models';
// import { updateInArray } from '../../shared/utils/arrayOperators';

export interface UsersDataState {
  loading: boolean;
  user: User | undefined;
  error: string;
}

const initialState: UsersDataState = {
  loading: false,
  user: undefined,
  error: '',
};

export default function usersReducer(
  state: UsersDataState = initialState,
  action: Action
): UsersDataState {
  switch (action.type) {
    case UsersActionsType.GET_USER: {
      return { ...state, loading: true };
    }
    case UsersActionsType.GET_USER_SUCCESS: {
      const { user } = action;
      return { ...state, loading: false, user, error: '' };
    }
    case UsersActionsType.GET_USER_ERROR: {
      const { error } = action;
      return { ...state, loading: false, error };
    }
    default:
      return state;
  }
}
