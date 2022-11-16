import React, {useState} from 'react';
import {ActivityIndicator, Button, View} from 'react-native';
import {TextInput, Text} from 'react-native-paper';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {styles} from './styles';
import {useAuth} from '../contexts/Auth';

export const SignInScreen = () => {
  const [loading, isLoading] = useState(false);
  const auth = useAuth();
  const signIn = async () => {
    isLoading(true);
    await auth.signIn();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      signIn();
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

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <View style={styles.title}>
          <Text style={styles.textTitle} variant="displaySmall">
            Welcome
          </Text>
        </View>
        <View style={styles.secondTitle}>
          <Text style={styles.secondTitleText} variant="titleMedium">
            Please sign in to your account
          </Text>
        </View>

        <TextInput
          style={styles.input}
          error={formik.errors.email ? true : false}
          label="Username"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
        />
        {formik?.errors && (
          <Text style={{color: 'red'}}>{formik.errors.email}</Text>
        )}
        <TextInput
          style={styles.input}
          error={formik.errors.password ? true : false}
          secureTextEntry={true}
          label="password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        {formik?.errors && (
          <Text style={{color: 'red'}}>{formik.errors.password}</Text>
        )}

        {loading ? (
          <ActivityIndicator color={'#000'} animating={true} size="small" />
        ) : (
          <Button title="Sign In" onPress={formik.handleSubmit} />
        )}
      </View>
    </View>
  );
};
