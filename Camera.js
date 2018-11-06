import React, {Component} from 'react';
import {Icon, StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default class CameraScreen extends Component {
// capturePhoto = async ()

  state = {
    flash: 'off',
    zoom: 0,
    autoFocus: 'on',
    depth: 0,
    type: 'back',
    whiteBalance: 'auto',
    ratio: '16:9',
    ratios: [],
    photoId: 1,
    showGallery: false,
    photos: [],
    faces: [],
    recordOptions: {
      mute: false,
      maxDuration: 5,
      quality: RNCamera.Constants.VideoQuality["288p"],
    },
    isRecording: false
  };

  toggleFacing() {
    this.setState({
      type: this.state.type === 'back' ? 'front' : 'back',
    });
  }

  takePicture = async function(camera) {
    ToastAndroid.showWithGravity(
      'Picture Taken!',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    console.log(data.uri);
  }

  render() {
    return (
     	<View style={styles.container}>
       		<RNCamera
         	ref={camera => {
            	this.camera = camera;
         	}}
         	style={styles.preview}
        	>
         	<View style={styles.captureContainer}>
              <TouchableOpacity onPress={() => this.takePicture(this.camera)} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> TAKE PHOTO </Text>
              </TouchableOpacity>
             {/* <TouchableOpacity style={styles.flipButton} onPress={this.toggleFacing.bind(this)}>
                <Text style={styles.flipText}> FLIP </Text>
              </TouchableOpacity>*/}
         	</View>
        	</RNCamera>
     	</View>
    	);
	}
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  captureContainer: {
  	flex: 0,
  	flexDirection: 'row',
  	justifyContent: 'center'
  }
});