import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'stories': [] };

    this.homePath = `https://hrsf84-mvp-client.herokuapp.com/`;

    const self = this;

    // do fetch request to get the home page stories here...
    fetch(`${this.homePath}Home`, {
      'method': 'GET',
      'Content-Type': 'application/json'
    })
      .then((res) => { return res.json(); }) // Transform the data into json
      .then((res) => {
        if (res.error === undefined) { // if it was not an error object that the server sent
          self.setState(res); // set state with the data
        } else { // render the top stories
          self.setState(res);
        }
      })
      .catch((e) => {
        console.log('e', e);
      });

  }


  render() {
    const storyLinkStyle = {
      'textDecoration': 'none',
      'fontWeight': 'bold'
    };

    return (
      <center>
        <div>
          <h2>Check out some of our top stories:</h2>
          {
            this.state.stories.map((story, index, array) => {
              return (
                <div>
                  <a href={this.homePath + story.title} style={storyLinkStyle} target='_blank' >{story.title}</a>
                  <p>{story.description}</p>
                  <small>{story.infoLine}</small>
                  <br />
                </div>
              );
            })
          }
        </div>
      </center>
    );
  }
}
