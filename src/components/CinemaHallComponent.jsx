import { Container, Row } from 'react-bootstrap';

import { Seat } from '../styled/components/cinemaHall';

const CinemaHallComponent = ({ sessionSeats,seats }) => (
  <Container className="d-flex flex-column justify-content-around p-0">
    <Row className="d-flex justify-content-between pb-2">
      {seats.map((item) => (
        <Seat
          key={item.id}
          variant={sessionSeats.includes(item.id) ? 'info' : 'outline-info'}
          disabled={sessionSeats.includes(item.id)}
        >
          {item.id}
        </Seat>
      ))}
    </Row>
  </Container>
);

export default CinemaHallComponent;
