import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignOutButton from './components/ui/buttons/SignOutButton';

import LoadingContainer from './containers/LoadingContainer';
import HomeScreen from './containers/HomeScreen';

import SignInContainer from './containers/Auth/SignInContainer';
import SignUpContainer from './containers/Auth/SignUpContainer';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        headerRight: <SignOutButton navigation={navigation} />,
      }),
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#4F8EF7',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignInContainer,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUpContainer,
      navigationOptions: {
        title: 'Registrar nuevo usuario',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#343843',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    },
  },
);

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: LoadingContainer,
      Main: MainStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default createAppContainer(AppNavigator);
