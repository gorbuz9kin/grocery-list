import Svg, { Path } from 'react-native-svg';

import { Colors } from 'configs';

const Plus = () => (
  <Svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <Path
      d="M7 4.33333V9.66667M4.33333 7H9.66667M2.33333 1H11.6667C12.403 1 13 1.59695 13 2.33333V11.6667C13 12.403 12.403 13 11.6667 13H2.33333C1.59695 13 1 12.403 1 11.6667V2.33333C1 1.59695 1.59695 1 2.33333 1Z"
      stroke={Colors.white}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Plus;
