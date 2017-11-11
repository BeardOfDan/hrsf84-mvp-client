import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Story from './Story.jsx';

const BasicExample = () => (
  <Router>
    <div>
      {<Route path='*' component={Story} />}
    </div>
  </Router>
);

ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
