import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'stories': [] };

    this.homePath = `https://hrsf84-mvp-client.herokuapp.com/`;
    this.homeServerPath = `https://hrsf84-mvp-server.herokuapp.com/`;

    const self = this;

    console.log(`${this.homeServerPath}Home`);

    // do fetch request to get the home page stories here...
    fetch(`${this.homeServerPath}Home`, {
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
      'fontWeight': 'bold',
      'fontSize': 24,
      'color': 'grey'
    };

    const shortStory = (storyText) => {
      if (storyText.length > 96) {
        return storyText.slice(0, 97) + '...';
      }
      return storyText;
    };

    return (
      <center>
        <div>
          <h2>Check out some of our top stories:</h2>
          <br />
          {
            this.state.stories.map((story, index, array) => {
              return (
                <div key={index}>
                  <a href={this.homePath + story.title} style={storyLinkStyle} target='_blank' >{story.title}</a>
                  <br />
                  <small>{story.infoLine}</small>
                  <br /> <br />
                  <p>{shortStory(story.story)}</p>
                  <br />
                  <br />
                  <hr />
                </div>
              );
            })
          }
        </div>
      </center>
    );
  }
}
