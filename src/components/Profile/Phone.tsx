import {StyleSheet, FlatList, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Tel from './Tel';

const Phone = ({tels}) => {
  const handlePres = () => {
    console.log('just trying');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        nestedScrollEnabled={true}
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

    paddingTop: 30,
    marginLeft: 30,
  },
});
