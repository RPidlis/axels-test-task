import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from './redux/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './App';

import { GlobalStyle } from './styled/components/globalStyle';

const store = configureStore();

ReactDOM.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

reportWebVitals();
