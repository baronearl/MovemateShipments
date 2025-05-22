import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR,
  WHITE_COLOR,
} from '../config/constants';
import {Appbar, TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const {width, height} = Dimensions.get('window');

const shipmentData = [
  {
    id: '1',
    status: 'in-progress',
    arriving: 'Arriving today!',
    trackingNumber: '#NE20089934122231',
    origin: 'Atlanta',
    price: '$1400 USD',
    date: 'Sep 20,2023',
  },
  {
    id: '2',
    status: 'pending',
    arriving: 'Arriving today!',
    trackingNumber: '#NE20089934122231',
    origin: 'Atlanta',
    price: '$650 USD',
    date: 'Sep 20,2023',
  },
  {
    id: '3',
    status: 'pending',
    arriving: 'Arriving today!',
    trackingNumber: '#NE20089934122231',
    origin: 'Atlanta',
    price: '$800 USD',
    date: 'Sep 20,2023',
  },
  {
    id: '4',
    status: 'loading',
    arriving: 'Arriving today!',
    trackingNumber: '#NE20089934122231',
    origin: 'Atlanta',
    price: '$230 USD',
    date: 'Sep 20,2023',
  },
  {
    id: '5',
    status: 'in-progress',
    arriving: 'Arriving today!',
    trackingNumber: '#NE20089934122231',
    origin: 'Atlanta',
    price: '$230 USD',
    date: 'Sep 20,2023',
  },
];

const ShipmentScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('All');

  const allCount = shipmentData.length;
  const completedCount = shipmentData.filter(
    item => item.status === 'completed',
  ).length;
  const inProgressCount = shipmentData.filter(
    item => item.status === 'in-progress',
  ).length;
  const pendingCount = shipmentData.filter(
    item => item.status === 'pending',
  ).length;
  const cancelledCount = shipmentData.filter(
    item => item.status === 'cancelled',
  ).length;

  const filteredShipments = shipmentData.filter(item => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Completed') return item.status === 'completed';
    if (activeTab === 'In progress') return item.status === 'in-progress';
    if (activeTab === 'Pending') return item.status === 'pending';
    if (activeTab === 'Cancelled') return item.status === 'cancelled';
    return true;
  });

  const renderStatusIcon = status => {
    switch (status) {
      case 'in-progress':
        return (
          <View style={[styles.statusDot, styles.inProgressDot]}>
            <MaterialIcons name="autorenew" size={12} color="#fff" />
          </View>
        );
      case 'pending':
        return (
          <View style={[styles.statusDot, styles.pendingDot]}>
            <MaterialIcons name="history" size={12} color="#fff" />
          </View>
        );
      case 'loading':
        return (
          <View style={[styles.statusDot, styles.loadingDot]}>
            <MaterialIcons name="speed" size={12} color="#fff" />
          </View>
        );
      default:
        return null;
    }
  };

  const renderShipmentItem = item => {
    return (
      <View key={item.id} style={styles.shipmentCard}>
        <View style={styles.shipmentHeader}>
          {renderStatusIcon(item.status)}
          <Text style={styles.statusText}>
            {item.status === 'loading' ? 'loading' : item.status}
          </Text>
        </View>
        <Text style={styles.arrivingText}>{item.arriving}</Text>
        <Text style={styles.detailsText}>
          Your delivery, {item.trackingNumber}
          {'\n'}from {item.origin}, is arriving today!
        </Text>
        {item.status !== 'loading' ? (
          <View style={styles.priceRow}>
            <Text style={styles.priceText}>{item.price}</Text>
            <Text style={styles.dateText}> · {item.date}</Text>
          </View>
        ) : (
          <View style={styles.loadingIndicator}>
            <Text>Loading...</Text>
          </View>
        )}
        <View style={styles.packageIconContainer}>
          <Image
            source={require('../assets/box.png')}
            style={styles.packageIcon}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shipment history</Text>
      </View>

      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'All' && styles.activeTab]}
            onPress={() => setActiveTab('All')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'All' && styles.activeTabText,
              ]}>
              All
            </Text>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>{allCount}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'Completed' && styles.activeTab]}
            onPress={() => setActiveTab('Completed')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'Completed' && styles.activeTabText,
              ]}>
              Completed
            </Text>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>{completedCount}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'In progress' && styles.activeTab,
            ]}
            onPress={() => setActiveTab('In progress')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'In progress' && styles.activeTabText,
              ]}>
              In progress
            </Text>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>{inProgressCount}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'Pending' && styles.activeTab]}
            onPress={() => setActiveTab('Pending')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'Pending' && styles.activeTabText,
              ]}>
              Pending Order
            </Text>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>{pendingCount}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
              style={[styles.tab, activeTab === 'Cancelled' && styles.activeTab]}
              onPress={() => setActiveTab('Cancelled')}>
            <Text
                style={[
                  styles.tabText,
                  activeTab === 'Cancelled' && styles.activeTabText,
                ]}>
              Cancelled
            </Text>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>{cancelledCount}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView style={styles.shipmentsContainer}>
        <Text style={styles.shipmentsTitle}>Shipments</Text>
        {filteredShipments.length > 0 ? (
          filteredShipments.map(renderShipmentItem)
        ) : (
          <View style={styles.emptyStateContainer}>
            <Text style={styles.emptyStateText}>No shipments found</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    zIndex: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  tabContainer: {
    backgroundColor: PRIMARY_COLOR,
    paddingBottom: 0,
    height: 50,
  },
  tab: {
    paddingHorizontal: 15,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    paddingBottom: 2,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#F97316',
  },
  tabText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  countBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 5,
  },
  countText: {
    color: '#fff',
    fontSize: 12,
  },
  shipmentsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
    backgroundColor: '#F8F8F8',
  },
  shipmentsTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
    color: '#333',
  },
  shipmentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    position: 'relative',
  },
  shipmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  inProgressDot: {
    backgroundColor: '#22C55E',
  },
  pendingDot: {
    backgroundColor: '#F97316',
  },
  loadingDot: {
    backgroundColor: '#3B82F6',
  },
  statusText: {
    color: '#888',
    fontSize: 13,
  },
  arrivingText: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
    color: '#333',
  },
  detailsText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 10,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  dateText: {
    fontSize: 14,
    color: '#888',
  },
  loadingIndicator: {
    height: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '70%',
  },
  packageIconContainer: {
    position: 'absolute',
    right: 15,
    top: '50%',
    marginTop: -20,
  },
  packageIcon: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
});
export default ShipmentScreen;
