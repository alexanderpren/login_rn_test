import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthData, authService} from '../services/AuthService';

type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn(
    username: string,
    password: string,
    rememberMe: boolean,
  ): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Async Storage
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      //loading finished
      setLoading(false);
    }
  }

  const signIn = async (
    username: string,
    password: string,
    rememberMe: boolean,
  ) => {
    //TODO:Call API Firebase for login: JAPX
    const _authData = await authService.signIn(username, password);

    setAuthData(_authData);

    if (rememberMe) {
      AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
    }
  };

  const signOut = async () => {
    setAuthData(undefined);

    try {
      await AsyncStorage.removeItem('@AuthData');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {AuthContext, AuthProvider, useAuth};
