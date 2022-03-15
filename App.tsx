import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {

  return (
    // <GestureHandlerRootView>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    // </GestureHandlerRootView>
  );
};



export default App;
