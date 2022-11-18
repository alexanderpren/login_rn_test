import axios from 'axios';
import {Images} from '../types/images';
import {Photos} from '../types/photos';
import Config from 'react-native-config';

export const getImages = async () => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?per_page=3&query=mexico&client_id=${Config.TOKEN_KEY_UNSPLASH}`,
  );

  const data: Images = response.data;
  return data;
};

export const getDataPhotos = async page => {
  const response = await axios.get(
    `https://randomuser.me/api/?page=${page}&results=30&seed=abc`,
  );
  const data: Photos = response.data;

  return data;
};

export const getLocationFromMaps = async (latitude, longitude) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=${Config.API_MAPS}`,
  );

  return response.data.results;
};
