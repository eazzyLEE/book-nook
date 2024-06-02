import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '@screens/welcome';
import BookList from '@screens/books';
import BookDetail from '@screens/books/BookDetail';
import {StackParamList} from './types';

const Stack = createNativeStackNavigator<StackParamList>();

const Navigator = () => {
  const initialRouteName = 'home';

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="home" component={Welcome} />
      <Stack.Screen name="book_list" component={BookList} />
      <Stack.Screen name="book_detail" component={BookDetail} />
    </Stack.Navigator>
  );
};

export default Navigator;
