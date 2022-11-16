import axios from 'axios';
import {Images} from '../types/images';
import Config from 'react-native-config';

 const getImages = async () => {
  try {
    let response: Images = await axios.get(
      `https://api.unsplash.com/search/photos?per_page=3&query=mexico&client_id=${Config.TOKEN_KEY_UNSPLASH}`,
    );
    return response;
  } catch (error) {}
};


export getImages