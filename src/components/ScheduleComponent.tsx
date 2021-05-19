import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import React from 'react';

import { SessionComponent } from './index';

import { SessionType } from '../redux/ducks/schedule';

type PropsType = {
  sessions: Array<SessionType>;
};

const ScheduleComponent: React.FC<PropsType> = ({ sessions }) => {
  const history = useHistory();
  const handleOpenModal = (id: number) => {
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
