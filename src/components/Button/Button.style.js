import { StyleSheet, PixelRatio } from 'react-native';
import { palette } from '../../constants/Colors';

const textScale = (1 / PixelRatio.get()) + 1;

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 35 * textScale,
    width: '100%',
    elevation: 5,
    backgroundColor: palette.button,
    //shadowOffset: { width: 1.5, height: 1.5 },
    //shadowOpacity: 0.7,
    //shadowRadius: 1,
    //shadowColor: palette.lightGrey
  },
  disabledButton: {
    backgroundColor: 'white'
  },
  buttonText: {
    color: palette.secondary,
  },
  disabledText: {
    color: palette.lightGrey
  }
});
