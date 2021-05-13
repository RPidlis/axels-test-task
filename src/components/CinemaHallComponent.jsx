import { Container, Row } from 'react-bootstrap';

import { Seat } from '../styled/components/cinemaHall';

const CinemaHallComponent = () => {
  let rowsTotal = Array.from({ length: 3 }, (s, k) => k);
  const seatsTotal = Array.from({ length: 10 }, (s, k) => k);

  return (
    <Container className="d-flex flex-column justify-content-around p-0 ">
      {rowsTotal.length >= 0
        ? rowsTotal.map((item) => {
            rowsTotal--;
            return (
              <Row key={item} className="d-flex justify-content-between pb-2">
                {seatsTotal.map((i) => (
                  <Seat key={i} />
                ))}
              </Row>
            );
          })
        : null}
    </Container>
  );
};

export default CinemaHallComponent;
