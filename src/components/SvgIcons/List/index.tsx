import Svg, { Path } from 'react-native-svg';

import { Colors } from 'configs';

const List = () => (
  <Svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
  >
    <Path
      d="M4.33333 1H13M4.33333 5H13M4.33333 9H13M1 1H1.00667M1 5H1.00667M1 9H1.00667"
      stroke={Colors.gray}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default List;
