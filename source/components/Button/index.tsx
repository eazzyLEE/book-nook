import React from 'react';
import {TouchableOpacity} from 'react-native';
import {MediumText} from '../Text';
import {styles} from './styles';
import {ButtonProps} from '../types';

export const Button = ({onPress, style, title, titleStyle}: ButtonProps) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={onPress}
    activeOpacity={0.7}>
    <MediumText title={title} style={[styles.buttonTitle, titleStyle]} />
  </TouchableOpacity>
);
