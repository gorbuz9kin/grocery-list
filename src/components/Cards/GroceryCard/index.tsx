import React, { memo } from 'react';
import { View, Text, Pressable } from 'react-native';

import { SvgIcon } from 'components';
import { Colors } from 'configs';
import styles from './styles';

type Props = {
  name: string;
  unit: string;
  quantity: string;
  isCompleted: boolean;
  onComplete: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const GroceryCard = ({
  name,
  unit,
  quantity,
  isCompleted,
  onComplete,
  onEdit,
  onDelete,
}: Props) => (
  <View
    style={
      isCompleted
        ? [styles.wrapper, styles.wrapperCompleted]
        : styles.wrapper
    }
  >
    <Pressable onPress={onComplete}>
      <View
        style={
          isCompleted
            ? [styles.checkbox, styles.checkboxChecked]
            : styles.checkbox
        }
      >
        {isCompleted && <SvgIcon.Check />}
      </View>
    </Pressable>
    <Pressable onPress={onEdit} style={styles.nameWrapper}>
      <Text
        numberOfLines={1}
        style={
          isCompleted
            ? [styles.name, styles.nameCompleted]
            : styles.name
        }
      >
        {name}
        {quantity ? (
          <Text>{` ${quantity}${unit}`}</Text>
        ) : null}
      </Text>
    </Pressable>
    <Pressable onPress={onDelete}>
      <SvgIcon.Delete
        color={isCompleted ? Colors.purple : Colors.gray}
      />
    </Pressable>
  </View>
);

export default memo(GroceryCard);
