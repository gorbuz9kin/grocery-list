import React from 'react';
import { View, Text } from 'react-native';

import { SvgIcon } from 'components';

import styles from './styles';

const EmptyList = (): React.JSX.Element => (
  <View style={styles.wrapper}>
    <SvgIcon.ItemsList />
    <Text style={styles.title}>Add items to your list</Text>
    <Text style={styles.text}>
      Your smart shopping list will shown here. Start by
      creating a new list.
    </Text>
  </View>
);

export default EmptyList;
