import React from 'react';
import {View} from 'react-native';
import RNModal from 'react-native-modal';
import {styles} from './styles';
import {ModalProps} from '../types';

export const Modal = ({
  children,
  onBackDropPress,
  style,
  visible,
}: ModalProps) => {
  return (
    <RNModal
      isVisible={visible}
      style={[styles.modal, style]}
      onBackdropPress={onBackDropPress}
      backdropOpacity={0.4}>
      <View style={styles.modalView}>{children}</View>
    </RNModal>
  );
};
