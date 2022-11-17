import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React from 'react';
import contactData from '../../mocks/profile.json';
import {Card} from 'react-native-paper';
import Header from './Header';

const Profile = () => {
  console.log(contactData.address);
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Card style={styles.cardContainer}>
          <Header
            avatar={contactData.avatar}
            avatarBackground={contactData.avatarBackground}
            name={contactData.name}
            address={contactData.address}
          />
        </Card>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
});
