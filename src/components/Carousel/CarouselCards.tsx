import React, {useEffect, useState} from 'react';
import {View, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem from './CarouselCardItem';
import axios from 'axios';
import Config from 'react-native-config';
import {Images} from '../../types/images';
import {Loading} from '../../components/Loading';

const SLIDER_WIDTH = Dimensions.get('window').width + 70;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const CarouselCards = () => {
  const [arrayImg, setArrayImg] = useState({});
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    isLoading(true);
    const getData = async () => {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?per_page=3&query=mexico&client_id=${Config.TOKEN_KEY_UNSPLASH}`,
      );

      const data: Images = response.data;
      setArrayImg(data);

      isLoading(false);
    };
    getData().catch(error => console.error(error));
  }, []);

  const isCarousel = React.useRef(null);
  return (
    <View style={{marginTop: 20}}>
      {arrayImg && (
        <Carousel
          layout="default"
          layoutCardOffset={3}
          ref={isCarousel}
          data={arrayImg.results}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
      )}
      {loading && <Loading />}
    </View>
  );
};

export default CarouselCards;
