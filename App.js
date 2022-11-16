import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Router} from './src/routes/Router';
import {AuthProvider} from './src/contexts/Auth';
import {Provider as PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <PaperProvider>
          <Router />
        </PaperProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
