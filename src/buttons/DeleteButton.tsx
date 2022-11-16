import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DeleteButton = ({deleteItem}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={deleteItem}
      style={styles.container}>
      <Icon name={'trash'} size={30} color={'red'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginRight: 10,
  },
});
export default DeleteButton;
