import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Router} from './src/routes/Router';
import {AuthProvider} from './src/contexts/Auth';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <PaperProvider>
        <Router />
      </PaperProvider>
    </AuthProvider>
  );
};

export default App;
