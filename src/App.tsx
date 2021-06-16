import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import React, { FC, useEffect } from 'react';
import { compose } from 'redux';

import { ModalWindowComponent, ScheduleComponent } from './components';

import { getSchedule, SessionType } from './redux/ducks/schedule';
import { AppStateType } from './redux/store';
import {PageNotFound} from "./components/PageNotFound";

type MapPropsType = {
  sessions: Array<SessionType>;
  scheduleError: boolean;
};

type DispatchPropsType = {
  getSchedule: () => void;
};

type PropsType = MapPropsType & DispatchPropsType;

const App: FC<PropsType> = ({ sessions, scheduleError, getSchedule }) => {
  useEffect(() => {
    getSchedule();
  }, []);

    if (scheduleError) return <Redirect to="/404" />;

    return (
    <Container className="col-10">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <ScheduleComponent sessions={sessions} />}
        />
      </Switch>
      <Switch>
        <Route path="/modal/:id?" render={() => <ModalWindowComponent />} />
      </Switch>
      <Switch>
        <Route
          path="/404"
          render={() => <PageNotFound scheduleError={scheduleError} />}
        />
      </Switch>
    </Container>
  );
};
const mapStateToProps = ({ schedule }: AppStateType) => ({
  sessions: schedule.sessions,
  scheduleError: schedule.scheduleError,
});

export default compose(
  connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    getSchedule,
  })
)(App);
