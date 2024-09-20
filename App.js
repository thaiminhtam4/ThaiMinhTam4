import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthenticatedUserProvider } from './providers';  // Custom Auth Provider
import { RootNavigator } from './navigation/RootNavigator';  // Root Navigator

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <RootNavigator />  {/* Handles AuthStack or AppStack based on auth state */}
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
};

export default App;
