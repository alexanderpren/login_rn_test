import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getDataPhotos} from '../../services/api';
import {useQuery} from 'react-query';
import FlatListItem from './FlatListItem';
import {Loading} from '../Loading';

const FlatListComponent = () => {
  const [arrayData, setArrayData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    error,
    data: dataArray,
  } = useQuery(['myphotos', page], () => getDataPhotos(page));

  const onRefresh = () => {
    setPage(page + 1);
    setIsFetching(!isFetching);
  };

  const handleDelete = index => {
    const newArray = [...arrayData];
    newArray.splice(index, 1);
    setArrayData(newArray);
  };

  useEffect(() => {
    setArrayData(dataArray?.results ?? []);
    setIsFetching(false);
  }, [dataArray]);

  return (
    <View styles={styles.container}>
      {arrayData && (
        <FlatList
          data={arrayData}
          refreshing={isFetching}
          onRefresh={onRefresh}
          renderItem={({item, index}) => {
            const {
              location: {country},
              login: {uuid},
              picture: {large},
              name: {first, last, title},
            } = item;

            const fullname = `${title} ${first} ${last}`;
            return (
              <FlatListItem
                key={`${uuid}${index}`}
                name={fullname}
                country={country}
                urlImage={large}
                handleDelete={() => handleDelete(index)}
              />
            );
          }}
        />
      )}
      {isLoading && <Loading />}
    </View>
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});
