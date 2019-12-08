/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, View, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';
import {useDispatch} from 'react-redux';
import {setCurrentUser} from '../../../actions/currentUser';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SignOutButton = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={{marginRight: 10}}>
      <TouchableOpacity
        onPress={() => {
          dispatch(setCurrentUser(null));
          firebase.auth().signOut();
          navigation.navigate('SignIn');
        }}>
        <Icon name="sign-out-alt" size={30} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

export default SignOutButton;
