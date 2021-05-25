import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ReactDOM from 'react-dom';

import App from './App';

import { GlobalStyle } from './styled/components/globalStyle';

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
