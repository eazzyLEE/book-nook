import {StyleSheet} from 'react-native';
import {hp, wp} from '@components';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: hp(40),
    width: wp(190),
    height: hp(248),
  },
  leadText: {
    fontSize: 35,
  },
  subtext: {
    fontSize: 18,
    marginTop: hp(30),
  },
  buttonView: {
    width: '88%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 35,
  },
});
