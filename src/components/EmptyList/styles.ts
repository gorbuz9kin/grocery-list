import { Colors } from 'configs';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 12,
    color: Colors.darkGray2,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
  },
  text: {
    width: 265,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    color: Colors.gray,
  },
});

export default styles;
