import Svg, { Path } from 'react-native-svg';

import { Colors } from 'configs';

const Close = () => (
  <Svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
  >
    <Path
      d="M9 1L1 9M1 1L9 9"
      stroke={Colors.purple}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Close;
