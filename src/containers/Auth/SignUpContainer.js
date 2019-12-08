import React, {useState, useEffect} from 'react';
import {View, Alert, Button, PermissionsAndroid} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import firebase from 'react-native-firebase';
import {uuidv4} from '../../helpers';
import {useDispatch} from 'react-redux';
import UserFormComponent from '../../components/forms/UserFormComponent';
import {setCurrentUser} from '../../actions/currentUser';

const SignUpContainer = ({navigation}) => {
  const [avatarSource, setAvatarSource] = useState(null);
  const dispatch = useDispatch();

  const openGallery = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      ImagePicker.launchImageLibrary(
        {
          allowsEditing: true,
          aspect: [4, 3],
        },
        response => {
          const source = {
            uri: response.uri,
            path: response.path,
            fileName: response.fileName,
          };
          setAvatarSource(source);
        },
      );
    } else {
      Alert.alert('error');
    }
  };

  const handleSubmit = async values => {
    const {email, password} = values;
    delete values.password;
    const auth = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (auth) {
      let fileName = null;
      let file = null;
      if (avatarSource) {
        fileName = `${uuidv4()}.${avatarSource.fileName}`; // Generate unique name
        file = await firebase
          .storage()
          .ref(`images/${fileName}`)
          .putFile(decodeURI(avatarSource.path));
      }
      values.avatar = file ? file.downloadURL : null;
      values.authId = auth.user._user.uid;
      const ref = firebase.firestore().collection('users');
      const user = await ref.add(values);
      if (user) {
        dispatch(
          setCurrentUser({
            _id: user.id,
            ...values,
          }),
        );
        navigation.navigate('AuthLoading');
      } else {
        Alert.alert('Error');
      }
    }
  };

  return (
    <View style={{marginVertical: 20}}>
      <UserFormComponent
        initialValues={{}}
        onSubmit={handleSubmit}
        avatarSource={avatarSource}
        openGallery={openGallery}
      />
    </View>
  );
};

export default SignUpContainer;
