import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {Button, HeaderText, RegularText} from '@components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {WelcomeCover} from '@assets/images';

const Welcome = () => {
  const navigation: NavigationProp<any> = useNavigation();

  const proceed = () => navigation.navigate('movies');

  return (
    <View style={styles.background}>
      <HeaderText title="BookNook" style={styles.leadText} />

      <Image source={WelcomeCover} style={styles.image} resizeMode="contain" />
      <RegularText
        title="Discover Your Next Great Read"
        style={styles.subtext}
      />
      <View style={styles.buttonView}>
        <Button title="Continue" onPress={proceed} />
      </View>
    </View>
  );
};

export default Welcome;
