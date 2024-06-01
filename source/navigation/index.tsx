import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '@screens/welcome';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const initialRouteName = 'welcome';

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="home" component={Welcome} />
    </Stack.Navigator>
  );
};

export default Navigator;
