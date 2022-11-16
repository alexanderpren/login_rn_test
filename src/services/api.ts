import axios from 'axios';
import {Images} from '../types/images';
import Config from 'react-native-config';

export const getImages = async () => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?per_page=3&query=mexico&client_id=${Config.TOKEN_KEY_UNSPLASH}`,
  );

  const data: Images = response.data;
  return data;
};
