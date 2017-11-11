import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Story from './Story.jsx';

const sampleStory = {
  "_id": "5a064105fc55700c87b57677",
  "title": "The Second Story",
  "story": "Here is another story. It's even shorter than the first one.",
  "storyId": "5a064105fc55700c87b57676",
  "infoLine": "Fri Nov 10 2017 16:15:01 GMT-0800 (PST)  |  Comments: 0",
  "__v": 0,
  "comments": [],
  "images": [],
  "date": "Fri Nov 10 2017 16:15:01 GMT-0800 (PST)"
};

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to='/story'>Story</Link></li>
        <li><Link to='/The Second Story'>The Second Story</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path='/story' component={Story} story={sampleStory} />
      {/* <Route path='/The Second Story' component={Story} /> */}
      {<Route path='*' component={Story} />}

    </div>

  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);


const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)


const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
