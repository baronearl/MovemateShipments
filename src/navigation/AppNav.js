import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from '../providers/Auth';
import {PaperProvider} from 'react-native-paper';

const AppNav = () => {
  const {loggedIn} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <PaperProvider>
        {loggedIn == null ? <AppStack /> : <AuthStack />}
      </PaperProvider>
    </NavigationContainer>
  );
};

export default AppNav;
