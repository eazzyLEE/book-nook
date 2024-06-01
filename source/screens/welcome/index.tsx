import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button, HeaderText, RegularText} from '@components';
// import {Planet} from '@assets/';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation: NavigationProp<any> = useNavigation();

  const proceed = () => navigation.navigate('movies');

  return (
    <View style={styles.background}>
      {/* <Planet /> */}
      <HeaderText title="BookNook" style={styles.leadText} />
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
