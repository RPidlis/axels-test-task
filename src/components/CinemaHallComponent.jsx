import { Container, Row } from 'react-bootstrap';

import { Seat } from '../styled/cinemaHall';

const CinemaHallComponent = () => {
	return (<Container className="d-flex flex-column justify-content-around p-0 ">
			<Row className="d-flex justify-content-between pb-2">
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
			</Row>
			<Row className="d-flex justify-content-between pb-2">
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
			</Row>
			<Row className="d-flex justify-content-between pb-2">
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
				<Seat/>
			</Row>
		</Container>);
};

export default CinemaHallComponent;
