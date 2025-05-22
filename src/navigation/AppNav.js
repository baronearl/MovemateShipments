import React, {useContext, useRef, useState, useEffect} from 'react';
import {AppState, View, ActivityIndicator} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from '../providers/Auth';
import {PaperProvider} from 'react-native-paper';

const AppNav = () => {
  const {loggedIn} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <PaperProvider>
        {loggedIn !== null ? <AppStack /> : <AppStack />}
      </PaperProvider>
    </NavigationContainer>
  );
};

export default AppNav;
