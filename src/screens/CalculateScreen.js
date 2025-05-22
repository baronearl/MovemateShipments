import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PRIMARY_COLOR, SECONDARY_COLOR, WHITE_COLOR} from '../config/constants';

const CalculateScreen = ({navigation}) => {
  const [selectedPackaging, setSelectedPackaging] = useState('Box');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showPackagingOptions, setShowPackagingOptions] = useState(false);

  const packagingOptions = [
    {id: 1, name: 'Box'},
    {id: 2, name: 'Envelope'},
    {id: 3, name: 'Tube'},
    {id: 4, name: 'Pallet'},
    {id: 5, name: 'Custom'},
  ];

  const categories = [
    {id: 1, name: 'Documents'},
    {id: 2, name: 'Glass'},
    {id: 3, name: 'Liquid'},
    {id: 4, name: 'Food'},
    {id: 5, name: 'Electronic'},
    {id: 6, name: 'Product'},
    {id: 7, name: 'Others'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calculate</Text>
        <View style={{width: 24}} />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Destination</Text>
        <View style={styles.card}>
          <View style={styles.inputRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="arrow-up" size={20} color="#666" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Sender location"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="arrow-down" size={20} color="#666" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Receiver location"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputRow}>
            <View style={styles.iconContainer}>
              <Ionicons name="hourglass-outline" size={20} color="#666" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Approx weight"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Packaging</Text>
        <Text style={styles.sectionSubtitle}>What are you sending?</Text>
        <View>
          <TouchableOpacity
            style={styles.packagingSelector}
            onPress={() => setShowPackagingOptions(!showPackagingOptions)}>
            <View style={styles.packagingRow}>
              <View style={styles.packagingIconContainer}>
                <Ionicons name="cube-outline" size={24} color="#666" />
              </View>
              <Text style={styles.packagingText}>{selectedPackaging}</Text>
              <Ionicons
                name={showPackagingOptions ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="#666"
                style={styles.chevron}
              />
            </View>
          </TouchableOpacity>

          {showPackagingOptions && (
            <View style={styles.dropdownMenu}>
              {packagingOptions.map(option => (
                <TouchableOpacity
                  key={option.id}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedPackaging(option.name);
                    setShowPackagingOptions(false);
                  }}>
                  <Text style={styles.dropdownItemText}>{option.name}</Text>
                  {selectedPackaging === option.name && (
                    <Ionicons name="checkmark" size={20} color="#673AB7" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>
        <Text style={styles.sectionSubtitle}>What are you sending?</Text>
        <View style={styles.categoriesContainer}>
          {categories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                selectedCategory === category.id &&
                  styles.categoryButtonSelected,
              ]}
              onPress={() => setSelectedCategory(category.id)}>
              {selectedCategory === category.id && (
                <View style={styles.checkIconContainer}>
                  <Ionicons name="checkmark" size={16} color="#fff" />
                </View>
              )}
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category.id &&
                    styles.categoryTextSelected,
                ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.calculateButton}
          onPress={() => navigation.navigate('CalculateOrder')}>
          <Text style={styles.calculateButtonText}>Calculate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: WHITE_COLOR,
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    marginTop: 12,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 12,
  },
  card: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#f7f7f7',
    marginBottom: 16,
    borderRadius: 8,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 12,
    borderRightWidth: 1,
    borderRightColor: '#dddddd',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  packagingSelector: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 8,
    marginBottom: 8,
    zIndex: 10,
  },
  packagingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  packagingIconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    marginRight: 12,
  },
  packagingText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  chevron: {
    marginLeft: 8,
  },
  dropdownMenu: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 8,
    marginBottom: 16,
    marginTop: -6,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 20,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#13202c',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 4,
    backgroundColor: WHITE_COLOR,
  },
  categoryButtonSelected: {
    borderColor: PRIMARY_COLOR,
    backgroundColor: '#13202c',
    color: WHITE_COLOR,
  },
  categoryText: {
    color: '#333',
    fontSize: 14,
  },
  categoryTextSelected: {
    color: WHITE_COLOR,
    fontWeight: '500',
  },
  checkIconContainer: {
    marginRight: 6,
  },
  footer: {
    padding: 16,
    backgroundColor: WHITE_COLOR,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  calculateButton: {
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
  },
  calculateButtonText: {
    color: WHITE_COLOR,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CalculateScreen;
