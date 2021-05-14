import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { CinemaHallComponent } from './index';

const ModalWindowComponent = () => {
	const history = useHistory();
	const onCloseModal = () => history.push( '/' );

	return (
		<Modal
			show={true}
			onHide={() => onCloseModal()}
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
							<CinemaHallComponent/>
						</Col>
						<Col
							xs="10"
							sm="6"
							lg="3"
							className=" d-flex flex-column justify-content-around align-items-center mb-5 mt-2"
						>
							<h3>Tickets</h3>
							<Col className="d-flex flex-column">
								{'//some choized tickets'}
							</Col>
							<Button variant="danger" onClick={() => onCloseModal()}>
								Buy Tickets
							</Button>
						</Col>
					</Row>
				</Container>
			</Modal.Body>
		</Modal>);
};

export default ModalWindowComponent;
