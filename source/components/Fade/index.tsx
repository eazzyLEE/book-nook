import {Pampas} from '../../components';
import React from 'react';
import {View, ViewStyle} from 'react-native';
import {FadeLoading} from 'react-native-fade-loading';

// const FadeView = FadeLoading as Props

// ...
export const Fade = ({
  style,
  children,
}: {
  style: ViewStyle;
  children?: JSX.Element[];
}) => {
  return (
    <FadeLoading
      visible={true}
      animated={true}
      primaryColor="lightgray"
      secondaryColor={Pampas}
      duration={5000}
      style={style}>
      {children || <View />}
    </FadeLoading>
  );
};
