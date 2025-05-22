import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import {SECONDARY_COLOR, WHITE_COLOR} from '../config/constants';

const CalculateOrderScreen = ({navigation}) => {
  const [displayAmount, setDisplayAmount] = useState(0);
  const targetAmount = 1460;

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const frameRate = 30; // frames per second
    const totalFrames = Math.floor((duration / 1000) * frameRate);
    const incrementPerFrame = targetAmount / totalFrames;
    let currentFrame = 0;

    const timerId = setInterval(() => {
      currentFrame++;

      if (currentFrame <= totalFrames) {
        const newAmount = Math.min(
          Math.floor(incrementPerFrame * currentFrame),
          targetAmount,
        );
        setDisplayAmount(newAmount);
      } else {
        setDisplayAmount(targetAmount);
        clearInterval(timerId);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timerId);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={WHITE_COLOR}
        barStyle={'dark-content'}
        translucent={false}
      />

      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>MoveMate</Text>
          <Image
            source={require('../assets/delivery.png')}
            style={styles.deliveryIcon}
          />
        </View>

        <View style={styles.boxContainer}>
          <Image
            source={require('../assets/box.png')}
            style={styles.packageIcon}
          />
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceTitle}>Total Estimated Amount</Text>
          <View style={styles.amountRow}>
            <Text style={styles.dollarSign}>$</Text>
            <Text style={styles.amount}>{displayAmount}</Text>
            <Text style={styles.currency}>USD</Text>
          </View>
          <Text style={styles.priceDescription}>
            This amount is estimated this will vary{'\n'}
            if you change your location or weight
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Tabs', {screen: 'Home'})}>
            <Text style={styles.buttonText}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#4338CA',
  },
  boxContainer: {
    position: 'relative',
    marginBottom: 50,
    alignItems: 'center',
    marginTop: 30,
  },
  priceContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  priceTitle: {
    fontSize: 28,
    fontWeight: '400',
    color: '#1F2937',
    marginBottom: 15,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 10,
  },
  dollarSign: {
    fontSize: 35,
    fontWeight: 'normal',
    color: '#10B981',
  },
  amount: {
    fontSize: 35,
    fontWeight: 'normal',
    color: '#10B981',
  },
  currency: {
    fontSize: 24,
    fontWeight: '400',
    color: '#10B981',
    marginLeft: 4,
  },
  priceDescription: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 22,
  },
  bottomContainer: {
    width: '100%',
    marginBottom: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 50,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  homeIndicator: {
    width: 120,
    height: 5,
    backgroundColor: '#D1D5DB',
    borderRadius: 100,
  },
  packageIcon: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  deliveryIcon: {
    width: 45,
    height: 45,
    borderRadius: 5,
    marginLeft: 5,
  },
});

export default CalculateOrderScreen;
