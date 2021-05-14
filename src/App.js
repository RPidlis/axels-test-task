import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { ModalWindowComponent, ScheduleComponent } from './components/index';

const App = () => (
    <BrowserRouter>
        <Container className="col-10">
            <Switch>
                <Route path="/">
                    <ScheduleComponent />
                </Route>
            </Switch>
            <Switch>
                <Route path="/modal">
                    <ModalWindowComponent />
                </Route>
            </Switch>
        </Container>
    </BrowserRouter>
);

export default App;
