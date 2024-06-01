import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';
import {TextProps} from '../types';

export const HeaderText = ({style, title}: TextProps) => (
  <Text style={[styles.header, style]}>{title}</Text>
);

export const MediumText = ({style, title}: TextProps) => (
  <Text style={[styles.medium, style]}>{title}</Text>
);

export const RegularText = ({style, title}: TextProps) => (
  <Text style={[styles.regular, style]}>{title}</Text>
);
