
import React from 'react';

export default class Story extends React.Component {
  constructor(props) {
    super(props);

    const path = this.props.location.pathname;
    const fullPath = `https://hrsf84-mvp-server.herokuapp.com${path}`;

    this.state = { // a json format of the story
      'title': 'Please Wait for the story to load...',
      'story': 'Fetching the story now...',
      'images': []
    };

    const self = this;

    fetch(fullPath, {
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

  render() {
    return (
      <center>
        <div>
          <h2>{this.state.title}</h2>
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

