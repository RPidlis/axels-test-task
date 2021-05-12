import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { SessionComponent } from './index';

const ScheduleComponent = () => {
	const history = useHistory();
	const handleOpenModal = () => history.push( '/modal' );

	return (<Container className="col-2 d-flex flex-column justify-content-between align-items-baseline mt-5">
		<SessionComponent time="10:00" handleOpenModal={handleOpenModal}/>
		<SessionComponent time="12:00" handleOpenModal={handleOpenModal}/>
		<SessionComponent time="14:00" handleOpenModal={handleOpenModal}/>
		<SessionComponent time="16:00" handleOpenModal={handleOpenModal}/>
		<SessionComponent time="18:00" handleOpenModal={handleOpenModal}/>
		<SessionComponent time="20:00" handleOpenModal={handleOpenModal}/>
	</Container>);
};

export default ScheduleComponent;

