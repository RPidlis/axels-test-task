// import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
// import { useHistory, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { useEffect } from 'react';
// import { compose } from 'redux';
//
// import { CinemaHallComponent } from './index';
//
// import { getSessionId } from '../redux/ducks/schedule';
//
// const ModalWindowComponent = ({ sessionSeats, match, getSessionId,seats }) => {
//
//   useEffect(() => {
//     if( seats.length !== 0 ) {
//       getSessionId( Number.parseInt(match.params.id) );
//     }
//   }, [match.params.id, seats]);
//
//   const history = useHistory();
//   const onCloseModal = () => {
//     history.push('/');
//   };
//   return (
//     <Modal
//       show={true}
//       onHide={() => onCloseModal()}
//       size="lg"
//       aria-labelledby="example-custom-modal-styling-title"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="example-custom-modal-styling-title">
//           Cinema Hall
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Container className="p-2">
//           <Row className="d-flex justify-content-around p-0 ">
//             <Col xs="11" sm="10" lg="6" className="mb-5 mt-2">
//               <CinemaHallComponent sessionSeats={sessionSeats} seats={seats}/>
//             </Col>
//             <Col
//               xs="10"
//               sm="6"
//               lg="3"
//               className=" d-flex flex-column justify-content-around align-items-center mb-5 mt-2"
//             >
//               <h3>Tickets</h3>
//               <Col className="d-flex flex-column">
//                 {'//some choized tickets'}
//               </Col>
//               <Button variant="danger" onClick={() => onCloseModal()}>
//                 Buy Tickets
//               </Button>
//             </Col>
//           </Row>
//         </Container>
//       </Modal.Body>
//     </Modal>
//   );
// };
//
// const mapStateToProps = ({ schedule }) => ({
//   sessionSeats: schedule.sessionSeats,
//   seats: schedule.seats,
// });
//
// export default compose(
//   withRouter,
//   connect(mapStateToProps, { getSessionId })
// )(ModalWindowComponent);
import { Button, Col, Container, Modal, Row, Toast } from 'react-bootstrap';
import { useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { compose } from 'redux';

import { CinemaHallComponent } from './index';

import { getSessionId } from '../redux/ducks/schedule';

const ModalWindowComponent = ({ sessionSeats, match, getSessionId, seats }) => {
  const history = useHistory();
  const [choizedSeats, setChoizedSeats] = useState([]);

  useEffect(() => {
    if (seats.length !== 0) {
      getSessionId(Number.parseInt(match.params.id));
    }
  }, [match.params.id, seats]);

  const handleModalClose = () => {
    history.push('/');
  };
  const onDeleteChoizedTicket = (id) => {
    setChoizedSeats([...choizedSeats.filter((item) => item !== id)]);
  };

  const onSeatClick = (id) => {
    if (choizedSeats.includes(id)) {
      onDeleteChoizedTicket(id);
    } else {
      setChoizedSeats((array) => [...array, id]);
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
                choizedSeats={choizedSeats}
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
                {choizedSeats?.length ? (
                  choizedSeats.map((seat) => (
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

const mapStateToProps = ({ schedule }) => ({
  sessionSeats: schedule.sessionSeats,
  seats: schedule.seats,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getSessionId })
)(ModalWindowComponent);
