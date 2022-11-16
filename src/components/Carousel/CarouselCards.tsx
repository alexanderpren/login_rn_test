import React, {useEffect, useState} from 'react';
import {View, Dimensions, Text, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItem';
import {getImages} from '../../services/api';
import {Loading} from '../../components/Loading';
import {useQuery} from 'react-query';

const CarouselCards = () => {

  const {
    isLoading,
    isError,
    error,
    data: images,
  } = useQuery('images', getImages);

  const isCarousel = React.useRef(null);

  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <Text>{error?.message}</Text>;
  } else {
    content = (
      <Carousel
        layout="default"
        layoutCardOffset={3}
        ref={isCarousel}
        data={images?.results}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    );
  }

  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default CarouselCards;
