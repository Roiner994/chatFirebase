/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import LoginFormComponent from '../../components/forms/LoginFormComponent';
import firebase from 'react-native-firebase';
import {useDispatch} from 'react-redux';
import {setCurrentUser} from '../../actions/currentUser';

const SignInContainer = ({navigation}) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async values => {
    const {email, password} = values;
    // firebase.auth().signOut();
    const auth = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (auth) {
      const ref = firebase.firestore().collection('users');
      const currentUser = await ref.where('authId', '==', auth.user.uid).get();
      if (currentUser) {
        dispatch(
          setCurrentUser({
            _id: currentUser.docs[0].id,
            ...currentUser.docs[0].data(),
          }),
        );
      }
      navigation.navigate('Home');
    } else {
      setError(true);
    }
    return true;
  };

  return (
    <View>
      <ScrollView>
        <Text style={{textAlign: 'center', marginVertical: 30}}>
          Iniciar sesion
        </Text>
        {error && (
          <Text style={{textAlign: 'center', marginVertical: 20, color: 'red'}}>
            Credenciales incorrectas
          </Text>
        )}
        <LoginFormComponent initialValues={{}} onSubmit={onSubmit} />
        <View style={{margin: 20}}>
          <Button
            title="crear cuenta"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInContainer;
