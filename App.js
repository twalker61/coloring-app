/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Alert, TouchableOpacity} from 'react-native';
import {createStackNavigator,} from 'react-navigation';
import SvgUri from 'react-native-svg-uri';
import SvgComponent from './SvgComponent'

class ImgPreview extends Component {
  render() {
    return (
      <Image source={{uri: this.props.src}} style={{width:100, height:100}}/>
      );
  }
}

class PictureScreen extends Component {

  render() {
    let display = this.props.navigation.getParam('pic', 'no pic');
    return(
      <View style={styles.container}>
      <View><Text> I am an {display} </Text></View>
      <SvgComponent/>
      </View>
      );
    //<SvgUri width='200' height='200' source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/0/09/America_Online_logo.svg'}}/>
  }
}

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}> Welcome! Choose a picture</Text>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Picture', {pic: 'octopus'});}}>
              <View style={styles.imgbox}>
                  <ImgPreview src='https://images.all-free-download.com/images/graphiclarge/coloring_book_octopus_clip_art_19789.jpg'/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Picture', {pic: 'octopus'})}>
              <View style={styles.imgbox}>
                  <ImgPreview src='https://images.all-free-download.com/images/graphiclarge/coloring_book_octopus_clip_art_19789.jpg'/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Picture', {pic: 'octopus'})}>
              <View style={styles.imgbox}>
                  <ImgPreview src='https://images.all-free-download.com/images/graphiclarge/coloring_book_octopus_clip_art_19789.jpg'/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Picture', {pic: 'octopus'})}>
              <View style={styles.imgbox}>
                  <ImgPreview src='https://images.all-free-download.com/images/graphiclarge/coloring_book_octopus_clip_art_19789.jpg'/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Picture', {pic: 'octopus'})}>
              <View style={styles.imgbox}>
                  <ImgPreview src='https://images.all-free-download.com/images/graphiclarge/coloring_book_octopus_clip_art_19789.jpg'/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Picture', {pic: 'octopus'})}>
              <View style={styles.imgbox}>
                  <ImgPreview src='https://images.all-free-download.com/images/graphiclarge/coloring_book_octopus_clip_art_19789.jpg'/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Picture', {pic: 'octopus'})}>
              <View style={styles.imgbox}>
                  <ImgPreview src='https://images.all-free-download.com/images/graphiclarge/coloring_book_octopus_clip_art_19789.jpg'/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Picture', {pic: 'octopus'})}>
              <View style={styles.imgbox}>
                  <ImgPreview src='https://images.all-free-download.com/images/graphiclarge/coloring_book_octopus_clip_art_19789.jpg'/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Picture', {pic: 'octopus'})}>
              <View style={styles.imgbox}>
                  <ImgPreview src='https://images.all-free-download.com/images/graphiclarge/coloring_book_octopus_clip_art_19789.jpg'/>
              </View>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}


const RootStack = createStackNavigator({
  Home: {screen: HomeScreen},
  Picture: {screen: PictureScreen},
},
{
  initialRouteName: 'Home',
});



type Props = {};
export default class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imgbox: {

  },
  text: {
    alignItems: 'center',
    marginTop: 20
  }
});
