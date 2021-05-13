import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { SessionComponent } from './index';

const ScheduleComponent = () => {
  const history = useHistory();
  const handleOpenModal = () => history.push('/modal');
  const sessions = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];

  return (
    <Container className="col-2 d-flex flex-column justify-content-between align-items-baseline mt-5">
      {sessions.map((item, index) => {
        return (
          <SessionComponent
            key={index}
            time={item}
            handleOpenModal={handleOpenModal}
          />
        );
      })}
    </Container>
  );
};

export default ScheduleComponent;
