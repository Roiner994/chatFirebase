import {combineReducers} from 'redux';
import chats from './chats';
import currentUser from './currentUser';

const AppReducer = combineReducers({
  chats,
  currentUser,
});

export default AppReducer;
