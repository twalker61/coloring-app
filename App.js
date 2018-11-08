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
import ButterflySvg from './ButterflySvg'
import PolygonSvg from './PolygonSvg'
import MusicSvg from './MusicSvg'
import OctSvg from './OctSvg'
import ParsleySvg from './ParsleySvg'
import SandwichSvg from './SandwichSvg'

class ImgPreview extends Component {
  render() {
    return (
      <Image source={{uri: this.props.src}} style={{width:100, height:100}}/>
      );
  }
}

class StaticImgPreview extends Component {
  render() {
    return (
      <Image source={this.props.src} style={{width:100, height:100}}/>
      );
  }
}

class PictureScreen extends Component {

  render() {
    let display = this.props.navigation.getParam('pic', 'no pic');

    switch(display){
      case "Butterfly": 
      return(
        <View style={styles.container}>
        <View><Text> I am an {display} </Text></View>
        <ButterflySvg/>
        </View>
        );
      case "Polygon": 
      return(
        <View style={styles.container}>
        <View><Text> I am an {display} </Text></View>
        <PolygonSvg/>
        </View>
        );

      case "Music": 
      return(
        <View style={styles.container}>
        <View><Text> I am an {display} </Text></View>
        <MusicSvg/>
        </View>
        );

      case "Parsley": 
      return(
        <View style={styles.container}>
        <View><Text> I am an {display} </Text></View>
        <ParsleySvg/>
        </View>
        );

        case "Sandwich": 
        return(
          <View style={styles.container}>
          <View><Text> I am an {display} </Text></View>
          <SandwichSvg/>
          </View>
          );

      default: 
      return(
        <View style={styles.container}>
        <View><Text> I am an {display} </Text></View>
        <OctSvg/>
        </View>
        );
    }
    
    //<SvgUri width='200' height='200' source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/0/09/America_Online_logo.svg'}}/>
  }
}

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}> Welcome! Choose a picture</Text>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Picture', {pic: 'Butterfly'});}}>
              <View style={styles.imgbox}>
                  <StaticImgPreview src={require("./Resources/IMG_1.jpeg")}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Picture', {pic: 'Polygon'})}>
              <View style={styles.imgbox}>
                  <StaticImgPreview src={require("./Resources/IMG_2.jpeg")}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Picture', {pic: 'Music'})}>
              <View style={styles.imgbox}>
                  <StaticImgPreview src={require("./Resources/IMG_3.jpeg")}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Picture', {pic: 'Parsley'})}>
              <View style={styles.imgbox}>
                  <StaticImgPreview src={require("./Resources/noun_parsley_2003024.png")}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Picture', {pic: 'Parsley'})}>
              <View style={styles.imgbox}>
                  <StaticImgPreview src={require("./Resources/noun_parsley_2003024.png")}/>
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
