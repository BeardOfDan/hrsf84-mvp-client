// react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// bootstrap dependencies
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// my components
import Story from './Story.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import NavBar from './NavBar.jsx';

const BasicExample = () => (
  <Router>
    <div>
      {<Route path='*' component={NavBar} />}

      {<Route path='/login' component={Login} />}
      {<Route path='/signup' component={Signup} />}

      {/* TODO: Figure out how to only have the below route execute if the above routes are not a match */}

      {/* Possibly an if statement, for the path vs the options above */}

      {<Route path='*' component={Story} />}
    </div>
  </Router>
);

ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
