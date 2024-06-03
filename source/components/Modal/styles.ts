import {hp, wp} from '@components/utils';
import {White} from '@components';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    bottom: 0,
    position: 'absolute',
    width: '89%',
  },
  modalView: {
    backgroundColor: White,
    alignItems: 'center',
    // height: 400,
    borderRadius: 13,
    paddingVertical: hp(20),
    paddingHorizontal: wp(20),
  },
});
