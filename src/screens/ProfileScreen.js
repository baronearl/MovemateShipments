import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {PRIMARY_COLOR} from "../config/constants";

const ProfileScreen = () => {
  const user = {
    name: 'Wertheimer, Illinois',
    username: '@WertheimerIllinois',
    bio: 'Senior Mobile App Developer | Coffee enthusiast | Travel lover ✈️',
    completed: 1250,
    pending: 890,
    items: 324,
    location: 'San Francisco, CA',
    website: 'wertheimerillinois.com',
  };

  const StatItem = ({ label, value }) => (
      <View style={styles.statItem}>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
      </View>
  );

  const ActionButton = ({ title, isPrimary = false, onPress }) => (
      <TouchableOpacity
          style={[styles.actionButton, isPrimary && styles.primaryButton]}
          onPress={onPress}
      >
        <Text style={[styles.actionButtonText, isPrimary && styles.primaryButtonText]}>
          {title}
        </Text>
      </TouchableOpacity>
  );

  const InfoItem = ({ icon, text }) => (
      <View style={styles.infoItem}>
        <Text style={styles.infoIcon}>{icon}</Text>
        <Text style={styles.infoText}>{text}</Text>
      </View>
  );

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={PRIMARY_COLOR} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.headerButton}>

            </TouchableOpacity>
            <Text style={styles.headerTitle}>Profile</Text>
            <TouchableOpacity style={styles.headerButton}>

            </TouchableOpacity>
          </View>

          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <Image source={require('../assets/profile_pics.png')} style={styles.avatar} />
              <View style={styles.onlineIndicator} />
            </View>

            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.bio}>{user.bio}</Text>

            <View style={styles.statsContainer}>
              <StatItem label="Items" value={user.items} />
              <StatItem label="Completed" value={user.completed} />
              <StatItem label="Pending" value={user.pending} />
            </View>

            <View style={styles.actionButtonsContainer}>
              <ActionButton title="Follow" isPrimary onPress={() => console.log('Follow pressed')} />
              <ActionButton title="Message" onPress={() => console.log('Message pressed')} />
            </View>
          </View>

          <View style={styles.infoSection}>
            <InfoItem icon="📍" text={user.location} />
            <InfoItem icon="🌐" text={user.website} />
            <InfoItem icon="📅" text="Joined March 2020" />
          </View>

          <View style={styles.menuSection}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuIcon}>📸</Text>
              <Text style={styles.menuText}>My Photos</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuIcon}>❤️</Text>
              <Text style={styles.menuText}>Favorites</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuIcon}>⚙️</Text>
              <Text style={styles.menuText}>Settings</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuIcon}>💬</Text>
              <Text style={styles.menuText}>Help & Support</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    backgroundColor: PRIMARY_COLOR,
    borderBottomColor: '#f0f0f0',
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButtonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4CAF50',
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  actionButton: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: PRIMARY_COLOR,
    backgroundColor: 'transparent',
  },
  primaryButton: {
    backgroundColor: PRIMARY_COLOR,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: PRIMARY_COLOR,
  },
  primaryButtonText: {
    color: '#fff',
  },
  infoSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoIcon: {
    fontSize: 16,
    marginRight: 12,
    width: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
  menuSection: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    fontSize: 18,
    marginRight: 15,
    width: 25,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  menuArrow: {
    fontSize: 18,
    color: '#ccc',
  },
});

export default ProfileScreen;