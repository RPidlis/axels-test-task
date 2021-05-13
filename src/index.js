import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './App';

import { GlobalStyle } from './styled/components/globalStyle';
import { store } from './redux/store';

ReactDOM.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);

reportWebVitals();
