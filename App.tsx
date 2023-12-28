import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import FirstPage from './src/screens/FirstPage';
import SecondPage from './src/screens/SecondPage';
import ThirdPage from './src/screens/ThirdPage';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='FirstPage' component={FirstPage} />
        <Stack.Screen name='SecondPage' component={SecondPage} />
        <Stack.Screen name='ThirdPage' component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
