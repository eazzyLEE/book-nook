import React from 'react';
import {FlatList, View} from 'react-native';
import {ListProps} from '../types';
import {styles} from './styles';
import {Text} from '../Text';

export const List = ({data, renderItem, searchText}: ListProps) => {
  console.log('dattewww', data);
  if (searchText && !data.length) {
    return (
      <View style={styles.noSearchResultsView}>
        <Text title={`No book title matches the term "${searchText}"`} />
      </View>
    );
  }
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => String(item.id)}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
};
