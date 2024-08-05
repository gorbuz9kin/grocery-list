import React from 'react';
import {
  TextInput,
  View,
  Text,
  ViewStyle,
} from 'react-native';

import styles from './styles';

type Props = {
  label: string;
  value: string;
  keyboardType?: 'default' | 'numeric' | 'decimal-pad';
  wrapperStyles?: ViewStyle;
  onChangeText: (text: string) => void;
};

const Input = ({
  label,
  value,
  onChangeText,
  keyboardType = 'default',
  wrapperStyles,
}: Props) => {
  return (
    <View style={[styles.form, wrapperStyles]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
