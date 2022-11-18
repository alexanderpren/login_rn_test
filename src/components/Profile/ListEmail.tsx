import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Email from './Email';

const EmailList = ({emails}) => {
  return (
    <FlatList
      contentContainerStyle={styles.emailContainer}
      data={emails}
      renderItem={list => {
        const {email, id, name} = list.item;

        return (
          <Email
            key={`email-${id}`}
            index={list.index}
            name={name}
            email={email}
          />
        );
      }}
    />
  );
};

export default EmailList;

const styles = StyleSheet.create({
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
});
