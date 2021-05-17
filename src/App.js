import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { compose } from 'redux';

import { ModalWindowComponent, ScheduleComponent } from './components/index';

import { getSchedule } from './redux/ducks/schedule';

const App = ({ sessions, getSchedule }) => {

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <Container className="col-10">
      <Switch>
        <Route path="/">
          <ScheduleComponent sessions={sessions} />
        </Route>
      </Switch>
      <Switch>
        <Route path="/modal/:id?" render={() => <ModalWindowComponent />} />
      </Switch>
    </Container>
  );
};
const mapStateToProps = ({ schedule }) => ({
  sessions: schedule.sessions,
});

export default compose(
  connect(mapStateToProps, { getSchedule }),
)(App);
