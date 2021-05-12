import { Container } from 'react-bootstrap';

import { Button, Underline } from '../styled/Session';

const SessionComponent = ( {time = 12, handleOpenModal} ) => {

	return (<Container className="d-flex flex-column align-items-center mb-2">
		<Button onClick={() => handleOpenModal()}>
			{time}
		</Button>
		<Underline/>
	</Container>);
};
export default SessionComponent;

