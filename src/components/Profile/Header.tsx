import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';

import UploadImage from './UploadImage';
import GetCurrentLocation from '../GetCurrentLocation';
const Header = ({avatarBackground, avatar, name, address}) => {
  const {city, country} = address;
  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        style={styles.headerBackgroundImage}
        blurRadius={10}
        source={{uri: avatarBackground}}>
        <View style={styles.headerColumn}>
          <UploadImage avatarDefault={avatar} />

          <Text style={styles.userNameText}>{name}</Text>
          <View style={styles.userAddressRow}>
            <GetCurrentLocation />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },

  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
});
