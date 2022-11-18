import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import Tel from './Tel';

const Phone = ({tels}) => {
  const handlePres = () => {
    console.log('just trying');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        nestedScrollEnabled
        contentContainerStyle={styles.telContainer}
        data={tels}
        renderItem={list => {
          const {id, name, number} = list.item;

          return (
            <Tel
              key={`tel-${id}`}
              index={list.index}
              name={name}
              number={number}
              onPressSms={handlePres}
              onPressTel={handlePres}
            />
          );
        }}
      />
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
    flex: 1,
    paddingTop: 30,
    marginLeft: 30,
  },
});
