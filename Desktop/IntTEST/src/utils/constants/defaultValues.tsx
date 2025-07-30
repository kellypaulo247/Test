import {Dimensions,Platform} from 'react-native';

const {height: deviceHeight, width: deviceWidth} = Dimensions.get('screen');
 
const windowWidth = Dimensions.get('window').width
 
  const INPUT_REGEX = /^[0-9]*\.?[0-9]*$/;
  const EMPTY_ERROR_MESSAGE = "Please enter a number";
  const INVALID_ERROR_MESSAGE = "Please enter a valid number";
  const DEFAULT_INPUT_VALUE = "Enter numbers after a commas";
  const DEFAULT_TARGET_VALUE = "Enter target number";
  const isIOS = Platform.OS === 'ios';
  const DESKTOP_WIDTH = 768;



  export {
    INPUT_REGEX,
    EMPTY_ERROR_MESSAGE,
    INVALID_ERROR_MESSAGE,
    DEFAULT_INPUT_VALUE,
    DEFAULT_TARGET_VALUE,
    DESKTOP_WIDTH,
    windowWidth,
  };
