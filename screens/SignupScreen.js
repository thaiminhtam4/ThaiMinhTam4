import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, TextInput, Logo, Button, FormErrorMessage } from '../components';
import { signupValidationSchema } from '../utils';

export const SignupScreen = ({ navigation }) => {
  const [errorState, setErrorState] = useState('');

  const handleSignup = async (values) => {
    const { email, password } = values;
    auth().createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Login'))
      .catch(error => setErrorState(error.message));
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid={true}>
        {/* Formik wrapper */}
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          validationSchema={signupValidationSchema}
          onSubmit={values => handleSignup(values)}>
          {({ values, errors, handleChange, handleSubmit }) => (
            <>
              <TextInput name="email" placeholder="Enter email" value={values.email} onChangeText={handleChange('email')} />
              <FormErrorMessage error={errors.email} />
              <Button onPress={handleSubmit}><Text>Signup</Text></Button>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 }
});
