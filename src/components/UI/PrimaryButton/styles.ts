import { StyleSheet } from 'react-native';

import { Colors } from 'configs';

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
    height: 52,
    borderRadius: 8,
    backgroundColor: Colors.purple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  wrapperDisabled: {
    opacity: 0.7,
  },
  label: {
    color: Colors.white,
    fontSize: 14,
  },
});

export default styles;
