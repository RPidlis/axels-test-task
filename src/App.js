import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ModalWindowComponent, ScheduleComponent } from './components/index';

import { Container } from 'react-bootstrap';

const App = () => {

	return (<BrowserRouter>
		<Container className="col-10">
			<Switch>
				<Route path="/">
					<ScheduleComponent/>
				</Route>
			</Switch>
			<Switch>
				<Route path="/modal">
					<ModalWindowComponent/>
				</Route>
			</Switch>
		</Container>
	</BrowserRouter>);
};

export default App;
