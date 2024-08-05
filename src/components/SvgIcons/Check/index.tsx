import Svg, { Path } from 'react-native-svg';

import { Colors } from 'configs';

const Check = () => (
  <Svg width="10" height="8" viewBox="0 0 10 8" fill="none">
    <Path
      d="M9 1L3.5 6.5L1 4"
      stroke={Colors.purple}
      strokeWidth="1.6666"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Check;
