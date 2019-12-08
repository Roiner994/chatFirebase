import React, {useEffect, useCallback} from 'react';
import {View} from 'react-native';
import firebase from 'react-native-firebase';
import {useDispatch} from 'react-redux';
import {addMessage} from '../actions/chats';
import ChatViewComponent from '../components/chat/ChatViewComponent';
import {GiftedChat} from 'react-native-gifted-chat';

const onSend = messages => {
  messages.map(message => {
    console.log(message);
    const chat = firebase.database().ref('chats');
    chat.push(message);
  });
};

const messages = [
  {
    _id: 1,
    text: 'Hello developer',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
  },
];

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const chats = firebase.database().ref('chats');
    chats.on('child_added', message => {
      dispatch(addMessage(message.val()));
    });
  });

  return (
    <View>
      <ChatViewComponent onSend={onSend} />
    </View>
  );
};

export default HomeScreen;
