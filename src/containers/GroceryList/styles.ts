import { StyleSheet } from 'react-native';

import { Colors } from 'configs';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 16,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 4,
  },
  text: {
    color: Colors.gray,
    fontSize: 14,
    lineHeight: 20,
  },
  textError: {
    marginBottom: 16,
    color: Colors.red,
  },
  content: {
    flex: 1,
  },
  btn: {
    alignSelf: 'stretch',
    height: 52,
    borderRadius: 8,
    backgroundColor: Colors.purple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  btnLabel: {
    color: Colors.white,
    fontSize: 14,
  },
});

export default styles;
