import {StyleSheet} from 'react-native';
import {Alto, White, WoodSmoke, hp, wp} from '@components';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: White,
    paddingHorizontal: wp(20),
  },
  buttonTop: {
    marginTop: hp(35),
  },
  listView: {
    height: hp(398),
  },
  title: {
    fontSize: 30,
  },
  headerTitle: {
    fontSize: 20,
  },
  itemStyle: {
    marginTop: hp(18),
  },
  divider: {
    width: wp(388),
    height: 1,
    backgroundColor: Alto,
  },
  totalView: {
    marginTop: hp(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 20,
    color: WoodSmoke,
  },
  buttonView: {
    width: '100%',
    // width: wp(388),
    alignSelf: 'center',
    position: 'absolute',
    bottom: 35,
  },
});
