import { Container, Row } from 'react-bootstrap';
import React from 'react';

import { Seat } from '../styled/components/cinemaHall';
import { SeatType } from '../redux/ducks/schedule';

export type PropsType = {
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
      {seats?.map((seat) => {
        const isSeatSold = sessionSeats?.includes(seat.id);
        const isSeatChoized = chosenSeats?.includes(seat.id) || false;
        return (
          <Seat
            active={isSeatChoized}
            key={seat.id}
            variant={
              isSeatChoized ? 'info' : isSeatSold ? 'info' : 'outline-info'
            }
            disabled={isSeatSold}
            onClick={() => onSeatClick(seat.id)}
          >
            {seat.id}
          </Seat>
        );
      })}
    </Row>
  </Container>
);

export default CinemaHallComponent;
