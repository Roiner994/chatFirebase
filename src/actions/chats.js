import {createAction} from 'redux-actions';
import {FETCH_CHATS, ADD_MESSAGE} from '../constants';

export const fetchChats = createAction(FETCH_CHATS, value => value);

export const addMessage = createAction(ADD_MESSAGE, value => value);
