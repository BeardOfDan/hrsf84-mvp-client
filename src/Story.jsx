
import React from 'react';
// import $ from 'jquery';


export default class Story extends React.Component {
  constructor(props) {
    super(props);

    const path = this.props.location.pathname;
    const fullPath = `https://hrsf84-mvp-server.herokuapp.com${path}`;

    this.state = {}; // will recieve a json format of the story

    const self = this;

    fetch(fullPath, {
      'method': 'GET',
      'Content-Type': 'application/json'
    })
      .then((resp) => { return resp.json(); }) // Transform the data into json
      .then((res) => {
        self.setState(res); // set state with the data
      })
      .catch((e) => {
        console.log('e', e);
      });
  }

  render() {
    // when figuring out the styling for this render, factor out the non-story reliant portions
    // then load only the factored out portion when the story is not yet loaded

    if (this.state.title !== undefined) { // if the story is loaded
      return (
        <div>
          <br />
          <nav>Navbar goes here</nav>
          <h2>{this.state.title}</h2>
          { // the picures get rendered here
            this.state.images.map((image, index, array) => {
              return (
                <img src={image} alt='This img failed to load...' />
              );
            })
          }
          <p>{this.state.story}</p>
        </div>
      );
    } else {
      return (
        <h1>Please wait for the story to load...</h1>
      );
    }
  }
}

