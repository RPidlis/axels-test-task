import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
import { Button, Col, Container, Modal, Row, Toast } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { CinemaHallComponent } from './index';

import { getSessionId, getPurchaseSeats } from '../redux/ducks/schedule';
import { AppStateType } from '../redux/store';

type PurchaseSeatsType = {
  id: number
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

type PropsType = MapPropsType &
  DispatchPropsType &
  RouteComponentProps<PathParamType>;

const ModalWindowComponent: React.FC<PropsType> = ({
  sessionSeats,
  match,
  seats,
  getSessionId,
  getPurchaseSeats,
}) => {
  const history = useHistory();
  const [chosenSeats, setChosenSeats] = useState<Array<number>>([]);
  const urlId: number = Number(match.params.id);

  useEffect(() => {
    if (seats?.length !== 0) {
      getSessionId(urlId);
    }
  }, [urlId, seats]);

  const handleModalClose = (): void => {
    getPurchaseSeats({ id: urlId, seats: chosenSeats });
    history.push('/');
  };
  const onDeleteChoizedTicket = (id: number): void => {
    setChosenSeats([...chosenSeats.filter((item: number) => item !== id)]);
  };

  const onSeatClick = (id: number): void => {
    if (chosenSeats.includes(id)) {
      onDeleteChoizedTicket(id);
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
                      <Toast onClose={() => onDeleteChoizedTicket(seat)}>
                        <Toast.Header>
                          <strong className="mr-auto">{seat}</strong>
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
    withRouter,
    connect(mapStateToProps, { getSessionId, getPurchaseSeats })
)
(ModalWindowComponent);
