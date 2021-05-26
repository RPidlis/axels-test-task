import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FC, useEffect } from 'react';
import { compose } from 'redux';

import { ModalWindowComponent, ScheduleComponent } from './components';

import { getSchedule, SessionType } from './redux/ducks/schedule';
import { AppStateType } from './redux/store';

type MapPropsType = {
  sessions: Array<SessionType>;
};

type DispatchPropsType = {
  getSchedule: () => void;
};

type PropsType = MapPropsType & DispatchPropsType;

const App: FC<PropsType> = ({ sessions, getSchedule }) => {
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
const mapStateToProps = ({ schedule }: AppStateType) => ({
  sessions: schedule.sessions,
});

export default compose(
  connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    getSchedule,
  })
)(App);
