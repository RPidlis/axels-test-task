import { useHistory, useParams } from 'react-router-dom';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { CinemaHallComponent } from './index';

import { getSessionId, getPurchaseSeats } from '../redux/ducks/schedule';
import { AppStateType } from '../redux/store';
import TicketsComponent from './TicketsComponent';

type PurchaseSeatsType = {
  id: number;
  seats: Array<number>;
};

type PathParamType = {
  id: string;
};

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  getSessionId: (id: number) => void;
  getPurchaseSeats: (payload: PurchaseSeatsType) => void;
};

export type PropsType = MapPropsType & DispatchPropsType;

const ModalWindowComponent: React.FC<PropsType> = ({
  sessionSeats,
  seats,
  getSessionId,
  getPurchaseSeats,
}) => {
  const history = useHistory();
  const { id } = useParams<PathParamType>();
  const [chosenSeats, setChosenSeats] = useState<Array<number>>([]);
  const urlId: number = Number(id);

  useEffect(() => {
    if (seats?.length !== 0) {
      getSessionId(urlId);
    }
  }, [urlId, seats]);

  const handleModalClose = (): void => {
    getPurchaseSeats({ id: urlId, seats: chosenSeats });
    history.push('/');
  };
  const onDeleteTicket = (id: number): void => {
    setChosenSeats([...chosenSeats.filter((item: number) => item !== id)]);
  };

  const onSeatClick = (id: number): void => {
    if (chosenSeats.includes(id)) {
      onDeleteTicket(id);
    } else {
      setChosenSeats((array) => [...array, id]);
    }
  };

  return (
    <Modal
      show={true}
      onHide={() => handleModalClose()}
      size="lg"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Cinema Hall
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="p-2">
          <Row className="d-flex justify-content-around p-0 ">
            <Col xs="11" sm="10" lg="6" className="mb-5 mt-2">
              <CinemaHallComponent
                chosenSeats={chosenSeats}
                sessionSeats={sessionSeats}
                seats={seats}
                onSeatClick={onSeatClick}
              />
            </Col>
            <TicketsComponent
              chosenSeats={chosenSeats}
              handleModalClose={handleModalClose}
              onDeleteTicket={onDeleteTicket}
            />
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = ({ schedule }: AppStateType) => ({
  sessionSeats: schedule.sessionSeats,
  seats: schedule.seats,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getSessionId, getPurchaseSeats })
)(ModalWindowComponent);
