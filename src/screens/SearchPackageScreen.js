import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PRIMARY_COLOR, WHITE_COLOR} from '../config/constants';

const SearchPackageScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [packages, setPackages] = useState([
    {
      id: '1',
      name: 'Macbook pro M2',
      trackingNumber: 'NE43857340857904',
      origin: 'Paris',
      destination: 'Morocco',
    },
    {
      id: '2',
      name: 'Summer linen jacket',
      trackingNumber: 'NEJ2008993412231',
      origin: 'Barcelona',
      destination: 'Paris',
    },
    {
      id: '3',
      name: 'Tapered-fit jeans AW',
      trackingNumber: 'NEJ3587026497659',
      origin: 'Colombia',
      destination: 'Paris',
    },
    {
      id: '4',
      name: 'Slim fit jeans AW',
      trackingNumber: 'NEJ3587026497659',
      origin: 'Bogota',
      destination: 'Dhaka',
    },
    {
      id: '5',
      name: 'Office setup desk',
      trackingNumber: 'NEJ2348157075963',
      origin: 'France',
      destination: 'German',
    },
  ]);

  useEffect(() => {
    setFilteredPackages(packages);
  }, []);

  const handleSearch = text => {
    setSearchQuery(text);

    if (text) {
      const filteredData = packages.filter(
        item =>
          item.name.toLowerCase().includes(text.toLowerCase()) ||
          item.trackingNumber.toLowerCase().includes(text.toLowerCase()) ||
          item.origin.toLowerCase().includes(text.toLowerCase()) ||
          item.destination.toLowerCase().includes(text.toLowerCase()),
      );
      if (filteredData.length > 0) {
        setFilteredPackages(filteredData);
      } else {
        setFilteredPackages(filteredData);
      }
    } else {
      setFilteredPackages(packages);
    }
  };

  const handleItemPress = item => {
    Alert.alert(`Name: ${item.name}`, `Tracking Number: ${item.trackingNumber} • Origin: ${item.origin} → Destination: ${item.destination}`);
  };

  const renderPackageItem = ({item}) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={styles.packageItem}>
        <View style={styles.iconContainer}>
          <Icon name="inventory-2" size={24} color="#ffffff" />
        </View>
        <View style={styles.packageInfo}>
          <Text style={styles.packageName}>{item.name}</Text>
          <Text style={styles.packageDetails}>
            #{item.trackingNumber} • {item.origin} → {item.destination}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={PRIMARY_COLOR} barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.searchRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={navigation.goBack}>
            <Ionicons name="chevron-back" size={24} color={WHITE_COLOR} />
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={navigation.goBack}>
              <Feather name="search" size={20} color="#5D4BB7" />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Search packages..."
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <TouchableOpacity style={styles.scanButton}>
              <Icon name="qr-code-scanner" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        {filteredPackages.length > 0 ? (
          <FlatList
            data={filteredPackages}
            keyExtractor={item => item.id}
            renderItem={renderPackageItem}
            contentContainerStyle={styles.listContainer}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        ) : (
          <View style={styles.packageNotFoundContainer}>
            <Text style={styles.packageNotFoundText}>
              No Package found for '{searchQuery}'
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  header: {
    paddingHorizontal: 8,
    paddingTop: 20,
    paddingBottom: 24,
    backgroundColor: PRIMARY_COLOR,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    height: 50,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
  },
  backButton: {
    padding: 8,
    marginLeft: 0,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 8,
    paddingLeft: 8,
  },
  scanButton: {
    backgroundColor: '#E78244',
    padding: 8,
    borderRadius: 20,
    margin: 5,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: 'hidden',
  },
  listContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 16,
    borderRadius: 20,
    margin: 16,
  },
  packageNotFoundContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    borderRadius: 10,
    margin: 16,
  },
  packageNotFoundText: {
    fontSize: 16,
    padding: 10,
    fontWeight: '500',
  },
  packageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  packageInfo: {
    flex: 1,
  },
  packageName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  packageDetails: {
    fontSize: 14,
    color: '#888888',
  },
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
  },
});

export default SearchPackageScreen;
