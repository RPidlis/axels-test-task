import './App.css'
import ScheduleComponent from './components/ScheduleComponent/ScheduleComponent'
import ModalWindowComponent from './components/ModalWindowComponent/ModalWindowComponent'
import { BrowserRouter, Route } from 'react-router-dom'
import Switch from 'react-bootstrap/Switch'


const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'}>
                    <ScheduleComponent/>
                </Route>
            </Switch>
            <Switch>
                <Route path={'/modal'}>
                    <ModalWindowComponent/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
