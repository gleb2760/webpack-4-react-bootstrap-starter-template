const arr = [1, 2, 3];
const result = () => console.log(...arr);
// check console - Destructuring assignment is a cool feature that came along with ES6
result();
import React, { Suspense } from 'react';
import bsStyles from 'bootstrap/dist/css/bootstrap.min.css';
import appStyles from './styles/styles.scss';
import 'bootstrap';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import * as serviceWorker from './serviceWorker';

module.hot.accept();
ReactDOM.render(
    <Suspense fallback={(<div>Loading</div>)}>
      <App />
    </Suspense>
, document.getElementById('app'));
serviceWorker.unregister();