import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Story from './Story.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

const BasicExample = () => (
  <Router>
    <div>
      {<Route path='/login' component={Login} />}
      {<Route path='/signup' component={Signup} />}
      {<Route path='*' component={Story} />}
    </div>
  </Router>
);

ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
