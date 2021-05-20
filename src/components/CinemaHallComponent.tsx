import { Container, Row } from 'react-bootstrap';
import React from 'react';

import { Seat } from '../styled/components/cinemaHall';
import { SeatType } from '../redux/ducks/schedule';

type PropsType = {
  sessionSeats: Array<number> | null;
  seats: Array<SeatType> | null;
  chosenSeats: Array<number>;
  onSeatClick: (id: number) => void;
};

const CinemaHallComponent: React.FC<PropsType> = ({
  sessionSeats,
  seats,
  chosenSeats,
  onSeatClick,
}) => (
  <Container className="d-flex flex-column justify-content-around p-0">
    <Row className="d-flex justify-content-between pb-2">
      {seats?.map((item) => {
        const isSeatSold = sessionSeats?.includes(item.id);
        const isSeatChoized = chosenSeats?.includes(item.id) || false;
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
