import {StyleSheet} from 'react-native';
import * as Colors from '@components/constants/colors';
import {hp, wp} from '@components';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: wp(20),
  },
  headerPane: {
    marginTop: hp(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  searchBar: {
    marginTop: hp(7),
    width: wp(388),
    height: hp(40),
    borderRadius: 4,
    backgroundColor: Colors.Concrete,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(16),
  },
  searchInput: {
    height: '100%',
    width: '85%',
    color: Colors.MineShaft,
    fontFamily: 'BricolageGrotesque-Regular',
    // paddingLeft: wp(16),
  },
});

export const detailStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: wp(20),
  },
  headerPane: {
    marginTop: hp(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(35),
  },
  image: {
    width: wp(186),
    height: hp(235),
  },
  infoView: {
    width: wp(186),
  },
  title: {
    fontSize: 20,
  },
  publisher: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.RollingStone,
    marginTop: 2,
  },
  amount: {
    fontSize: 30,
    lineHeight: 48,
    marginTop: 8,
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    marginRight: 6,
  },
  ratingMetrics: {
    fontSize: 14,
    marginTop: 8,
    color: Colors.OliveDrab,
  },
  controlButton: {
    marginTop: 10,
  },
  descriptionView: {
    marginTop: hp(20),
  },
  description: {
    lineHeight: hp(25),
  },
  buttonView: {
    width: '100%',
    // width: wp(388),
    alignSelf: 'center',
    position: 'absolute',
    bottom: 35,
  },
  cartView: {
    height: hp(45),
  },
});
