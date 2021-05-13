import styled from 'styled-components';

const Seat = styled.div`
  width: 30px;
  height: 40px;
  border-radius: 7px;
  background-color: red;
  @media (max-width: 400px) {
    width: 25px;
    height: 35px;
  }
`;

export { Seat };
