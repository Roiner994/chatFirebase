import React from 'react';
import {View, Text} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {useSelector} from 'react-redux';
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

const ChatViewComponent = ({onSend}) => {
  const currentUser = useSelector(state => state.currentUser);
  const messagesChat = useSelector(state => state.chats);
  return (
    <View style={{minHeight: '100%'}}>
      <GiftedChat messages={messagesChat} onSend={onSend} user={currentUser} />
    </View>
  );
};

export default ChatViewComponent;
