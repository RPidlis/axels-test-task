import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { SessionComponent } from './index';

const ScheduleComponent = ({ sessions }) => {
  const history = useHistory();
  const handleOpenModal = (id) => {
    history.push(`/modal/${id}`);
  };

  return (
    <Container className="col-2 d-flex flex-column justify-content-between align-items-baseline mt-5">
      {sessions && sessions.length ? (
        sessions.map((item) => (
          <SessionComponent
            key={item.id}
            id={item.id}
            time={item.time}
            handleOpenModal={handleOpenModal}
          />
        ))
      ) : (
        <div>Loading.....</div>
      )}
    </Container>
  );
};

export default ScheduleComponent;
