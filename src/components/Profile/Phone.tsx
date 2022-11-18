import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Tel from './Tel';

const Phone = ({tels}) => {
  const handlePres = () => {
    console.log('just trying');
  };
  return (
    <SafeAreaView style={styles.telContainer}>
      {tels &&
        tels.map((list, index) => {
          const {name, id, number} = list;
          return (
            <Tel
              key={`tel-${id}`}
              index={index}
              name={name}
              number={number}
              onPressSms={handlePres}
              onPressTel={handlePres}
            />
          );
        })}
    </SafeAreaView>
  );
};

export default Phone;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  telContainer: {
    backgroundColor: '#FFF',
    paddingTop: 30,
    marginLeft: 30,
  },
});
