import React from 'react';
import {View, Button} from 'react-native';
import {Formik} from 'formik';
import TextInputComponent from '../inputs/TextInputComponent.js';
import PasswordInputComponent from '../inputs/PasswordInputComponent';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Correo')
    .email('Ingrese un correo valido')
    .required('Campo requerido'),
  password: Yup.string()
    .label('Contraseña')
    .required('Campo requerido')
    .min(6, 'Debe contener al menos 6 caracteres'),
});

const LoginFormComponent = ({initialValues, onSubmit}) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isSubmitting,
          errors,
          touched,
        }) => (
          <View>
            <TextInputComponent
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              label="Correo Electronico"
              name="email"
              error={errors.email}
              touched={touched.email}
            />
            <PasswordInputComponent
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password}
              label="Contraseña"
              name="password"
              error={errors.password}
              touched={touched.password}
            />
            <View style={{marginTop: 20, paddingHorizontal: 20}}>
              <Button
                onPress={handleSubmit}
                title="Iniciar sesión"
                disabled={isSubmitting}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginFormComponent;
