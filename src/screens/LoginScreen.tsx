import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useFormik} from 'formik';
import {useTheme} from '@react-navigation/native';
import * as Yup from 'yup';
// Components

const LoginScreen = () => {
  const theme: any = useTheme();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Required')
        .min(8, 'Your password must be at least 8 characters long'),
    }),
  });

  return <></>;
};

const styles = StyleSheet.create({
  title: {marginBottom: 24},
  input: {marginBottom: 16},
  link: {marginBottom: 24},
  createAccount: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40,
    justifyContent: 'center',
  },
  createAccountText: {marginRight: 4},
});

export default LoginScreen;
