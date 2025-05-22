import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {PRIMARY_COLOR, WHITE_COLOR} from '../config/constants';
import changeNavigationBarColor from "react-native-navigation-bar-color";
//import changeNavigationBarColor from 'react-native-navigation-bar-color';

const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  useEffect(() => {
    // Change the bottom nav bar color to black with light icons
    changeNavigationBarColor(PRIMARY_COLOR, true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={PRIMARY_COLOR}
        barStyle={'light-content'}
        translucent={false}
      />
      <View style={styles.body}>
        <Image source={require('../assets/logo.png')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: PRIMARY_COLOR,
  },
  body: {
    height: height,
    width: width,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: PRIMARY_COLOR,
  },
  text: {
    color: '#ff0000',
  },
});

export default SplashScreen;
