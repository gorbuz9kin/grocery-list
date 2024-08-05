import React from 'react';
import { Text, Pressable } from 'react-native';

import styles from './styles';

type Props = {
  label: string;
  onPress: () => void;
  children?: React.JSX.Element;
  isDisabled?: boolean;
};

const PrimaryButton = ({
  label,
  onPress,
  children,
  isDisabled = false,
}: Props): React.JSX.Element => (
  <Pressable
    style={
      isDisabled
        ? [styles.wrapper, styles.wrapperDisabled]
        : styles.wrapper
    }
    onPress={onPress}
    disabled={isDisabled}
  >
    {children}
    <Text style={styles.label}>{label}</Text>
  </Pressable>
);

export default PrimaryButton;
