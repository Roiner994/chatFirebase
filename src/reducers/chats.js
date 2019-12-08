import {handleActions} from 'redux-actions';
import {FETCH_CHATS, ADD_MESSAGE} from '../constants';

const defaultState = [];

export default handleActions(
  {
    [FETCH_CHATS]: (state, action) => action.payload,
    [ADD_MESSAGE]: (state, action) => [action.payload, ...state],
  },
  defaultState,
);
