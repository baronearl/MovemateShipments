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
import {PRIMARY_COLOR, SECONDARY_COLOR, WHITE_COLOR} from '../config/constants';
import changeNavigationBarColor from "react-native-navigation-bar-color";

const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  useEffect(() => {
    // Change the bottom nav bar color to black with light icons
    changeNavigationBarColor(WHITE_COLOR, true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={WHITE_COLOR}
        barStyle={'dark-content'}
        translucent={false}
      />
      <View style={styles.body}>
        <Image source={require('../assets/logo.png')} style={styles.splashIcon} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
  body: {
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
  splashIcon: {
    width: 100,
    height: 100,
  },
});

export default SplashScreen;
