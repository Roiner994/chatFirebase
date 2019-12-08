import React from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import TextInputComponent from '../inputs/TextInputComponent.js';
import PasswordInputComponent from '../inputs/PasswordInputComponent';

const UserFormComponent = ({
  initialValues,
  onSubmit,
  openGallery,
  avatarSource,
}) => {
  return (
    <ScrollView>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
          <View>
            <View style={styles.containerGallery}>
              <TouchableOpacity onPress={() => openGallery()}>
                <Image
                  source={
                    avatarSource
                      ? avatarSource
                      : require('../../../assets/gallery.png')
                  }
                  style={[styles.openGallery]}
                />
                {!avatarSource && <Text>Seleccione una imagen</Text>}
              </TouchableOpacity>
            </View>
            <TextInputComponent
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.name}
              label="Nombre"
              name="name"
            />
            <TextInputComponent
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              label="Correo Electronico"
              name="email"
            />
            <PasswordInputComponent
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password}
              label="Contraseña"
              name="password"
            />
            <View style={{marginTop: 20, paddingHorizontal: 20}}>
              <Button
                onPress={handleSubmit}
                title="Registrar"
                disabled={isSubmitting}
              />
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  openGallery: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
  },
  containerGallery: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
});

export default UserFormComponent;
