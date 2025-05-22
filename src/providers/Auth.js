import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
import {Alert} from 'react-native';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(null);
  const [loginState, setLoginState] = useState(null);

  const login = async (email, password, rememberMe) => {
    setLoggedIn(true);
    console.log("Logged in", loggedIn);
    await AsyncStorage.setItem('loggedin', 'true');
  };

  const logout = () => {
    setIsLoading(true);
    //AsyncStorage.removeItem('userToken');
    setLoggedIn(null);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{login, logout, isLoading, loggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};
