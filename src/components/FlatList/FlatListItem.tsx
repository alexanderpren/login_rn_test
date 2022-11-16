import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {cardItemType} from '../../types/flatlist';
import {List} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import DeleteButton from '../../buttons/DeleteButton';

const FlatListItem = ({
  name,
  country,
  urlImage,
  handleDelete,
}: cardItemType) => {
  const leftSwipe = () => {
    return <DeleteButton deleteItem={handleDelete} />;
  };
  return (
    <GestureHandlerRootView>
      <Swipeable renderLeftActions={leftSwipe}>
        <View style={styles.container}>
          <List.Item
            title={name}
            description={country}
            left={props => <Avatar.Image size={30} source={{uri: urlImage}} />}
          />
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'beige',
    marginLeft: 1,
    borderColor: 'tomato',
  },
});

export default FlatListItem;
