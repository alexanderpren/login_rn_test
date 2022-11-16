import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';

const Title = React.memo(() => {
  return (
    <>
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
    </>
  );
});

export default Title;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    color: 'white',
  },
  secondTitle: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 5,
  },
  secondTitleText: {
    color: '#666666',
  },
});
