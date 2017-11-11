
import React from 'react';
// import $ from 'jquery';


export default class Story extends React.Component {
  constructor(props) {
    super(props);

    const path = this.props.location.pathname;
    const fullPath = `https://hrsf84-mvp-server.herokuapp.com${path}`;

    this.state = {
      'title': 'Please Wait for the story to load...',
      'story': 'Fetching the story now...',
      'images': []
    }; // will recieve a json format of the story

    const self = this;

    fetch(fullPath, {
      'method': 'GET',
      'Content-Type': 'application/json'
    })
      // check if the first character or resp is '<'
      //   if so, then it is the 404 page, or some other html page
      //   if not, then it's JSON, so keep it as it currently is
      .then((res) => { return res.json(); }) // Transform the data into json
      .then((res) => {
        if (res.error === undefined) {
          self.setState(res); // set state with the data
        } else {
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
    // when figuring out the styling for this render, factor out the non-story reliant portions
    // then load only the factored out portion when the story is not yet loaded

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

