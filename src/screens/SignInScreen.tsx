import React, {useState, useEffect} from 'react';
import {Button, View} from 'react-native';
import {TextInput, Text} from 'react-native-paper';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {styles} from './styles';
import {useAuth} from '../contexts/Auth';
import {Loading} from '../components/Loading';
import Title from '../components/Title';
import CheckBox from '../components/CheckBox';

export const SignInScreen = () => {
  const [loading, isLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const auth = useAuth();

  const signIn = async ({email, password}) => {
    isLoading(true);
    await auth.signIn(email, password, rememberMe);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      signIn(values);
      console.log(values.email, values.password);
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
        <Title />
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
          label="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        {formik?.errors && (
          <Text style={{color: 'red'}}>{formik.errors.password}</Text>
        )}

        <CheckBox checked={rememberMe} setChecked={setRememberMe} />

        {loading ? (
          <Loading />
        ) : (
          <View style={styles.buttonSign}>
            <Button title="Sign In" onPress={formik.handleSubmit} />
          </View>
        )}
      </View>
    </View>
  );
};
