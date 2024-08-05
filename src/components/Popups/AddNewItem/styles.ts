import { Colors } from 'configs';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blackOpacity60,
    padding: 16,
  },
  content: {
    alignSelf: 'stretch',
    padding: 24,
    borderRadius: 32,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    color: Colors.darkGray,
    fontWeight: 'bold',
  },
  btnClose: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.darkWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowWrapper: {
    flexDirection: 'row',
    gap: 16,
  },
  oneInputInRowWidth: {
    alignSelf: 'stretch',
  },
  twoInputsInRowWidth: {
    flex: 1,
    height: 70,
    marginBottom: 16,
  },
  inputWrapper: {
    height: 70,
    marginBottom: 16,
  },
});

export default styles;
