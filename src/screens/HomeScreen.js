import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BLACK_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, WHITE_COLOR} from '../config/constants';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {TextInput} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  changeNavigationBarColor('#ffffff', true);

  const searchFocus = () => {
    navigation.navigate('SearchPackage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={PRIMARY_COLOR}
        barStyle={'light-content'}
        translucent={false}
      />
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image
            source={require('../assets/profile_pics.png')}
            style={styles.profileImage}
          />
          <View style={styles.locationContainer}>
            <View style={styles.locationDescriptionContainer}>
              <MaterialIcons name="near-me" size={15} color={WHITE_COLOR} />
              <Text style={styles.locationLabel}>Your location</Text>
            </View>
            <View style={styles.locationRow}>
              <Text style={styles.locationText}>Wertheimer, Illinois</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="white"
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color={BLACK_COLOR} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Feather
            name="search"
            size={20}
            color="#666"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Enter the receipt number..."
            placeholderTextColor="#999"
            onFocus={() => searchFocus()}
          />
          <MaterialIcons
            name="qr-code-scanner"
            size={20}
            color="#fff"
            style={styles.scanButton}
          />
        </View>
      </View>

      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>Tracking</Text>

          <View style={styles.trackingCard}>
            <View style={styles.trackingHeader}>
              <Text style={styles.trackingLabel}>Shipment Number</Text>
              <Image
                source={require('../assets/forklift.png')}
                style={styles.forkliftIcon}
              />
            </View>
            <Text style={styles.trackingNumber}>NEJ200899341222231</Text>

            <View style={styles.shipmentDetails}>
              <View style={styles.detailRow}>
                <View style={styles.detailIconContainer}>
                  <View style={[styles.detailIcon, styles.senderIcon]}>
                    <FontAwesome name="cube" size={18} color="#5D4037" />
                  </View>
                </View>
                <View style={styles.detailInfo}>
                  <Text style={styles.detailLabel}>Sender</Text>
                  <Text style={styles.detailValue}>Atlanta, 5243</Text>
                </View>
                <View style={styles.timeContainer}>
                  <Text style={styles.detailLabel}>Time</Text>
                  <View style={styles.timeValueContainer}>
                    <View style={styles.statusDot} />
                    <Text style={styles.timeValue}>2 day -3 days</Text>
                  </View>
                </View>
              </View>

              <View style={styles.detailRow}>
                <View style={styles.detailIconContainer}>
                  <View style={[styles.detailIcon, styles.receiverIcon]}>
                    <FontAwesome name="cube" size={18} color="#2E7D32" />
                  </View>
                </View>
                <View style={styles.detailInfo}>
                  <Text style={styles.detailLabel}>Receiver</Text>
                  <Text style={styles.detailValue}>Chicago, 6342</Text>
                </View>
                <View style={styles.statusContainer}>
                  <Text style={styles.detailLabel}>Status</Text>
                  <Text style={styles.statusValue}>Waiting to collect</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.addStopButton}>
              <AntDesign name="plus" size={18} color={SECONDARY_COLOR} />
              <Text style={styles.addStopText}>Add Stop</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.vehiclesSection}>
            <Text style={styles.sectionTitle}>Available vehicles</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.vehiclesContainer}>
              {/* Ocean Freight */}
              <TouchableOpacity style={[styles.vehicleCard]}>
                <Text style={styles.vehicleTitle}>Ocean freight</Text>
                <Text style={styles.vehicleSubtitle}>International</Text>
                <Image
                  source={require('../assets/ship.png')}
                  style={styles.vehicleImage}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.vehicleCard}>
                <Text style={styles.vehicleTitle}>Cargo freight</Text>
                <Text style={styles.vehicleSubtitle}>Reliable</Text>
                <Image
                  source={require('../assets/truck.png')}
                  style={styles.vehicleImage}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.vehicleCard}>
                <Text style={styles.vehicleTitle}>Air freight</Text>
                <Text style={styles.vehicleSubtitle}>International</Text>
                <Image
                  source={require('../assets/plane.png')}
                  style={styles.vehicleImage}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.vehicleCard}>
                <Text style={styles.vehicleTitle}>Rail freight</Text>
                <Text style={styles.vehicleSubtitle}>Standard</Text>
                <Image
                  source={require('../assets/train.png')}
                  style={styles.vehicleImage}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  body: {
    height: height,
    width: width,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: WHITE_COLOR,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
    backgroundColor: '#5D4FB7',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  locationContainer: {
    flexDirection: 'column',
  },
  locationDescriptionContainer: {
    flexDirection: 'row',
  },
  locationLabel: {
    fontSize: 12,
    color: '#E0E0E0',
    marginBottom: 2,
    marginLeft: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: WHITE_COLOR,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: WHITE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#5D4FB7',
  },
  searchBar: {
    flex: 1,
    height: 48,
    backgroundColor: WHITE_COLOR,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginRight: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
    backgroundColor: WHITE_COLOR,
  },
  scanButton: {
    padding: 10,
    width: 40,
    height: 40,
    borderRadius: 24,
    backgroundColor: SECONDARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    padding: 16,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginBottom: 12,
  },
  trackingCard: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  trackingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  trackingLabel: {
    fontSize: 14,
    color: '#999',
  },
  forkliftIcon: {
    width: 32,
    height: 32,
  },
  trackingNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
  },
  shipmentDetails: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingBottom: 16,
    marginBottom: 16,
    paddingTop: 16,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  detailIconContainer: {
    width: 40,
    alignItems: 'center',
  },
  detailIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  senderIcon: {
    backgroundColor: '#FFE0B2',
  },
  receiverIcon: {
    backgroundColor: '#C8E6C9',
  },
  detailInfo: {
    flex: 1,
    marginLeft: 7,
  },
  detailLabel: {
    fontSize: 14,
    color: '#999',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  timeContainer: {
    width: 120,
    alignItems: 'flex-start',
  },
  timeValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginRight: 6,
  },
  timeValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  statusContainer: {
    width: 120,
    alignItems: 'flex-start',
  },
  statusValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  addStopButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addStopText: {
    fontSize: 16,
    fontWeight: '500',
    color: SECONDARY_COLOR,
    marginLeft: 8,
  },
  vehiclesSection: {
    marginBottom: 16,
  },
  vehiclesContainer: {
    flexDirection: 'row',
  },
  vehicleCard: {
    width: 150,
    height: 200,
    backgroundColor: WHITE_COLOR,
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
  },
  partialCard: {
    width: 80,
  },
  vehicleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  vehicleSubtitle: {
    fontSize: 14,
    color: '#999',
    marginBottom: 8,
  },
  vehicleImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginTop: 'auto',
  },
  // headerSection: {
  //   width: width,
  //   height: 100,
  //   backgroundColor: PRIMARY_COLOR,
  //   padding: 10,
  // },
  // headerTop: {
  //   flex: 1,
  //   flexDirection: 'row',
  // },
  // profilePicture: {
  //   width: 50,
  //   height: 50,
  // },
  // headerInfoBox: {
  //   flex: 1,
  //   flexDirection: 'column',
  // },
});

export default HomeScreen;
