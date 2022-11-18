import {StyleSheet, View} from 'react-native';
import React from 'react';
import Email from './Email';

const EmailList = ({emails}) => {
  return (
    <View style={styles.emailContainer}>
      {emails &&
        emails.map((list, index) => {
          const {id, name, email} = list;
          return (
            <Email
              key={`email-${id}`}
              index={index}
              name={name}
              email={email}
            />
          );
        })}
    </View>
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
