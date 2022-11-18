import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, Text, View, Alert, Button} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Config from 'react-native-config';
import LocationText from './LocationText';

export default function GetCurrentLocation() {
  const [position, setPosition] = useState();
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        const input = {};
        input.latitude = pos.coords.latitude;
        input.longitude = pos.coords.longitude;
        setPosition(input);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <View>
      {position && (
        <LocationText
          latitude={position.latitude}
          longitude={position.longitude}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});
