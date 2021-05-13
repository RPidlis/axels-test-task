import styled from 'styled-components';

const Seat = styled.div`
  width: 30px;
  height: 40px;
  margin: 4px;
  border-radius: 7px;
  background-color: red;
  text-align: center;
  @media (max-width: 400px) {
    width: 25px;
    height: 35px;
    margin: 2px;
  }
`;

export { Seat };
