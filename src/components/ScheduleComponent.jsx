import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { compose } from 'redux';

import { SessionComponent } from './index';

import { getSchedule } from '../redux/ducks/schedule';

const ScheduleComponent = ({ getSchedule, sessions }) => {
  const history = useHistory();
  const handleOpenModal = () => history.push('/modal');

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <Container className="col-2 d-flex flex-column justify-content-between align-items-baseline mt-5">
      {sessions && sessions.length ? (
        sessions.map((i) => {
          return (
            <SessionComponent
              key={i.id}
              time={i.time}
              handleOpenModal={handleOpenModal}
            />
          );
        })
      ) : (
        <div>loading.....</div>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  sessions: state.schedule.sessions
});
export default compose(connect(mapStateToProps, { getSchedule }))(
  ScheduleComponent
);
