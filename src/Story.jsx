
import React from 'react';
import Home from './Home.jsx';

export default class Story extends React.Component {
  constructor(props) {
    super(props);

    this.path = this.props.location.pathname;
    this.fullPath = `https://hrsf84-mvp-server.herokuapp.com${this.path}`;

    this.state = { // a json format of the story
      'title': 'Please Wait for the story to load...',
      'story': 'Fetching the story now...',
      'images': []
    };

    const self = this;

    let url = this.fullPath;

    this.specificPaths = ['', '/', '/Home'];

    if (this.specificPaths.indexOf(this.path) > -1) { // don't do the query in this component
      console.log('It\'s good to be home\n'); // techncially, this case doesn't need any action
    } else { // do the normal story query
      fetch(url, {
        'method': 'GET',
        'Content-Type': 'application/json'
      })
        .then((res) => { return res.json(); }) // Transform the data into json
        .then((res) => {
          if (res.error === undefined) { // if it was not an error object that the server sent
            self.setState(res); // set state with the data
          } else { // render a 404 page
            self.setState({
              'title': 'Nothing To See Here',
              'story': 'It appears that the story you attempted to fetch does not exist',
              // do a line here to add the 404 image
              'images': ['./images/Gandalf 404 Page.jpg']
            });
          }
        })
        .catch((e) => {
          console.log('e', e);
        });
    }

  }

  render() {
    if (this.specificPaths.indexOf(this.path) > -1) { // render the particular component for that specific path
      return <Home />;
    } else { // perform the normal render
      return (
        <center>
          <div>
            <h2>{this.state.title}</h2>
            <small>{this.state.infoLine}</small>
            { // the picures get rendered here
              this.state.images.map((image, index, array) => {
                return (
                  <img src={image} alt='This img failed to load...' key={index} />
                );
              })
            }
            <p>{this.state.story}</p>
          </div>
        </center>
      );
    }
  }
}

