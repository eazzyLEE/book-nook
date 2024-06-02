import React from 'react';
import {Image, View} from 'react-native';
import {Cart} from '@assets/svgs';
import {detailStyles as styles} from './styles';
import {WelcomeCover} from '@assets/images';
import {BackButton, Button, CartControlButton, Text} from '@components';
import {BookDetailProps} from '@navigation/types';

const BookDetail = ({route}: BookDetailProps) => {
  const book = route.params.book;
  const handleCartItem = () => {};

  return (
    <View style={styles.background}>
      <View style={styles.headerPane}>
        <BackButton />
        <Cart />
      </View>
      <View style={styles.detailView}>
        <Image source={WelcomeCover} style={styles.image} />
        <View style={styles.infoView}>
          <Text title={book.Title} style={styles.title} type="h1" />
          <Text
            title={`Publisher: ${book.Publisher}`}
            style={styles.publisher}
          />
          <Text title="₦ 55" style={styles.amount} type="h2" />
          <Text title="4.6" style={styles.ratingText} />
          <Text
            title="5,721 ratings  1,745 reviews"
            style={styles.ratingMetrics}
          />
          <CartControlButton style={styles.controlButton} />
        </View>
      </View>

      <View style={styles.descriptionView}>
        <Text
          title="When Alexandra Witt joins the faculty at Stonebridge Academy, she’s hoping to put a painful past behind her. Then one of her creative writing assignments generates some disturbing responses from students. Before long, Alex is immersed in an investigation of the students atop the school’s social hierarchy—and their connection to something called the Darkroom."
          style={styles.description}
        />

        <Text title="She soon inspires the girls who’ve started to question the school’s “boys will be boys” attitude and incites a resistance. But just as the movement is gaining momentum, Alex attracts the attention of an unknown enemy who knows a little too much about her—and what brought her to Stonebridge in the first place." />
      </View>

      <View style={styles.buttonView}>
        <Button title="Add to Cart" onPress={handleCartItem} />
      </View>
    </View>
  );
};

export default BookDetail;
