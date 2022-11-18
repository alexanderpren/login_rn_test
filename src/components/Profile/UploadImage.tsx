import React, {useState} from 'react';
import {Image, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';

export default function UploadImage({avatarDefault}) {
  const [imageUser, setImageUser] = useState(avatarDefault);

  const handleImageUser = () => {
    Alert.alert('Profile image', 'Update Profile Picture', [
      {
        text: 'Gallery',
        onPress: () => pickImageFromGallery(),
        style: 'default',
      },
      {
        text: 'Camera',
        onPress: () => pickImageFromCamera(),
        style: 'default',
      },
      {
        text: 'ask me later',
        onDismiss: () => console.log('try later'),
        style: 'cancel',
      },
    ]);
  };

  const pickImageFromGallery = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    const result = await launchImageLibrary(options);

    saveImage(result);
  };

  const pickImageFromCamera = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      saveToPhotos: true,
      cameraType: 'front',
      quality: 1,
    };
    const result = await launchCamera(options);
    if (result?.assets) {
      setImageUser(result.assets[0].uri);
    }
    saveImage(result);
  };

  const saveImage = result => {
    if (result?.assets) {
      setImageUser(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      {imageUser && (
        <FastImage
          source={{uri: imageUser, priority: FastImage.priority.normal}}
          style={styles.avatar}
        />
      )}
      <View style={styles.uploadBtnContainer}>
        <TouchableOpacity onPress={handleImageUser} style={styles.uploadBtn}>
          <Icon name={'camera'} size={30} color={'blue'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: '#efefef',
    position: 'relative',
    borderRadius: 999,
    overflow: 'hidden',
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '20%',
  },
  uploadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
  },
});
