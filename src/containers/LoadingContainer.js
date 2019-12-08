import React from 'react';
import firebase from 'react-native-firebase';
import BasicLoadingComponent from '../components/load/BasicLoadingComponent';

const LoadingContainer = ({navigation}) => {
  const auth = firebase.auth();
  navigation.navigate(auth._user ? 'Home' : 'SignIn');
  return <BasicLoadingComponent />;
};

export default LoadingContainer;
