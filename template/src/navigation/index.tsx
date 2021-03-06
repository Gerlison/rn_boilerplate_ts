import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Sample from '@modules/sample';

import { RootStackParamList } from '@navigation/types';

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Sample} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
