import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useAuth} from '../contexts/Auth';

const CloseButton = () => {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={signOut}
      style={{marginRight: 10}}>
      <Icon name={'exit'} size={30} color={'white'} />
    </TouchableOpacity>
  );
};

export default CloseButton;
