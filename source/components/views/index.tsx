import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {WelcomeCover} from '@assets/images';
import {BackArrow, Cross, Dash} from '@assets/svgs';
import {Text} from '../Text';
import {
  styles,
  fadeStyles as fStyles,
  controlStyles as cStyles,
} from './styles';
import {Fade} from '../Fade';
import {BookCardProps, ControlProps} from '../types';
import {useNavigation} from '@react-navigation/native';

export const BookCard = ({book, onPress}: BookCardProps) => {
  return (
    <Pressable style={styles.cardView} onPress={onPress}>
      <Image source={WelcomeCover} style={styles.bookCover} />
      <View style={styles.infoText}>
        <Text title={book.Title} style={styles.bookTitle} />
        <Text title={book.Publisher} style={styles.bookAuthor} />
      </View>

      <View style={styles.itemRow}>
        <Text title="₦ 55" style={styles.amount} type="h2" />
        <View style={styles.addToCartButton}>
          <Text title="Add to cart" style={styles.cartText} />
        </View>
      </View>
    </Pressable>
  );
};

export const BookListFade = () => {
  return Array.from({length: 3}, () => (
    <View style={fStyles.row}>
      <Fade style={fStyles.mainCard}>
        <Fade style={fStyles.bookCoverFade} />
        <Fade style={fStyles.textFade} />

        {/* <View style={fStyles.infoGrid}>
          <Fade style={fStyles.mdBoxFade} />
          <Fade style={fStyles.halfBoxFade} />
        </View>
        <Fade style={fStyles.bgCardFade} /> */}
      </Fade>

      <Fade style={fStyles.mainCard}>
        <Fade style={fStyles.bookCoverFade} />
        <Fade style={fStyles.textFade} />

        {/* <View style={fStyles.infoGrid}>
          <Fade style={fStyles.mdBoxFade} />
          <Fade style={fStyles.halfBoxFade} />
        </View>
        <Fade style={fStyles.bgCardFade} /> */}
      </Fade>
    </View>
  ));
};

export const CartControlButton = ({style}: ControlProps) => {
  return (
    <View style={[cStyles.block, style]}>
      <Pressable>
        <Dash />
      </Pressable>
      <View>
        <Text title="1" />
      </View>
      <Pressable>
        <Cross />
      </Pressable>
    </View>
  );
};

export const BackButton = () => {
  const {goBack} = useNavigation();

  return (
    <Pressable
      onPress={goBack}
      hitSlop={{top: 10, right: 10, left: 10, bottom: 10}}>
      <BackArrow />
    </Pressable>
  );
};
