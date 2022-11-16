import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Checkbox, Text} from 'react-native-paper';

const CheckBox = ({setChecked, checked}) => {
  return (
    <View style={styles.container}>
      <Checkbox
        color="white"
        style={styles.checkbox}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text style={styles.textStyle}>Remember me ?</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
  },
  checkbox: {
    marginLeft: 20,
    borderColor: 'white',
  },
  textStyle: {
    color: 'white',
  },
});

export default CheckBox;
