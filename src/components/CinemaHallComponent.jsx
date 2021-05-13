import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Seat } from '../styled/components/cinemaHall';

const CinemaHallComponent = ({ seats }) => {
  return (
    <Container className="d-flex flex-column justify-content-around p-0">
      <Row className="d-flex justify-content-between pb-2">
        {seats.map((i) => (
          <Seat key={i.seat}>{i.seat}</Seat>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  seats: state.schedule.seats
});
export default compose(connect(mapStateToProps, {}))(CinemaHallComponent);
