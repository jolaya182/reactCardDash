/* eslint-disable no-unused-vars */
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './components/App';

import styles from '../styles/index.scss';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
