import { Button, Col, Toast } from 'react-bootstrap';
import React, { FC } from 'react';

type PropsType = {
  chosenSeats: Array<number>;
  handleModalClose: () => void;
  onDeleteTicket: (id: number) => void;
};

const TicketsComponent: FC<PropsType> = ({
  chosenSeats,
  handleModalClose,
  onDeleteTicket,
}) => {
  return (
    <Col
      xs="10"
      sm="6"
      lg="3"
      className=" d-flex flex-column justify-content-around align-items-center mb-5 mt-2"
    >
      <h3>Tickets</h3>
      <Col className="d-flex flex-column">
        {chosenSeats?.length ? (
          chosenSeats.map((seat) => (
            <div key={seat}>
              <Toast onClose={() => onDeleteTicket(seat)}>
                <Toast.Header>
                  <strong data-testid={seat} className="mr-auto">
                    {seat}
                  </strong>
                </Toast.Header>
              </Toast>
            </div>
          ))
        ) : (
          <span>Choose your seats</span>
        )}
      </Col>
      <Button variant="danger" onClick={() => handleModalClose()}>
        Buy Tickets
      </Button>
    </Col>
  );
};

export default TicketsComponent;
