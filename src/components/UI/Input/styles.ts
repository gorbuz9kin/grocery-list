import { Colors } from 'configs';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  form: {
    alignSelf: 'stretch',
    height: 70,
  },
  label: {
    fontSize: 15,
    lineHeight: 20,
    color: Colors.darkGray,
    marginBottom: 6,
  },
  input: {
    alignSelf: 'stretch',
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    fontSize: 16,
    color: Colors.darkGray,
  },
});

export default styles;
