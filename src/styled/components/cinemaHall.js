import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { device } from './globalStyle';

const Seat = styled(Button)`
	padding: 0;
  width: 30px;
  height: 40px;
  margin: 4px;
  @media ${device.laptop} {
    width: 25px;
    height: 35px;
    margin: 2px;
  }
`;

export { Seat };
