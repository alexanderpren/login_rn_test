import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import DeviceInfoComponent from './DeviceInfo';
const Info = () => {
  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(!visible);
  return (
    <View style={styles.container}>
      <Button
        icon="phone"
        mode="contained"
        onPress={setVisible}
        dark={true}
        style={styles.button}>
        Device Info
      </Button>
      <DeviceInfoComponent visible={visible} hideDialog={hideDialog} />
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    width: '90%',
  },
});
