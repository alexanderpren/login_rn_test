import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

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
      style={{marginRight: 20}}>
      <Text style={{color: 'white'}}>Exit</Text>
    </TouchableOpacity>
  );
};

export default CloseButton;
