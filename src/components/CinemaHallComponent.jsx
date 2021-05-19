import { Container, Row } from 'react-bootstrap';

import { Seat } from '../styled/components/cinemaHall';

const CinemaHallComponent = ({
  sessionSeats,
  seats,
  onSeatClick,
  choizedSeats,
}) => (
  <Container className="d-flex flex-column justify-content-around p-0">
    <Row className="d-flex justify-content-between pb-2">
      {seats?.map((item) => {
        const isSeatSold = sessionSeats?.includes(item.id);
        const isSeatChoized = choizedSeats?.includes(item.id) || false;
        return (
          <Seat
            active={isSeatChoized}
            key={item.id}
            variant={
              isSeatChoized ? 'info' : isSeatSold ? 'info' : 'outline-info'
            }
            disabled={isSeatSold}
            onClick={() => onSeatClick(item.id)}
          >
            {item.id}
          </Seat>
        );
      })}
    </Row>
  </Container>
);

export default CinemaHallComponent;
