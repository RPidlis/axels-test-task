import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';

import App from './App';

import { GlobalStyle } from './styled/components/globalStyle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);

reportWebVitals();
