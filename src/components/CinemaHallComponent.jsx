import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Seat } from '../styled/components/cinemaHall';

const CinemaHallComponent = ( {seats} ) => (
	<Container className="d-flex flex-column justify-content-around p-0">
		<Row className="d-flex justify-content-between pb-2">
			{seats.map( ( item ) => (<Seat key={item.seatId}>{item.seatId}</Seat>) )}
		</Row>
	</Container>
);

const mapStateToProps = ( {schedule} ) => ({
	seats: schedule.seats
});

export default compose( connect( mapStateToProps, {} ) )( CinemaHallComponent );
