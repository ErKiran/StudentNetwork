import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER } from '../actions/types';
import {FETCH_USER} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
      case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

