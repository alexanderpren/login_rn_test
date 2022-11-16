import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const IconTab = ({name, focused, color, size}) => {
  let iconName;

  switch (name) {
    case 'Main':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'MyPhotos':
      iconName = focused ? 'camera' : 'camera-outline';
      break;
    case 'Profile':
      iconName = focused ? 'person-circle' : 'person-circle-outline';
      break;

    default:
      break;
  }
  return <Icon name={iconName} size={size} color={color} />;
};

export default IconTab;
