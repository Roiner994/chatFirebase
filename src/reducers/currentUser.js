import {handleActions} from 'redux-actions';
import {SET_CURRENT_USER} from '../constants';

const defaultState = null;

export default handleActions(
  {
    [SET_CURRENT_USER]: (state, action) => action.payload,
  },
  defaultState,
);
