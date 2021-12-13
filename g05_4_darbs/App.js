import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import Screen2 from './components/Screen2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Latvijas svētku dienas 2021'}} />
       <Stack.Screen name="Screen2" component={Screen2} options={{ title: 'Uz kalendāru'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}