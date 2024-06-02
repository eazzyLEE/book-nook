import React from 'react';
import {Text as RNText} from 'react-native';
import {TextProps} from '../types';
import {styles} from './styles';

export const Text = ({children, onPress, style, title, type}: TextProps) => {
  switch (type) {
    case 'h1':
      return (
        <RNText onPress={onPress} style={[styles.boldText, style]}>
          {children || title}
        </RNText>
      );
    case 'h2':
      return (
        <RNText onPress={onPress} style={[styles.headerText, style]}>
          {children || title}
        </RNText>
      );
    case 'p':
      return (
        <RNText onPress={onPress} style={[styles.paragraphText, style]}>
          {children || title}
        </RNText>
      );
    default:
      return (
        <RNText onPress={onPress} style={[styles.text, style]}>
          {children || title}
        </RNText>
      );
  }
};
