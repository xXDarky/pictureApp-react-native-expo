
import 'react-native-gesture-handler';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Battery from 'expo-battery';
import Landing from './screens/Landing'
import Take from './screens/Take'
import Display from './screens/Display'
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name= 'landing'
          component={Landing}
          options= {{title: "Landing Page", headerShown: false}}
        />
        <Stack.Screen
          name= 'take'
          component={Take}
          options= {{title: "Take picture", headerStyle:{backgroundColor:'#fff'}, headerTintColor:'#666'}}
        />
        <Stack.Screen
          name= 'display'
          component={Display}
          options= {{title: "Display Page", headerShown: true, headerStyle:{backgroundColor:'#fff'}, headerTintColor:'#666'} }
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
    
  );
}

export default App;
