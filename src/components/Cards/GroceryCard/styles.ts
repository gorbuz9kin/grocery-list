import { StyleSheet } from 'react-native';

import { Colors } from 'configs';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 52,
    backgroundColor: Colors.darkWhite2,
    borderWidth: 1,
    borderColor: Colors.lightGray2,
    marginBottom: 12,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  wrapperCompleted: {
    backgroundColor: Colors.darkWhite,
    borderColor: Colors.lightPurple,
  },
  nameWrapper: {
    flexDirection: 'row',
    flex: 1,
  },
  name: {
    fontSize: 14,
    color: Colors.darkGray,
  },
  nameCompleted: {
    textDecorationLine: 'line-through',
    color: Colors.purple,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    borderColor: Colors.purple,
    backgroundColor: Colors.darkWhite,
  },
});

export default styles;
