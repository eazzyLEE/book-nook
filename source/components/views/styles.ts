import {hp, wp} from '@components/utils';
import {Concrete, FuzzyWuzzyBrown, Gray, MineShaft, White} from '@components';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bookCover: {
    width: wp(128),
    height: hp(162),
  },
  cardView: {
    marginTop: hp(20),
    paddingHorizontal: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(180),
    height: hp(282),
    borderWidth: 0.3,
    borderRadius: 6,
    borderColor: FuzzyWuzzyBrown,
  },
  bookTitle: {
    fontSize: 18,
    // backgroundColor: 'yellow',
    lineHeight: 18,
  },
  bookAuthor: {
    fontSize: 13,
    color: Gray,
    // backgroundColor: 'pink',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: hp(12),
  },
  cartText: {
    fontSize: 11,
    color: White,
  },
  addToCartButton: {
    width: wp(78),
    height: hp(28),
    borderRadius: 4,
    backgroundColor: MineShaft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    fontSize: 18,
  },
  infoText: {
    marginTop: hp(17),
    alignItems: 'flex-start',
    width: '100%',
  },
});

export const fadeStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainCard: {
    marginTop: hp(20),
    paddingHorizontal: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(180),
    height: hp(282),
    borderRadius: 6,
    // backgroundColor: '#F3F3F3',
  },
  bookCoverFade: {
    width: wp(128),
    height: hp(162),
  },
  textFade: {
    width: wp(108),
    height: hp(20),
    marginTop: hp(10),
  },
  mdBoxFade: {
    width: wp(290),
    height: hp(98),
    marginTop: hp(30),
    marginLeft: wp(34),
  },
  halfBoxFade: {
    width: wp(80),
    height: hp(98),
    marginTop: hp(30),
    marginLeft: wp(12),
  },
  headerBoxFade: {
    width: wp(342),
    height: hp(33),
    marginTop: hp(60),
  },
});

export const controlStyles = StyleSheet.create({
  block: {
    width: wp(96),
    height: hp(45),
    backgroundColor: Concrete,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
