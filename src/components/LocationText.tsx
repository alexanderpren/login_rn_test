import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';
import {getLocationFromMaps} from '../services/api';
import {Loading} from './Loading';
import Icon from 'react-native-vector-icons/Ionicons';

const LocationText = ({latitude, longitude}) => {
  const {isLoading, isError, error, data} = useQuery(
    ['location', latitude, longitude],
    () => getLocationFromMaps(latitude, longitude),
  );

  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <Text>{error?.message}</Text>;
  } else {
    content = (
      <View style={styles.userCityRow}>
        <Text style={styles.userCityText}>{data[0].formatted_address}</Text>
      </View>
    );
  }
  return <View style={styles.container}>{content}</View>;
};

export default LocationText;

const styles = StyleSheet.create({
  userCityRow: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});
