import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet, Text} from 'react-native';
import {PRIMARY_COLOR} from "../config/constants";

const CountdownProgressBar = ({duration = 10000}) => {
  const progress = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 0,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }, []);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.progressBar, {width: widthInterpolated}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 3,
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: PRIMARY_COLOR,
  },
});

export default CountdownProgressBar;
